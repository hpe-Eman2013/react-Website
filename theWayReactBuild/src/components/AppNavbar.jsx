import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/AppNavbar.css";

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

          {/* ✅ Native dropdown: no ARIA needed */}
          <details className="wom-details">
            <summary className="wom-link wom-summary">
              Bible Study <span className="wom-caret">▾</span>
            </summary>

            <div className="wom-dd-menu">
              <NavLink to="/bible/old-covenant" className="wom-dd-item">
                Old Covenant
              </NavLink>

              <NavLink to="/bible/renewed-covenant" className="wom-dd-item">
                Renewed Covenant
              </NavLink>

              <NavLink to="/bible/apocrypha" className="wom-dd-item">
                Apocrypha Reference Material
              </NavLink>
            </div>
          </details>

          <NavLink to="/statement-of-faith" className={linkClass}>
            Statement Of Faith
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

          <NavLink to="/login" className={linkClass}>
            Login
          </NavLink>

          <NavLink to="/register" className={linkClass}>
            Register
          </NavLink>
        </nav>

        <div className="wom-right" />
      </div>
    </header>
  );
};

export default AppNavbar;
