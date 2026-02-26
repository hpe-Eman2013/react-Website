import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type FormStatus = "idle" | "submitting" | "success" | "error";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

// Convert a File -> base64 dataUrl
function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result || ""));
    r.onerror = () => reject(new Error("Failed to read file."));
    r.readAsDataURL(file);
  });
}

export default function RequestMembershipPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cityState, setCityState] = useState("");
  const [howHeard, setHowHeard] = useState("");
  const [message, setMessage] = useState("");

  const [ackReadCovenant, setAckReadCovenant] = useState(false);
  const [ackArbitration, setAckArbitration] = useState(false);

  // ✅ Digital signature fields
  const [signatureName, setSignatureName] = useState("");
  const [signatureConsent, setSignatureConsent] = useState(false);
  const [signatureDataUrl, setSignatureDataUrl] = useState(""); // base64 dataUrl string

  // ✅ Optional attachments
  const [attachments, setAttachments] = useState<File[]>([]);

  const canSubmit = useMemo(() => {
    return (
      fullName.trim().length > 0 &&
      isEmail(email) &&
      message.trim().length >= 20 &&
      ackReadCovenant &&
      ackArbitration &&
      signatureName.trim().length > 0 &&
      signatureConsent &&
      signatureDataUrl.startsWith("data:image/")
    );
  }, [
    fullName,
    email,
    message,
    ackReadCovenant,
    ackArbitration,
    signatureName,
    signatureConsent,
    signatureDataUrl,
  ]);

  async function onSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("submitting");
    setError("");

    try {
      const fd = new FormData();

      fd.append("fullName", fullName);
      fd.append("email", email);
      fd.append("phone", phone || "");

      // If you want to store these too, add them to your backend/model later
      fd.append("cityState", cityState || "");
      fd.append("howHeard", howHeard || "");

      fd.append("statement", message);

      fd.append("signatureName", signatureName);
      fd.append("signatureConsent", String(signatureConsent));
      fd.append("signatureDataUrl", signatureDataUrl);

      for (const file of attachments) {
        fd.append("attachments", file);
      }

      const res = await fetch("/api/membership/submit", {
        method: "POST",
        body: fd,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}) as any);
        throw new Error(data?.message || "Submission failed.");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setError(err?.message ?? "Submission failed.");
    }
  }

  async function onPickSignatureFile(file: File | null) {
    if (!file) {
      setSignatureDataUrl("");
      return;
    }

    // Optional: basic type gate
    if (!file.type.startsWith("image/")) {
      setError("Signature file must be an image (PNG/JPG).");
      setSignatureDataUrl("");
      return;
    }

    try {
      setError("");
      const dataUrl = await fileToDataUrl(file);
      setSignatureDataUrl(dataUrl);
    } catch (e: any) {
      setError(e?.message ?? "Failed to load signature image.");
      setSignatureDataUrl("");
    }
  }

  function onPickAttachments(files: FileList | null) {
    if (!files) return;
    setAttachments(Array.from(files));
  }

  return (
    <div className="container py-4">
      <h1>Request Membership</h1>

      {status === "error" && error ? (
        <div className="alert alert-danger">{error}</div>
      ) : null}

      {status === "success" ? (
        <div className="alert alert-success">
          Your request has been submitted.
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name *
            </label>
            <input
              id="fullName"
              name="fullName"
              title="Full Name"
              placeholder="John Doe"
              className="form-control"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <input
              id="email"
              name="email"
              title="Email Address"
              placeholder="name@example.com"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              title="Phone Number"
              placeholder="(optional)"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cityState" className="form-label">
              City / State
            </label>
            <input
              id="cityState"
              name="cityState"
              title="City and State"
              placeholder="Pittsburgh, PA"
              className="form-control"
              value={cityState}
              onChange={(e) => setCityState(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="howHeard" className="form-label">
              How did you hear about us?
            </label>
            <input
              id="howHeard"
              name="howHeard"
              title="Referral Source"
              placeholder="Friend, online, event..."
              className="form-control"
              value={howHeard}
              onChange={(e) => setHowHeard(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              title="Membership Message"
              placeholder="Tell us why you are seeking membership..."
              className="form-control"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <div className="form-text">Minimum 20 characters.</div>
          </div>

          <hr />

          <h5>Digital Signature</h5>

          <div className="mb-3">
            <label htmlFor="signatureName" className="form-label">
              Type Your Full Name (Signature) *
            </label>
            <input
              id="signatureName"
              name="signatureName"
              className="form-control"
              value={signatureName}
              onChange={(e) => setSignatureName(e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="signatureFile" className="form-label">
              Upload Signature Image (PNG/JPG) *
            </label>
            <input
              id="signatureFile"
              name="signatureFile"
              type="file"
              accept="image/*"
              className="form-control"
              onChange={(e) => onPickSignatureFile(e.target.files?.[0] ?? null)}
              required
            />
            {signatureDataUrl ? (
              <div className="mt-2">
                <div className="form-text">Preview:</div>
                <img
                  src={signatureDataUrl}
                  alt="Signature Preview"
                  style={{
                    maxWidth: 420,
                    height: "auto",
                    border: "1px solid #ddd",
                  }}
                />
              </div>
            ) : null}
          </div>

          <div className="form-check mb-3">
            <input
              id="signatureConsent"
              name="signatureConsent"
              className="form-check-input"
              type="checkbox"
              checked={signatureConsent}
              onChange={(e) => setSignatureConsent(e.target.checked)}
            />
            <label htmlFor="signatureConsent" className="form-check-label">
              I understand that my electronic signature is legally binding to
              the same extent as a handwritten signature.
            </label>
          </div>

          <hr />

          <h5>Attachments (Optional)</h5>
          <div className="mb-3">
            <label htmlFor="attachments" className="form-label">
              Upload supporting documents (PDF/DOCX/etc)
            </label>
            <input
              id="attachments"
              name="attachments"
              type="file"
              multiple
              className="form-control"
              onChange={(e) => onPickAttachments(e.target.files)}
            />
            {attachments.length ? (
              <div className="form-text mt-2">
                Selected: {attachments.map((f) => f.name).join(", ")}
              </div>
            ) : null}
          </div>

          <hr />

          <div className="form-check mb-2">
            <input
              id="ackReadCovenant"
              name="ackReadCovenant"
              className="form-check-input"
              type="checkbox"
              checked={ackReadCovenant}
              onChange={(e) => setAckReadCovenant(e.target.checked)}
            />
            <label htmlFor="ackReadCovenant" className="form-check-label">
              I have read the Covenant.
            </label>
          </div>

          <div className="form-check mb-3">
            <input
              id="ackArbitration"
              name="ackArbitration"
              className="form-check-input"
              type="checkbox"
              checked={ackArbitration}
              onChange={(e) => setAckArbitration(e.target.checked)}
            />
            <label htmlFor="ackArbitration" className="form-check-label">
              I agree to the dispute resolution terms.
            </label>
          </div>

          <button
            className="btn btn-primary"
            type="submit"
            disabled={!canSubmit}
          >
            {status === "submitting" ? "Submitting…" : "Submit Request"}
          </button>
        </form>
      )}

      <div className="mt-3">
        <Link to="/the-assembly/memberships">Back to Covenant</Link>
      </div>
    </div>
  );
}
