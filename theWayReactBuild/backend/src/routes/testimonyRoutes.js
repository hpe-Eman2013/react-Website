import express from "express";
import Testimony from "../models/Testimony.js";

const router = express.Router();

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

router.post("/", async (req, res) => {
  try {
    const { name, message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ message: "Message is required." });
    }

    const created = await Testimony.create({
      name: name?.trim() || "Anonymous",
      message: message.trim(),
      approved: false, // public list is approved-only
    });

    return res.status(201).json(created);
  } catch (err) {
    return res.status(500).json({ message: "Failed to create testimony." });
  }
});

export default router;
