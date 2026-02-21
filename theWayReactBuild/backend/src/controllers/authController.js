import bcrypt from "bcryptjs";
import User from "../models/User.js";
import EmailVerification from "../models/EmailVerification.js";
import { sendMail } from "../utils/mailer.js";
import { hashCode, make6DigitCode } from "../utils/codeHash.js";
import { signUserToken, userCookieOptions } from "../utils/userJwt.js";

const VERIFICATION_EXPIRY_MINUTES = 15;
const MAX_ATTEMPTS = 6;

/**
 * POST /api/auth/register
 */
export async function register(req, res) {
  try {
    const email = String(req.body?.email || "")
      .trim()
      .toLowerCase();
    const password = String(req.body?.password || "");
    const displayName = String(req.body?.displayName || "").trim();

    if (!email) {
      return res.status(400).json({ ok: false, message: "Email is required." });
    }

    if (password.length < 8) {
      return res.status(400).json({
        ok: false,
        message: "Password must be at least 8 characters.",
      });
    }

    let user = await User.findOne({ email });

    if (user && user.emailVerified) {
      return res.status(409).json({
        ok: false,
        message: "Email is already registered.",
      });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    if (!user) {
      user = await User.create({
        email,
        passwordHash,
        displayName,
        emailVerified: false,
      });
    } else {
      // If user exists but not verified, update password/displayName
      user.passwordHash = passwordHash;
      if (displayName) user.displayName = displayName;
      await user.save();
    }

    const code = make6DigitCode();
    const codeHash = hashCode(code);
    const expiresAt = new Date(
      Date.now() + VERIFICATION_EXPIRY_MINUTES * 60 * 1000,
    );

    await EmailVerification.findOneAndUpdate(
      { userId: user._id },
      {
        userId: user._id,
        codeHash,
        expiresAt,
        attempts: 0,
      },
      { upsert: true, new: true },
    );

    await sendMail({
      to: email,
      subject: "Verify your email",
      text: `Your verification code is: ${code}\n\nThis code expires in ${VERIFICATION_EXPIRY_MINUTES} minutes.`,
      html: `
        <p>Your verification code is:</p>
        <h2>${code}</h2>
        <p>This code expires in ${VERIFICATION_EXPIRY_MINUTES} minutes.</p>
      `,
    });

    return res.json({
      ok: true,
      message: "Verification code sent.",
    });
  } catch (err) {
    console.error("register error:", err);
    return res.status(500).json({
      ok: false,
      message: "Registration failed.",
    });
  }
}

/**
 * POST /api/auth/verify-email
 */
export async function verifyEmail(req, res) {
  try {
    const email = String(req.body?.email || "")
      .trim()
      .toLowerCase();
    const code = String(req.body?.code || "").trim();

    if (!email || !code) {
      return res.status(400).json({
        ok: false,
        message: "Email and code are required.",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        ok: false,
        message: "User not found.",
      });
    }

    if (user.emailVerified) {
      return res.json({
        ok: true,
        message: "Email already verified.",
      });
    }

    const record = await EmailVerification.findOne({ userId: user._id });
    if (!record) {
      return res.status(400).json({
        ok: false,
        message: "No verification request found.",
      });
    }

    if (record.expiresAt.getTime() < Date.now()) {
      return res.status(400).json({
        ok: false,
        message: "Verification code expired.",
      });
    }

    if (record.attempts >= MAX_ATTEMPTS) {
      return res.status(429).json({
        ok: false,
        message: "Too many incorrect attempts. Please resend code.",
      });
    }

    const isValid = hashCode(code) === record.codeHash;

    if (!isValid) {
      record.attempts += 1;
      await record.save();

      return res.status(400).json({
        ok: false,
        message: "Invalid verification code.",
      });
    }

    user.emailVerified = true;
    await user.save();

    await EmailVerification.deleteOne({ _id: record._id });

    return res.json({
      ok: true,
      message: "Email verified successfully.",
    });
  } catch (err) {
    console.error("verifyEmail error:", err);
    return res.status(500).json({
      ok: false,
      message: "Verification failed.",
    });
  }
}
/**
 * POST /api/auth/login
 * body: { email, password }
 */
export async function login(req, res) {
  try {
    const email = String(req.body?.email || "")
      .trim()
      .toLowerCase();
    const password = String(req.body?.password || "");

    if (!email || !password) {
      return res
        .status(400)
        .json({ ok: false, message: "Email and password are required." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ ok: false, message: "Invalid credentials." });
    }

    if (!user.emailVerified) {
      return res.status(403).json({
        ok: false,
        message: "Please verify your email before logging in.",
      });
    }

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
      return res
        .status(401)
        .json({ ok: false, message: "Invalid credentials." });
    }

    const token = signUserToken(user);

    // httpOnly cookie
    res.cookie("user_token", token, userCookieOptions());

    return res.json({
      ok: true,
      message: "Logged in.",
      data: {
        user: {
          id: user._id,
          email: user.email,
          displayName: user.displayName,
        },
      },
    });
  } catch (err) {
    console.error("login error:", err);
    return res.status(500).json({ ok: false, message: "Login failed." });
  }
}
