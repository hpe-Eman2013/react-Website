import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import testimonyRoutes from "./routes/testimonyRoutes.js";
import cookieParser from "cookie-parser";
import adminAuthRoutes from "./routes/adminAuthRoutes.js";
import { requireAdminAuth } from "./middleware/requireAdminAuth.js";
import adminTestimonyRoutes from "./routes/adminTestimonyRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);
app.use(cookieParser());
app.use("/api/admin/auth", adminAuthRoutes);

// Routes
app.use("/api/admin/testimonies", requireAdminAuth, adminTestimonyRoutes);
app.use("/api/testimonies", testimonyRoutes);
app.use("/api/upload", uploadRoutes);
// Health check
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

// Start
const PORT = process.env.PORT || 8080;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`✅ API running on http://127.0.0.1:${PORT}`),
    );
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
    process.exit(1);
  }
};

start();
