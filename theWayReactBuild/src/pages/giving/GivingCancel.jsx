import React from "react";
import { NavLink } from "react-router-dom";

export default function GivingCancel() {
  return (
    <main className="container">
      <h1>Checkout Canceled</h1>
      <p className="text-muted">
        No worries — your donation was not processed.
      </p>
      <NavLink className="btn btn-primary" to="/giving">
        Return to Giving
      </NavLink>
    </main>
  );
}
