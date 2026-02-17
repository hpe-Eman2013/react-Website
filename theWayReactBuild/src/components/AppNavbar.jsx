import React from "react";
import { NavLink } from "react-router-dom";

const AppNavbar = () => {
  const linkClass = ({ isActive }) => `wom-link ${isActive ? "active" : ""}`;

  return (
    <header className="wom-sticky-nav">
      <div className="wom-nav-inner">
        <NavLink to="/" className="wom-brand">
          Way of Messiah
        </NavLink>

        <nav className="wom-links" aria-label="Main navigation">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/testimonies" className={linkClass}>
            Testimonies
          </NavLink>

          <NavLink to="/submit" className={linkClass}>
            Submit
          </NavLink>

          <NavLink to="/admin/testimonies" className={linkClass}>
            Admin
          </NavLink>

          <NavLink to="/statement-of-faith" className={linkClass}>
            Statement Of Faith
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>

        {/* right spacer keeps center true */}
        <div className="wom-right" />
      </div>
    </header>
  );
};

export default AppNavbar;
