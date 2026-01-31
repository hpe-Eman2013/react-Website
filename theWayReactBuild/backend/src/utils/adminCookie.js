export function getAdminCookieName() {
  return process.env.COOKIE_NAME || "admin_token";
}

export function getAdminCookieOptions() {
  const isProd = process.env.NODE_ENV === "production";

  return {
    httpOnly: true,
    secure: isProd, // true in prod (HTTPS)
    sameSite: isProd ? "none" : "lax", // if frontend is on different domain, use "none" in prod
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days (keep aligned with JWT)
  };
}
