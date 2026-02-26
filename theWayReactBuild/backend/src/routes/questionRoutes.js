import express from "express";
import Question from "../models/Question.js";
import { sendQuestionNotification } from "../services/emailService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, question } = req.body;

    if (!email || !question) {
      return res
        .status(400)
        .json({ message: "Email and question are required." });
    }

    const created = await Question.create({
      name: (name || "").trim(),
      email: email.trim().toLowerCase(),
      question: question.trim(),
    });

    await sendQuestionNotification(created);

    return res.status(201).json({ ok: true });
  } catch (err) {
    console.error("POST /api/questions error:", err);
    return res.status(500).json({ message: "Failed to submit question." });
  }
});

export default router;
