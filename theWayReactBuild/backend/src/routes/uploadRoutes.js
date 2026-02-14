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

    const allowedMime = new Set(["image/jpeg", "image/png", "image/webp"]);
    const allowedExt = new Set([".jpg", ".jpeg", ".png", ".webp"]);

    const ext = (req.file.originalname || "")
      .toLowerCase()
      .slice((req.file.originalname || "").lastIndexOf("."));

    const mimeOk = allowedMime.has(req.file.mimetype);
    const extOk = allowedExt.has(ext);

    if (!mimeOk && !extOk) {
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
  } catch (err) {
    return res.status(500).json({ message: err.message || "Upload failed." });
  }
});

export default router;
