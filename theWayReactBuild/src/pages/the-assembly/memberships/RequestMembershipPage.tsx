import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type FormStatus = "idle" | "submitting" | "success" | "error";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
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

  const canSubmit = useMemo(() => {
    return (
      fullName.trim() &&
      isEmail(email) &&
      message.trim().length >= 20 &&
      ackReadCovenant &&
      ackArbitration
    );
  }, [fullName, email, message, ackReadCovenant, ackArbitration]);

  async function onSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("submitting");
    setError("");

    try {
      await fetch("/api/membership/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          cityState,
          howHeard,
          message,
        }),
      });

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setError(err?.message ?? "Submission failed.");
    }
  }

  return (
    <div className="container py-4">
      <h1>Request Membership</h1>

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
          </div>

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
            Submit Request
          </button>
        </form>
      )}

      <div className="mt-3">
        <Link to="/the-assembly/memberships">Back to Covenant</Link>
      </div>
    </div>
  );
}
