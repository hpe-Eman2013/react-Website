import { Outlet } from "react-router-dom";

export default function TheAssembly() {
  return (
    <div className="container py-4">
      <h1 className="h4 mb-3">The Assembly</h1>

      {/* Renders /assembly/local-assemblies, /assembly/memberships, etc. */}
      <Outlet />
    </div>
  );
}
