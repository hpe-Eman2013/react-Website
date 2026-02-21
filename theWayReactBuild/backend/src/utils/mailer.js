import nodemailer from "nodemailer";

let transporter = null;

/**
 * Create or reuse SMTP transporter
 */
function getTransporter() {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      "SMTP configuration missing. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env",
    );
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for 587
    auth: {
      user,
      pass,
    },
  });

  return transporter;
}

/**
 * Send email
 * @param {Object} options
 * @param {string} options.to
 * @param {string} options.subject
 * @param {string} options.text
 * @param {string} [options.html]
 */
export async function sendMail({ to, subject, text, html }) {
  if (!to) {
    throw new Error("Recipient email (to) is required.");
  }
  // ✅ DEVELOPMENT SAFETY BLOCK
  if (process.env.NODE_ENV === "development") {
    console.log("📧 DEV EMAIL PREVIEW");
    console.log("To:", to);
    console.log("Subject:", subject);
    console.log("Text:", text);
    console.log("HTML:", html);
    return; // Prevent real email from sending in dev
  }
  const fromName = process.env.MAIL_FROM_NAME || "The Way of Messiah";
  const fromEmail = process.env.MAIL_FROM_EMAIL || process.env.SMTP_USER;

  const transport = getTransporter();

  return transport.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to,
    subject,
    text,
    html,
  });
}
