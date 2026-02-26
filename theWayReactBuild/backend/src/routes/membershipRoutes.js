import express from "express";
import multer from "multer";
import MembershipRequest from "../models/MembershipRequest.js";
import { uploadBufferToCloudinary } from "../utils/cloudinaryUpload.js";
import { sendMembershipNotification } from "../services/emailService.js";

const router = express.Router();

// Attachments are files (optional). Signature is base64 dataUrl in req.body.
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 7 * 1024 * 1024, // 7MB per attachment
    files: 5, // up to 5 attachments
  },
});

// Helper: parse base64 data url -> { mime, buffer }
function parseDataUrl(dataUrl) {
  const match = /^data:([^;]+);base64,(.+)$/.exec(dataUrl || "");
  if (!match) throw new Error("Invalid signatureDataUrl format.");

  const mime = match[1];
  const buffer = Buffer.from(match[2], "base64");
  return { mime, buffer };
}

router.post("/submit", upload.array("attachments", 5), async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      cityState,
      howHeard,
      statement,
      signatureName,
      signatureConsent,
      signatureDataUrl,
    } = req.body;

    if (!fullName || !email || !statement) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const consentBool =
      signatureConsent === "true" || signatureConsent === true;

    if (!consentBool) {
      return res.status(400).json({
        message: "You must consent that your digital signature is binding.",
      });
    }

    if (!signatureName || !signatureName.trim()) {
      return res.status(400).json({ message: "Signature name is required." });
    }

    if (!signatureDataUrl) {
      return res.status(400).json({ message: "Signature is required." });
    }

    // -------- Signature (base64 dataUrl) --------
    const { mime, buffer: sigBuffer } = parseDataUrl(signatureDataUrl);

    // Accept only common image types for signature
    if (!["image/png", "image/jpeg", "image/jpg"].includes(mime)) {
      return res.status(400).json({
        message: "Signature must be a PNG or JPEG image.",
      });
    }

    // Optional: enforce signature size limit (e.g., 1MB)
    if (sigBuffer.length > 1 * 1024 * 1024) {
      return res.status(400).json({
        message: "Signature image is too large. Please sign again.",
      });
    }

    const sigFilename = `signature-${Date.now()}.png`;

    const sigUpload = await uploadBufferToCloudinary({
      buffer: sigBuffer,
      folder: "wom/membership/signatures",
      resourceType: "image",
      filename: sigFilename,
    });

    const signatureAsset = {
      publicId: sigUpload.public_id,
      secureUrl: sigUpload.secure_url,
      resourceType: sigUpload.resource_type,
      bytes: sigUpload.bytes,
      format: sigUpload.format,
      originalFilename: sigFilename,
    };

    // -------- Attachments (optional) --------
    const attachmentsFiles = req.files || [];
    const attachments = [];

    for (const f of attachmentsFiles) {
      const up = await uploadBufferToCloudinary({
        buffer: f.buffer,
        folder: "wom/membership/attachments",
        resourceType: "raw",
        filename: f.originalname,
      });

      attachments.push({
        publicId: up.public_id,
        secureUrl: up.secure_url,
        resourceType: up.resource_type,
        bytes: up.bytes,
        format: up.format,
        originalFilename: f.originalname,
      });
    }

    const created = await MembershipRequest.create({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: (phone || "").trim(),
      cityState: (cityState || "").trim(),
      howHeard: (howHeard || "").trim(),
      statement: statement.trim(),
      signatureName: signatureName.trim(),
      signatureConsent: consentBool,
      signatureAsset,
      attachments,
    });

    await sendMembershipNotification(created);

    return res.status(201).json({ ok: true });
  } catch (err) {
    console.error("Membership submit error:", err);
    return res.status(500).json({ message: "Submission failed." });
  }
});

export default router;
