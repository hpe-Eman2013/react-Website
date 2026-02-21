import User from "../models/User.js";
import { verifyUserToken } from "../utils/userJwt.js";

export default async function requireUserAuth(req, res, next) {
  try {
    // You will store the JWT in an httpOnly cookie named "user_token"
    const token = req.cookies?.user_token;

    if (!token) {
      return res.status(401).json({ ok: false, message: "Not authenticated." });
    }

    const payload = verifyUserToken(token);

    // Basic payload sanity checks
    if (!payload || payload.typ !== "user" || !payload.sub) {
      return res.status(401).json({ ok: false, message: "Invalid token." });
    }

    const user = await User.findById(payload.sub).select(
      "_id email displayName emailVerified",
    );

    if (!user) {
      return res.status(401).json({ ok: false, message: "User not found." });
    }

    if (!user.emailVerified) {
      return res.status(403).json({
        ok: false,
        message: "Email not verified.",
      });
    }

    // Attach user onto req for downstream routes
    req.user = user;

    return next();
  } catch {
    return res
      .status(401)
      .json({ ok: false, message: "Authentication failed." });
  }
}
