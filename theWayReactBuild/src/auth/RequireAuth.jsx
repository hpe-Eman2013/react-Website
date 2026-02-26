import React from "react";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { useAdminAuth } from "../context/AdminAuthProvider"; // adjust if your hook path differs

export default function RequireAuth({ children }) {
  const location = useLocation();

  // Expect AdminAuthProvider to expose something like: { admin, status }
  // If your context uses different names, swap them here.
  const { admin, status } = useAdminAuth();

  if (status === "loading") return null;

  if (!admin) {
    return (
      <Navigate to="/admin/login" replace state={{ from: location.pathname }} />
    );
  }

  return children;
}

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};
