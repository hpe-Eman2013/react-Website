import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAdminAuth } from "../context/useAdminAuth";

const AdminRoute = () => {
  const { status } = useAdminAuth();
  const location = useLocation();

  if (status === "loading") {
    return (
      <div className="container py-4">
        <div className="alert alert-info mb-0">Checking admin session…</div>
      </div>
    );
  }

  if (status !== "authed") {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default AdminRoute;
