import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
}

export default function RegisterPage() {
  const nav = useNavigate();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [okMsg, setOkMsg] = useState("");

  const canSubmit = useMemo(() => {
    return isEmail(email) && password.length >= 8 && !loading;
  }, [email, password, loading]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setOkMsg("");

    if (!isEmail(email)) return setError("Enter a valid email.");
    if (password.length < 8)
      return setError("Password must be at least 8 characters.");

    setLoading(true);
    try {
      const resp = await registerUser({
        email,
        password,
        displayName: displayName.trim() || undefined,
      });

      if (!resp.ok) {
        setError(resp.message || "Registration failed.");
        return;
      }

      setOkMsg("Verification code sent. Check your email.");
      // Navigate to verify screen with email pre-filled
      nav("/verify-email", { replace: true, state: { email } });
    } catch (err: any) {
      setError(err?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container py-5" style={{ maxWidth: 520 }}>
      <h1 className="h3 mb-3">Create your account</h1>
      <p className="text-muted">
        Register with your email. We’ll send a verification code to confirm it’s
        yours.
      </p>

      {error ? <div className="alert alert-danger">{error}</div> : null}
      {okMsg ? <div className="alert alert-success">{okMsg}</div> : null}

      <form onSubmit={onSubmit} className="card p-3">
        <div className="mb-3">
          <label className="form-label" htmlFor="displayName">
            Display name (optional)
          </label>
          <input
            id="displayName"
            className="form-control"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            autoComplete="nickname"
          />
        </div>

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
            inputMode="email"
            placeholder="name@example.com"
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            placeholder="At least 8 characters"
          />
        </div>

        <button className="btn btn-primary w-100" disabled={!canSubmit}>
          {loading ? "Creating account…" : "Register"}
        </button>

        <div className="mt-3 text-center">
          <span className="text-muted">Already have an account? </span>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}
