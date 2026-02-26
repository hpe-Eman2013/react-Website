import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAdminAuth } from "../context/AdminAuthProvider"; // adjust if needed

export default function RequireAdmin({ children }) {
  const { admin, status } = useAdminAuth();

  if (status === "loading") return null;

  const isAdmin =
    admin?.role === "admin" ||
    admin?.isAdmin === true ||
    (Array.isArray(admin?.roles) && admin.roles.includes("admin"));

  if (!isAdmin) return <Navigate to="/admin/login" replace />;

  return children;
}

RequireAdmin.propTypes = {
  children: PropTypes.node.isRequired,
};
