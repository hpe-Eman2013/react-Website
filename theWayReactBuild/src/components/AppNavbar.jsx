import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/AppNavbar.css";

export default function AppNavbar() {
  const rootRef = useRef(null);

  const linkClass = ({ isActive }) => `wom-link ${isActive ? "active" : ""}`;

  // Close other dropdowns when one opens + close on outside click / Escape
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    function onDocMouseDown(e) {
      if (!root.contains(e.target)) closeAll(null);
    }

    function onKeyDown(e) {
      if (e.key === "Escape") closeAll(null);
    }

    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  function closeAll(except = null) {
    const root = rootRef.current;
    if (!root) return;

    root.querySelectorAll("details.wom-mega[open]").forEach((d) => {
      if (d !== except) d.removeAttribute("open");
    });
  }
  return (
    <header className="wom-sticky-nav" ref={rootRef}>
      <div className="wom-nav-inner">
        <NavLink to="/" className="wom-brand">
          {/* If you have a logo, swap this text for an <img/> + text */}
          The Way of Messiah
        </NavLink>

        <nav className="wom-links" aria-label="Main navigation">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>

          {/* Who Are We */}
          <details
            className="wom-mega"
            onToggle={(e) => {
              // Only when this one opens, close the others
              if (e.currentTarget.open) closeAll(e.currentTarget);
            }}
          >
            <summary className="wom-link wom-summary">
              Who Are We <span className="wom-caret">▾</span>
            </summary>
            <div className="wom-mega-panel">
              <NavLink
                to="/who-are-we/about"
                className="wom-mega-item"
                onClick={() => closeAll(null)}
              >
                About
              </NavLink>
              <NavLink
                to="/who-are-we/statement-of-faith"
                className="wom-mega-item"
                onClick={() => closeAll(null)}
              >
                Statement of Faith
              </NavLink>
              <NavLink
                to="/who-are-we/mission"
                className="wom-mega-item"
                onClick={() => closeAll(null)}
              >
                Mission &amp; Vision
              </NavLink>
              <NavLink
                to="/who-are-we/outreach"
                className="wom-mega-item"
                onClick={() => closeAll(null)}
              >
                Outreach
              </NavLink>
              <NavLink
                to="/who-are-we/education"
                className="wom-mega-item"
                onClick={() => closeAll(null)}
              >
                Education
              </NavLink>
            </div>
          </details>

          {/* Scriptural Discussions */}
          <details
            className="wom-mega"
            onToggle={(e) => {
              // Only when this one opens, close the others
              if (e.currentTarget.open) closeAll(e.currentTarget);
            }}
          >
            <summary className="wom-link wom-summary">
              Scriptural Discussions <span className="wom-caret">▾</span>
            </summary>
            <div className="wom-mega-panel">
              <NavLink
                to="/bible/old-covenant"
                className="wom-mega-item"
                onClick={() => closeAll(null)}
              >
                Old Covenant
              </NavLink>
              <NavLink
                to="/bible/renewed-covenant"
                className="wom-mega-item"
                onClick={() => closeAll(null)}
              >
                Renewed Covenant
              </NavLink>
              <NavLink
                to="/bible/apocrypha"
                className="wom-mega-item"
                onClick={() => closeAll(null)}
              >
                Apocrypha Material
              </NavLink>
              <NavLink
                to="/bible/lectures"
                className="wom-mega-item"
                onClick={() => closeAll(null)}
              >
                Lectures
              </NavLink>
              <NavLink
                to="/bible/studies"
                className="wom-mega-item"
                onClick={() => closeAll(null)}
              >
                Scriptual Studies
              </NavLink>
            </div>
          </details>

          {/* The Assembly */}
          <details
            className="wom-mega"
            onToggle={(e) => {
              // Only when this one opens, close the others
              if (e.currentTarget.open) closeAll(e.currentTarget);
            }}
          >
            <summary className="wom-link wom-summary">
              The Assembly <span className="wom-caret">▾</span>
            </summary>
            <div className="wom-mega-panel">
              <NavLink
                to="/the-assembly/testimonies"
                className="wom-mega-item"
                onClick={() => closeAll(null)}
              >
                Testimonies
              </NavLink>
              <NavLink
                to="/the-assembly/submissions"
                className="wom-mega-item"
                onClick={() => closeAll(null)}
              >
                Submissions
              </NavLink>
              <NavLink
                to="/the-assembly/memberships"
                className="wom-mega-item"
                onClick={() => closeAll(null)}
              >
                Memberships
              </NavLink>
              <NavLink
                to="/the-assembly/positions"
                className="wom-mega-item"
                onClick={() => closeAll(null)}
              >
                Positions
              </NavLink>
              <NavLink
                to="/the-assembly/ministries"
                className="wom-mega-item"
                onClick={() => closeAll(null)}
              >
                Ministries
              </NavLink>
              <NavLink
                to="/the-assembly/local-assemblies"
                className="wom-mega-item"
                onClick={() => closeAll(null)}
              >
                Local Assemblies
              </NavLink>
            </div>
          </details>

          {/* Accounts */}
          <details
            className="wom-mega"
            onToggle={(e) => {
              // Only when this one opens, close the others
              if (e.currentTarget.open) closeAll(e.currentTarget);
            }}
          >
            <summary className="wom-link wom-summary">
              Accounts <span className="wom-caret">▾</span>
            </summary>
            <div className="wom-mega-panel wom-mega-panel-right">
              <NavLink
                to="/accounts/register"
                className="wom-mega-item"
                onClick={() => closeAll(null)}
              >
                Register
              </NavLink>
              <NavLink
                to="/accounts/login"
                className="wom-mega-item"
                onClick={() => closeAll(null)}
              >
                Login
              </NavLink>
              <NavLink
                to="/accounts/profile"
                className="wom-mega-item"
                onClick={() => closeAll(null)}
              >
                Profile
              </NavLink>
              <NavLink
                to="/accounts/verify-email"
                className="wom-mega-item"
                onClick={() => closeAll(null)}
              >
                Verify Email
              </NavLink>
            </div>
          </details>

          {/* Admin */}
          <NavLink to="/admin/testimonies" className={linkClass}>
            Admin
          </NavLink>
        </nav>

        <div className="wom-right" />
      </div>
    </header>
  );
}
