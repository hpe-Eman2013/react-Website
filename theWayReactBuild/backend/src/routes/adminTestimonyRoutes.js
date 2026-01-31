import express from "express";
import {
  getPendingTestimonies,
  approveOne,
  approveBulk,
  deleteOne,
  deleteBulk,
} from "../controllers/adminTestimonyController.js";

const router = express.Router();

// GET /api/admin/testimonies/pending  -> unapproved list
router.get("/pending", getPendingTestimonies);

// PATCH /api/admin/testimonies/:id/approve -> approve single
router.patch("/:id/approve", approveOne);

// PATCH /api/admin/testimonies/approve-bulk -> approve many
router.patch("/approve-bulk", approveBulk);

// DELETE /api/admin/testimonies/:id -> delete single
router.delete("/:id", deleteOne);

// POST /api/admin/testimonies/delete-bulk -> delete many
router.post("/delete-bulk", deleteBulk);

export default router;
