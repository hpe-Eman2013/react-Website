import { Outlet } from "react-router-dom";

export default function WhoAreWe() {
  return (
    <div className="container py-4">
      <h1 className="h4 mb-3">Who Are We</h1>
      <p className="text-muted mb-4">
        Temporary Who Are We layout. Replace this with the real Who Are We
        landing page when ready.
      </p>

      {/* Renders /who-are-we/about, /who-are-we/contact, etc. */}
      <Outlet />
    </div>
  );
}
