import { Outlet } from "react-router-dom";

export default function WhoAreWeLayout() {
  return (
    <div className="container py-4">
      <h1>Who Are We</h1>

      <Outlet />
    </div>
  );
}
