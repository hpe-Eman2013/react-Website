import jwt from "jsonwebtoken";

export function signUserToken(user) {
  const secret = process.env.USER_JWT_SECRET;
  if (!secret) throw new Error("Missing USER_JWT_SECRET in environment.");

  return jwt.sign(
    {
      sub: String(user._id),
      typ: "user",
      email: user.email,
      displayName: user.displayName || "",
    },
    secret,
    { expiresIn: process.env.USER_JWT_EXPIRES_IN || "7d" },
  );
}

export function verifyUserToken(token) {
  const secret = process.env.USER_JWT_SECRET;
  if (!secret) throw new Error("Missing USER_JWT_SECRET in environment.");

  return jwt.verify(token, secret);
}

export function userCookieOptions() {
  const isProd = process.env.NODE_ENV === "production";

  return {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  };
}
