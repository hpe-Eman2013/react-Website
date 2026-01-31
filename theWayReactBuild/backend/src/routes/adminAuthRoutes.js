import express from "express";
import bcrypt from "bcryptjs";
import AdminUser from "../models/AdminUser.js";
import { signAdminToken } from "../utils/adminJwt.js";
import {
  getAdminCookieName,
  getAdminCookieOptions,
} from "../utils/adminCookie.js";
import { requireAdminAuth } from "../middleware/requireAdminAuth.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body || {};
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password required." });
    }

    const admin = await AdminUser.findOne({ username }).exec();
    if (!admin || admin.disabled) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const ok = await bcrypt.compare(password, admin.passwordHash);
    if (!ok) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = signAdminToken({
      sub: admin._id.toString(),
      role: admin.role,
    });

    res.cookie(getAdminCookieName(), token, getAdminCookieOptions());

    return res.json({
      ok: true,
      admin: {
        id: admin._id.toString(),
        username: admin.username,
        role: admin.role,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: "Login failed." });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie(getAdminCookieName(), { path: "/" });
  return res.json({ ok: true });
});

router.get("/me", requireAdminAuth, (req, res) => {
  return res.json({ ok: true, admin: req.admin });
});

export default router;
