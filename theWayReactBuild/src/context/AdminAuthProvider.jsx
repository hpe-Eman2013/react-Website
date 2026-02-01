import { useCallback, useEffect, useMemo, useState } from "react";
import apiClient from "../services/apiClient";
import { AdminAuthContext } from "./AdminAuthContext";

export const AdminAuthProvider = ({ children }) => {
  const [status, setStatus] = useState("loading"); // loading | authed | guest
  const [admin, setAdmin] = useState(null);

  const refresh = useCallback(async () => {
    setStatus("loading");
    try {
      const res = await apiClient.get("/api/admin/auth/me");
      setAdmin(res.data?.admin ?? null);
      setStatus("authed");
    } catch {
      setAdmin(null);
      setStatus("guest");
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await apiClient.post("/api/admin/auth/logout");
    } finally {
      setAdmin(null);
      setStatus("guest");
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const value = useMemo(
    () => ({ status, admin, refresh, logout }),
    [status, admin, refresh, logout],
  );

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};
