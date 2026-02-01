import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import apiClient from "../../services/apiClient";

const AdminLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [status, setStatus] = useState("idle"); // idle | loading | error
  const [error, setError] = useState("");

  const canSubmit = useMemo(() => {
    return (
      username.trim().length > 0 && password.length > 0 && status !== "loading"
    );
  }, [username, password, status]);

  const from = location.state?.from?.pathname || "/admin/testimonies";

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      await apiClient.post("/api/admin/auth/login", {
        username: username.trim(),
        password,
      });

      // cookie is now set (httpOnly). redirect to intended admin page.
      navigate(from, { replace: true });
    } catch (err) {
      const msg =
        err?.response?.data?.message || err?.message || "Login failed.";
      setError(msg);
      setStatus("error");
    }
  };

  return (
    <div className="container py-5" style={{ maxWidth: 520 }}>
      <div className="mb-4">
        <h1 className="h3 mb-1">Admin Login</h1>
        <div className="text-muted small">Sign in to manage testimonies.</div>
      </div>

      {status === "error" && (
        <div className="alert alert-danger">
          <div className="fw-bold">Login failed</div>
          <div className="small">{error}</div>
        </div>
      )}

      <form onSubmit={onSubmit} className="card shadow-sm">
        <div className="card-body">
          <label className="form-label">Username</label>
          <input
            className="form-control mb-3"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            spellCheck={false}
            inputMode="text"
            placeholder="admin"
          />

          <label className="form-label">Password</label>
          <input
            className="form-control mb-3"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            placeholder="••••••••••"
          />

          <button
            className="btn btn-primary w-100"
            type="submit"
            disabled={!canSubmit}
          >
            {status === "loading" ? "Signing in…" : "Sign in"}
          </button>

          <div className="mt-3 small text-muted">
            Having trouble? Verify your admin user exists and your backend is
            running.
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
