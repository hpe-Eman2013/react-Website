import express from "express";
import Question from "../models/Question.js";
import requireAdminAuth from "../middleware/requireAdminAuth.js";

const router = express.Router();
router.use(requireAdminAuth);

router.get("/", async (req, res) => {
  try {
    const items = await Question.find({}).sort({ createdAt: -1 }).lean();
    return res.json({ ok: true, items });
  } catch (err) {
    console.error("GET /api/admin/questions error:", err);
    return res.status(500).json({ message: "Failed to fetch questions." });
  }
});

router.patch("/:id/mark-answered", async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await Question.findByIdAndUpdate(
      id,
      { answered: true },
      { new: true },
    );

    if (!updated)
      return res.status(404).json({ message: "Question not found." });

    return res.json({ ok: true, item: updated });
  } catch (err) {
    console.error("PATCH mark-answered error:", err);
    return res.status(500).json({ message: "Failed to update question." });
  }
});

export default router;
