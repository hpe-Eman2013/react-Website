import React from "react";
import { NavLink } from "react-router-dom";

export default function GivingSuccess() {
  return (
    <main className="container">
      <h1>Thank You</h1>
      <p className="text-muted">
        Your donation was received successfully. Thank you for supporting the
        work.
      </p>
      <NavLink className="btn btn-primary" to="/giving">
        Back to Giving
      </NavLink>
    </main>
  );
}
