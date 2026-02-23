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

    const getDetails = () =>
      Array.from(root.querySelectorAll("details.wom-mega"));

    const closeAll = (except = null) => {
      getDetails().forEach((d) => {
        if (d !== except) d.removeAttribute("open");
      });
    };

    const onToggle = (e) => {
      const d = e.target;
      if (!(d instanceof HTMLDetailsElement)) return;
      if (!d.classList.contains("wom-mega")) return;

      if (d.open) closeAll(d);
    };

    const onDocMouseDown = (e) => {
      if (!root.contains(e.target)) closeAll(null);
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeAll(null);
    };

    // capture phase helps ensure we see the event reliably
    root.addEventListener("toggle", onToggle, true);
    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      root.removeEventListener("toggle", onToggle, true);
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  const closeMenus = () => {
    const root = rootRef.current;
    if (!root) return;
    root.querySelectorAll("details.wom-mega[open]").forEach((d) => {
      d.removeAttribute("open");
    });
  };
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
          <details className="wom-mega">
            <summary className="wom-link wom-summary">
              Who Are We <span className="wom-caret">▾</span>
            </summary>
            <div className="wom-mega-panel">
              <NavLink
                to="/about"
                className="wom-mega-item"
                onClick={closeMenus}
              >
                About
              </NavLink>
              <NavLink
                to="/statement-of-faith"
                className="wom-mega-item"
                onClick={closeMenus}
              >
                Statement of Faith
              </NavLink>
              <NavLink
                to="/mission"
                className="wom-mega-item"
                onClick={closeMenus}
              >
                Mission &amp; Vision
              </NavLink>
              <NavLink
                to="/outreach"
                className="wom-mega-item"
                onClick={closeMenus}
              >
                Outreach
              </NavLink>
              <NavLink
                to="/education"
                className="wom-mega-item"
                onClick={closeMenus}
              >
                Education
              </NavLink>
            </div>
          </details>

          {/* Scriptural Discussions */}
          <details className="wom-mega">
            <summary className="wom-link wom-summary">
              Scriptural Discussions <span className="wom-caret">▾</span>
            </summary>
            <div className="wom-mega-panel">
              <NavLink
                to="/bible/old-covenant"
                className="wom-mega-item"
                onClick={closeMenus}
              >
                Old Covenant
              </NavLink>
              <NavLink
                to="/bible/renewed-covenant"
                className="wom-mega-item"
                onClick={closeMenus}
              >
                Renewed Covenant
              </NavLink>
              <NavLink
                to="/bible/apocrypha"
                className="wom-mega-item"
                onClick={closeMenus}
              >
                Apocrypha Material
              </NavLink>
              <NavLink
                to="/lectures"
                className="wom-mega-item"
                onClick={closeMenus}
              >
                Lectures
              </NavLink>
              <NavLink
                to="/bible-study"
                className="wom-mega-item"
                onClick={closeMenus}
              >
                Bible Study
              </NavLink>
            </div>
          </details>

          {/* The Assembly */}
          <details className="wom-mega">
            <summary className="wom-link wom-summary">
              The Assembly <span className="wom-caret">▾</span>
            </summary>
            <div className="wom-mega-panel">
              <NavLink
                to="/testimonies"
                className="wom-mega-item"
                onClick={closeMenus}
              >
                Testimonies
              </NavLink>
              <NavLink
                to="/submit"
                className="wom-mega-item"
                onClick={closeMenus}
              >
                Submissions
              </NavLink>
              <NavLink
                to="/memberships"
                className="wom-mega-item"
                onClick={closeMenus}
              >
                Memberships
              </NavLink>
              <NavLink
                to="/positions"
                className="wom-mega-item"
                onClick={closeMenus}
              >
                Positions
              </NavLink>
              <NavLink
                to="/ministries"
                className="wom-mega-item"
                onClick={closeMenus}
              >
                Ministries
              </NavLink>
              <NavLink
                to="/assemblies"
                className="wom-mega-item"
                onClick={closeMenus}
              >
                Local Assemblies
              </NavLink>
            </div>
          </details>

          {/* Accounts */}
          <details className="wom-mega">
            <summary className="wom-link wom-summary">
              Accounts <span className="wom-caret">▾</span>
            </summary>
            <div className="wom-mega-panel wom-mega-panel-right">
              <NavLink
                to="/register"
                className="wom-mega-item"
                onClick={closeMenus}
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className="wom-mega-item"
                onClick={closeMenus}
              >
                Login
              </NavLink>
              <NavLink
                to="/profile"
                className="wom-mega-item"
                onClick={closeMenus}
              >
                Profile
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
