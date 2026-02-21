import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
}

export default function LoginPage() {
  const nav = useNavigate();
  const location = useLocation() as any;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const maybeEmail = location?.state?.email;
    if (typeof maybeEmail === "string") setEmail(maybeEmail);
  }, [location?.state]);

  const canSubmit = useMemo(() => {
    return isEmail(email) && password.length > 0 && !loading;
  }, [email, password, loading]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!isEmail(email)) return setError("Enter a valid email.");

    setLoading(true);
    try {
      const resp = await loginUser({ email: email.trim(), password });
      if (!resp.ok) {
        setError(resp.message || "Login failed.");
        return;
      }

      // Cookie is set by server. Navigate to where you want users to land.
      nav("/testimonies", { replace: true });
    } catch (err: any) {
      setError(err?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container py-5" style={{ maxWidth: 520 }}>
      <h1 className="h3 mb-3">Login</h1>

      {error ? <div className="alert alert-danger">{error}</div> : null}

      <form onSubmit={onSubmit} className="card p-3">
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
            autoComplete="current-password"
          />
        </div>

        <button className="btn btn-primary w-100" disabled={!canSubmit}>
          {loading ? "Logging in…" : "Login"}
        </button>

        <div className="mt-3 text-center">
          <span className="text-muted">Need an account? </span>
          <Link to="/register">Register</Link>
          <span className="text-muted"> · </span>
          <Link to="/verify-email">Verify Email</Link>
        </div>
      </form>
    </div>
  );
}
