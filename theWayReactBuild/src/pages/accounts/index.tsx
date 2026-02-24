import { Outlet } from "react-router-dom";

export default function Accounts() {
  return (
    <div className="container py-4">
      <h1 className="h4 mb-3">Accounts</h1>

      {/* Renders /accounts/register, /accounts/login, etc. */}
      <Outlet />
    </div>
  );
}
