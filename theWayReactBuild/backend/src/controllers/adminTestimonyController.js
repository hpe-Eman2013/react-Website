import mongoose from "mongoose";
import Testimony from "../models/Testimony.js"; // <-- adjust path/name if yours differs

// GET /api/admin/testimonies/pending
export async function getPendingTestimonies(req, res) {
  try {
    const items = await Testimony.find({ approved: false })
      .sort({ createdAt: -1 })
      .lean();

    return res.json(items);
  } catch {
    return res
      .status(500)
      .json({ message: "Failed to load pending testimonies." });
  }
}

// PATCH /api/admin/testimonies/:id/approve
export async function approveOne(req, res) {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid testimony id." });
    }

    const updated = await Testimony.findByIdAndUpdate(
      id,
      { $set: { approved: true } },
      { new: true },
    ).lean();

    if (!updated) {
      return res.status(404).json({ message: "Testimony not found." });
    }

    return res.json({ ok: true, testimony: updated });
  } catch {
    return res.status(500).json({ message: "Approve failed." });
  }
}

// PATCH /api/admin/testimonies/approve-bulk
export async function approveBulk(req, res) {
  try {
    const { ids } = req.body || {};

    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: "ids[] required." });
    }

    const validIds = ids.filter(mongoose.isValidObjectId);
    if (validIds.length === 0) {
      return res.status(400).json({ message: "No valid ids provided." });
    }

    const result = await Testimony.updateMany(
      { _id: { $in: validIds } },
      { $set: { approved: true } },
    );

    return res.json({
      ok: true,
      matched: result.matchedCount ?? result.n ?? 0,
      modified: result.modifiedCount ?? result.nModified ?? 0,
    });
  } catch {
    return res.status(500).json({ message: "Bulk approve failed." });
  }
}

// DELETE /api/admin/testimonies/:id
export async function deleteOne(req, res) {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid testimony id." });
    }

    const deleted = await Testimony.findByIdAndDelete(id).lean();
    if (!deleted) {
      return res.status(404).json({ message: "Testimony not found." });
    }

    return res.json({ ok: true });
  } catch {
    return res.status(500).json({ message: "Delete failed." });
  }
}

// POST /api/admin/testimonies/delete-bulk
export async function deleteBulk(req, res) {
  try {
    const { ids } = req.body || {};

    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: "ids[] required." });
    }

    const validIds = ids.filter(mongoose.isValidObjectId);
    if (validIds.length === 0) {
      return res.status(400).json({ message: "No valid ids provided." });
    }

    const result = await Testimony.deleteMany({ _id: { $in: validIds } });

    return res.json({
      ok: true,
      deleted: result.deletedCount ?? 0,
    });
  } catch {
    return res.status(500).json({ message: "Bulk delete failed." });
  }
}
