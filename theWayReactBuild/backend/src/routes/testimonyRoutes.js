import express from "express";
import Testimony from "../models/Testimony.js";
import multer from "multer";
import rateLimit from "express-rate-limit";

const router = express.Router();

// --------------------
// Anti-spam: rate limit
// --------------------
const testimonyLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 10, // per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many submissions. Please try again later." },
});

// --------------------
// Upload: in-memory file
// --------------------
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 4 * 1024 * 1024 }, // 4MB
  fileFilter: (req, file, cb) => {
    const ok = ["image/jpeg", "image/png", "image/webp"].includes(
      file.mimetype,
    );
    cb(ok ? null : new Error("Invalid file type"), ok);
  },
});

// --------------------
// Helpers
// --------------------
function safeStr(v, max = 200) {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
}

function parseLocation(raw) {
  // raw might be JSON string or object depending on how client sends it
  let obj = null;

  if (!raw) return null;

  if (typeof raw === "string") {
    try {
      obj = JSON.parse(raw);
    } catch {
      obj = null;
    }
  } else if (typeof raw === "object") {
    obj = raw;
  }

  if (!obj || typeof obj !== "object") return null;

  // Normalize schema keys:
  // frontend may send stateProvince; schema uses state
  const country = safeStr(obj.country, 60);
  const state = safeStr(obj.state || obj.stateProvince, 60);
  const city = safeStr(obj.city, 80);
  const postalCode = safeStr(obj.postalCode, 20);

  // If everything is empty, return null to avoid noisy objects
  if (!country && !state && !city && !postalCode) return null;

  return { country, state, city, postalCode };
}

/**
 * GET /api/testimonies
 * Optional query: approved=true|false
 */
router.get("/", async (req, res) => {
  try {
    const { approved } = req.query;

    const filter = {};
    if (approved === "true") filter.approved = true;
    if (approved === "false") filter.approved = false;

    const items = await Testimony.find(filter).sort({ createdAt: -1 });
    res.json(items);
  } catch {
    res.status(500).json({ message: "Failed to fetch testimonies" });
  }
});

/**
 * POST /api/testimonies
 * Accepts multipart/form-data:
 * - name (string)
 * - message (string) REQUIRED
 * - location (JSON string) optional
 * - avatar (file) optional
 * - website (honeypot) optional
 */
router.post(
  "/",
  testimonyLimiter,
  upload.single("avatar"),
  async (req, res) => {
    try {
      // Honeypot: bots often fill hidden fields
      if (req.body.website) {
        return res.status(400).json({ message: "Spam detected." });
      }

      const name = safeStr(req.body.name, 80);
      const message = safeStr(req.body.message, 4000);

      // ✅ Parse once (normalized)
      const location = parseLocation(req.body.location);

      // Required message
      if (!message) {
        return res.status(400).json({ message: "Message is required." });
      }

      // Word count mirror (100 max)
      const wordCount = message.split(/\s+/).filter(Boolean).length;
      if (wordCount > 100) {
        return res
          .status(400)
          .json({ message: "Testimony must be 100 words or less." });
      }

      // Request response + email validation
      const requestResponse =
        req.body.requestResponse === "true" ||
        req.body.requestResponse === true;

      const contactEmail = (req.body.contactEmail || "").trim();

      if (requestResponse) {
        if (!contactEmail) {
          return res
            .status(400)
            .json({ message: "Email is required when requesting a response." });
        }

        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail);
        if (!validEmail) {
          return res
            .status(400)
            .json({ message: "Please provide a valid email address." });
        }
      }

      // Avatar handling (still placeholder until Cloudinary/S3)
      let avatarUrl = "";
      if (req.file) {
        avatarUrl = "";
      }
      const imageUrl = safeStr(req.body.imageUrl, 500);
      const imagePublicId = safeStr(req.body.imagePublicId, 300);

      // Optional safety check (BEFORE create)
      const prefix = "https://res.cloudinary.com/dwzmuk4fi/";
      if (imageUrl && !imageUrl.startsWith(prefix)) {
        return res.status(400).json({ message: "Invalid image URL." });
      }

      const created = await Testimony.create({
        name: name || "Anonymous",
        message,
        imageUrl: imageUrl || undefined,
        imagePublicId: imagePublicId || undefined,
        approved: false,
        avatarUrl,
        location: location || undefined,
        requestResponse,
        contactEmail: requestResponse ? contactEmail : "",
      });

      return res.status(201).json({ id: created._id });
    } catch (err) {
      if (err.message === "Invalid file type") {
        return res
          .status(400)
          .json({ message: "Avatar must be JPG, PNG, or WebP." });
      }
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({ message: "Avatar must be under 4MB." });
      }
      return res.status(500).json({ message: "Server error" });
    }
  },
);
// DEV ONLY: clear vote memory for this session
router.post("/votes/reset", (req, res) => {
  if (!req.session)
    return res.status(500).json({ message: "Session not available." });
  req.session.testimonyVotes = {};
  return res.json({ ok: true });
});
// helper
function getVoteMap(req) {
  if (!req.session) return null;
  if (!req.session.testimonyVotes) req.session.testimonyVotes = {};
  return req.session.testimonyVotes;
}
// ✅ POST /api/testimonies/:id/like
router.post("/:id/like", async (req, res) => {
  try {
    const { id } = req.params;

    const votes = getVoteMap(req);
    if (!votes)
      return res.status(500).json({ message: "Session not available." });

    const prev = votes[id]; // "like" | "dislike" | undefined

    // already liked → block (or no-op)
    if (prev === "like") {
      const t = await Testimony.findById(id).select("likes dislikes");
      if (!t) return res.status(404).json({ message: "Not found." });
      return res.status(200).json({
        likes: t.likes,
        dislikes: t.dislikes,
        userVote: "like",
        message: "Already liked in this session.",
      });
    }

    // switching from dislike → like
    const inc = prev === "dislike" ? { likes: 1, dislikes: -1 } : { likes: 1 };

    const updated = await Testimony.findByIdAndUpdate(
      id,
      { $inc: inc },
      { new: true },
    ).select("likes dislikes");

    if (!updated) return res.status(404).json({ message: "Not found." });

    votes[id] = "like";

    return res.json({
      likes: updated.likes,
      dislikes: updated.dislikes,
      userVote: "like",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

// ✅ POST /api/testimonies/:id/dislike
router.post("/:id/dislike", async (req, res) => {
  try {
    const { id } = req.params;

    const votes = getVoteMap(req);
    if (!votes)
      return res.status(500).json({ message: "Session not available." });

    const prev = votes[id]; // "like" | "dislike" | undefined

    // already disliked → block (or no-op)
    if (prev === "dislike") {
      const t = await Testimony.findById(id).select("likes dislikes");
      if (!t) return res.status(404).json({ message: "Not found." });
      return res.status(200).json({
        likes: t.likes,
        dislikes: t.dislikes,
        userVote: "dislike",
        message: "Already disliked in this session.",
      });
    }

    // switching from like → dislike
    const inc = prev === "like" ? { dislikes: 1, likes: -1 } : { dislikes: 1 };

    const updated = await Testimony.findByIdAndUpdate(
      id,
      { $inc: inc },
      { new: true },
    ).select("likes dislikes");

    if (!updated) return res.status(404).json({ message: "Not found." });

    votes[id] = "dislike";

    return res.json({
      likes: updated.likes,
      dislikes: updated.dislikes,
      userVote: "dislike",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;
