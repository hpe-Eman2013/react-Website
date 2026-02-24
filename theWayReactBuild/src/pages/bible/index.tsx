import React from "react";
import { Outlet } from "react-router-dom";

export default function BibleLayout() {
  return (
    <div className="container">
      <h1>Scriptural Discussions</h1>

      <Outlet />
    </div>
  );
}
