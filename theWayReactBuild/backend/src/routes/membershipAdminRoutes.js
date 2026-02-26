import express from "express";
import MembershipRequest from "../models/MembershipRequest.js";
import requireAdminAuth from "../middleware/requireAdminAuth.js";
import mongoose from "mongoose";

const router = express.Router();

// ✅ Admin-only
router.use(requireAdminAuth);

// GET pending requests
router.get("/pending", async (req, res) => {
  try {
    const items = await MembershipRequest.find({ status: "pending" })
      .sort({ createdAt: -1 })
      .lean();

    return res.json({ ok: true, items });
  } catch (err) {
    console.error("GET /api/admin/membership/pending error:", err);
    return res
      .status(500)
      .json({ message: "Failed to fetch pending requests." });
  }
});

// GET all requests (optional, useful for Admin)
router.get("/", async (req, res) => {
  try {
    const items = await MembershipRequest.find({})
      .populate("reviewedBy", "username role") // optional, if you want reviewer details
      .sort({ createdAt: -1 })
      .lean();

    return res.json({ ok: true, items });
  } catch (err) {
    console.error("GET /api/admin/membership error:", err);
    return res.status(500).json({ message: "Failed to fetch requests." });
  }
});

// APPROVE
router.patch("/:id/approve", async (req, res) => {
  try {
    const { id } = req.params;
    const { note = "" } = req.body;

    const updated = await MembershipRequest.findByIdAndUpdate(
      id,
      {
        status: "approved",
        reviewedAt: new Date(),
        reviewedBy: req.admin?.id
          ? new mongoose.Types.ObjectId(req.admin.id)
          : null,
        reviewNote: note,
      },
      { new: true },
    );

    if (!updated)
      return res.status(404).json({ message: "Request not found." });

    return res.json({ ok: true, item: updated });
  } catch (err) {
    console.error("PATCH /api/admin/membership/:id/approve error:", err);
    return res.status(500).json({ message: "Failed to approve request." });
  }
});

// DENY
router.patch("/:id/deny", async (req, res) => {
  try {
    const { id } = req.params;
    const { note = "" } = req.body;

    const updated = await MembershipRequest.findByIdAndUpdate(
      id,
      {
        status: "denied",
        reviewedAt: new Date(),
        reviewedBy: req.admin?.id || null, // ✅ from requireAdminAuth.js
        reviewNote: note,
      },
      { new: true },
    );

    if (!updated)
      return res.status(404).json({ message: "Request not found." });

    return res.json({ ok: true, item: updated });
  } catch (err) {
    console.error("PATCH /api/admin/membership/:id/deny error:", err);
    return res.status(500).json({ message: "Failed to deny request." });
  }
});

export default router;
