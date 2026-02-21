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
import session from "express-session";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.set("trust proxy", 1); // important if behind Render/Proxy

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);
app.use(cookieParser());
// ensure express-session is installed and mounted before routes
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: "lax", // for same-site dev
      secure: false, // set true in production HTTPS
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    },
  }),
);
app.use("/api/admin/auth", adminAuthRoutes);

// Routes
app.use("/api/admin/testimonies", requireAdminAuth, adminTestimonyRoutes);
app.use("/api/auth", authRoutes);
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
