import { sendMail } from "../utils/mailer.js";

function safe(v) {
  return (v ?? "").toString().trim();
}

export async function sendMembershipNotification(reqDoc) {
  const to = process.env.MEMBERSHIP_EMAIL;
  if (!to) throw new Error("Missing env: MEMBERSHIP_EMAIL");

  const name = safe(reqDoc.fullName);
  const email = safe(reqDoc.email);
  const phone = safe(reqDoc.phone) || "N/A";

  const cityState = safe(reqDoc.cityState) || "N/A";
  const howHeard = safe(reqDoc.howHeard) || "N/A";

  const statement = safe(reqDoc.statement);

  // ✅ Signature (Cloudinary)
  const signatureLine = reqDoc.signatureAsset?.secureUrl
    ? `Signature: ${safe(reqDoc.signatureAsset.secureUrl)}`
    : "Signature: (missing)";

  // ✅ Attachments (Cloudinary) — new schema uses `attachments`
  const files =
    Array.isArray(reqDoc.attachments) && reqDoc.attachments.length
      ? reqDoc.attachments
          .map((f) => {
            const label =
              safe(f.originalFilename) || safe(f.publicId) || "file";
            const url = safe(f.secureUrl);
            return `- ${label}${url ? ` (${url})` : ""}`;
          })
          .join("\n")
      : "None";

  const subject = "New Membership Request";

  const text = [
    "New Membership Request",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `City/State: ${cityState}`,
    `How Heard: ${howHeard}`,
    "",
    "Statement:",
    statement,
    "",
    signatureLine,
    "",
    "Attachments:",
    files,
    "",
    `Request ID: ${reqDoc._id}`,
  ].join("\n");

  const html = `
    <h3>New Membership Request</h3>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>City/State:</strong> ${escapeHtml(cityState)}</p>
    <p><strong>How Heard:</strong> ${escapeHtml(howHeard)}</p>

    <p><strong>Statement:</strong></p>
    <p>${escapeHtml(statement).replace(/\n/g, "<br/>")}</p>

    <p><strong>Signature:</strong></p>
    ${
      reqDoc.signatureAsset?.secureUrl
        ? `<p><a href="${escapeHtml(
            reqDoc.signatureAsset.secureUrl,
          )}" target="_blank" rel="noreferrer">View signature image</a></p>`
        : `<p>(missing)</p>`
    }

    <p><strong>Attachments:</strong></p>
    ${
      Array.isArray(reqDoc.attachments) && reqDoc.attachments.length
        ? `<ul>
            ${reqDoc.attachments
              .map((f) => {
                const label =
                  escapeHtml(safe(f.originalFilename)) ||
                  escapeHtml(safe(f.publicId)) ||
                  "file";
                const url = safe(f.secureUrl);
                return url
                  ? `<li><a href="${escapeHtml(
                      url,
                    )}" target="_blank" rel="noreferrer">${label}</a></li>`
                  : `<li>${label}</li>`;
              })
              .join("")}
           </ul>`
        : `<p>None</p>`
    }

    <p><strong>Request ID:</strong> ${escapeHtml(String(reqDoc._id))}</p>
  `;

  return sendMail({ to, subject, text, html });
}

export async function sendQuestionNotification(qDoc) {
  const to = process.env.QUESTIONS_EMAIL;
  if (!to) throw new Error("Missing env: QUESTIONS_EMAIL");

  const name = safe(qDoc.name) || "Anonymous";
  const email = safe(qDoc.email);
  const question = safe(qDoc.question);

  const subject = "New Question Submitted";

  const text = [
    "New Question Submitted",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Question:",
    question,
    "",
    `Question ID: ${qDoc._id}`,
  ].join("\n");

  const html = `
    <h3>New Question Submitted</h3>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Question:</strong></p>
    <p>${escapeHtml(question).replace(/\n/g, "<br/>")}</p>
    <p><strong>Question ID:</strong> ${escapeHtml(String(qDoc._id))}</p>
    <p style="margin-top:12px;">
      <em>Tip:</em> Click “Reply” to respond directly to the sender.
    </p>
  `;

  return sendMail({
    to,
    subject,
    text,
    html,
    replyTo: email || undefined, // ✅ makes Reply go to the user
  });
}

function escapeHtml(str) {
  return (str ?? "")
    .toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
