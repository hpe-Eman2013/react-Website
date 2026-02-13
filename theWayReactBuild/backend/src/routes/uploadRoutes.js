import express from "express";
import multer from "multer";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

router.post("/image", upload.single("image"), async (req, res) => {
  try {
    if (!req.file)
      return res.status(400).json({ message: "No file uploaded." });

    const allowed = new Set(["image/jpeg/jpg", "image/png", "image/webp"]);
    if (!allowed.has(req.file.mimetype)) {
      return res
        .status(400)
        .json({ message: "Only JPG/JPEG, PNG, or WebP allowed." });
    }

    const b64 = req.file.buffer.toString("base64");
    const dataUri = `data:${req.file.mimetype};base64,${b64}`;

    const result = await cloudinary.uploader.upload(dataUri, {
      folder: "way-of-messiah/testimonies",
      resource_type: "image",
    });

    return res.json({
      url: result.secure_url,
      publicId: result.public_id,
      width: result.width,
      height: result.height,
      format: result.format,
    });
  } catch {
    return res.status(500).json({ message: "Upload failed." });
  }
});

export default router;
