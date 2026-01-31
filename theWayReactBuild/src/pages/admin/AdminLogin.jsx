import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import apiClient from "../../services/apiClient";

const AdminLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | error
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/admin/testimonies";

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      await apiClient.post("/api/admin/auth/login", { username, password });
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
      <h1 className="h3 mb-3">Admin Login</h1>

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
          />

          <label className="form-label">Password</label>
          <input
            className="form-control mb-3"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />

          <button
            className="btn btn-primary w-100"
            disabled={status === "loading"}
            type="submit"
          >
            {status === "loading" ? "Signing in…" : "Sign in"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
