import crypto from "crypto";

export function hashCode(code) {
  const pepper = process.env.CODE_PEPPER || "dev_pepper_change_me";
  return crypto.createHash("sha256").update(`${code}:${pepper}`).digest("hex");
}

export function make6DigitCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}
