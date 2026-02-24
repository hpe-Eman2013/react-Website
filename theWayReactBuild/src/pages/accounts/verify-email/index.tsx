import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { verifyEmail } from "@/api/auth";

function digitsOnly(s: string) {
  return s.replace(/[^\d]/g, "").slice(0, 6);
}

export default function VerifyEmailPage() {
  const nav = useNavigate();
  const location = useLocation() as any;

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [okMsg, setOkMsg] = useState("");

  useEffect(() => {
    const maybeEmail = location?.state?.email;
    if (typeof maybeEmail === "string") setEmail(maybeEmail);
  }, [location?.state]);

  const canSubmit = useMemo(() => {
    return email.trim().length > 3 && code.trim().length === 6 && !loading;
  }, [email, code, loading]);

  async function onSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setOkMsg("");

    if (code.trim().length !== 6) return setError("Enter the 6-digit code.");

    setLoading(true);
    try {
      const resp = await verifyEmail({
        email: email.trim(),
        code: code.trim(),
      });
      if (!resp.ok) {
        setError(resp.message || "Verification failed.");
        return;
      }

      setOkMsg("Email verified. You can now login.");
      nav("accounts/login", { replace: true, state: { email } });
    } catch (err: any) {
      setError(err?.message || "Verification failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-container verify-page">
      <h1 className="h3 mb-3">Verify your email</h1>
      <p className="text-muted">Enter the 6-digit code sent to your email.</p>

      {error ? <div className="alert alert-danger">{error}</div> : null}
      {okMsg ? <div className="alert alert-success">{okMsg}</div> : null}

      <form onSubmit={onSubmit} className="auth-card">
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="code">
            Verification code
          </label>
          <input
            id="code"
            className="form-control"
            value={code}
            onChange={(e) => setCode(digitsOnly(e.target.value))}
            inputMode="numeric"
            placeholder="123456"
          />
          <div className="form-text">Code is 6 digits.</div>
        </div>

        <button className="btn btn-primary auth-btn" disabled={!canSubmit}>
          {loading ? "Verifying…" : "Verify Email"}
        </button>

        <div className="mt-3 text-center">
          <Link to="/accounts/register">Back to Register</Link>
        </div>
      </form>
    </div>
  );
}
