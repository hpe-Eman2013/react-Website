import { Outlet } from "react-router-dom";

export default function TheAssembly() {
  return (
    <div className="container py-4">
      <h1 className="h4 mb-3">The Assembly</h1>
      <p className="text-muted mb-4">
        Temporary Assembly layout. Replace this with the real assembly landing
        page when ready.
      </p>

      {/* Renders /assembly/local-assemblies, /assembly/memberships, etc. */}
      <Outlet />
    </div>
  );
}
