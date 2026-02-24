import { Outlet } from "react-router-dom";

export default function Accounts() {
  return (
    <div className="container py-4">
      <h1 className="h4 mb-3">Accounts</h1>
      <p className="text-muted mb-4">
        Temporary Accounts layout. Replace this with the real accounts landing
        page when ready.
      </p>

      {/* Renders /accounts/register, /accounts/login, etc. */}
      <Outlet />
    </div>
  );
}
