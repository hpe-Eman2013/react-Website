import AdminUser from "../models/AdminUser.js";
import { getAdminCookieName } from "../utils/adminCookie.js";
import { verifyAdminToken } from "../utils/adminJwt.js";

export async function requireAdminAuth(req, res, next) {
  try {
    const cookieName = getAdminCookieName();
    const token = req.cookies?.[cookieName];

    if (!token) {
      return res.status(401).json({ message: "Not authenticated." });
    }

    const decoded = verifyAdminToken(token); // { sub, role, iat, exp }
    if (!decoded?.sub) {
      return res.status(401).json({ message: "Invalid token." });
    }

    const admin = await AdminUser.findById(decoded.sub).lean();
    if (!admin || admin.disabled) {
      return res.status(401).json({ message: "Admin account not available." });
    }

    req.admin = {
      id: admin._id.toString(),
      username: admin.username,
      role: admin.role,
    };

    return next();
  } catch {
    return res.status(401).json({ message: "Authentication failed." });
  }
}

export default requireAdminAuth;
