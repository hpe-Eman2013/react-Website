import express from "express";
import Testimony from "../models/Testimony.js";
import multer from "multer";

const router = express.Router();

// memory storage keeps file in RAM (no disk writes)
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
/**
 * GET /api/testimonies
 * Optional query: approved=true|false
 */

router.get("/", async (req, res) => {
  try {
    const { approved } = req.query;

    const filter = {};
    if (approved === "true") filter.approved = true;

    const items = await Testimony.find(filter).sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch testimonies" });
  }
});

router.post("/", upload.single("avatar"), async (req, res) => {
  try {
    const name = (req.body.name || "").trim();
    const message = (req.body.message || "").trim();

    // Parse location (sent as JSON string)
    let location = null;
    if (req.body.location) {
      try {
        location = JSON.parse(req.body.location);
      } catch {
        location = null;
      }
    }

    // Validate required fields
    if (!message)
      return res.status(400).json({ message: "Message is required." });

    // Word count mirror (100 max)
    const wordCount = message.trim().split(/\s+/).filter(Boolean).length;
    if (wordCount > 100) {
      return res
        .status(400)
        .json({ message: "Comment must be 100 words or less." });
    }

    // Handle avatar:
    // Option A (recommended): upload to cloud storage (S3/Cloudinary) and store URL.
    // Option B (fast dev): store nothing and ignore file (or save to disk).
    let avatarUrl = null;

    if (req.file) {
      // TODO: upload req.file.buffer somewhere and set avatarUrl
      // For now, keep it null unless you implement an uploader.
      avatarUrl = null;
    }

    const created = await Testimony.create({
      name: name || "Anonymous",
      message,
      approved: false,
      avatarUrl,
      location,
    });

    return res.status(201).json({ id: created._id });
  } catch (err) {
    // Multer file errors
    if (err.message === "Invalid file type") {
      return res
        .status(400)
        .json({ message: "Avatar must be JPG, PNG, or WebP." });
    }
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;
