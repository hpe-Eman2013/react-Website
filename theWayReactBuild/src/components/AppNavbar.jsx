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

    const detailsEls = Array.from(root.querySelectorAll("details.wom-mega"));

    function closeAll(except) {
      detailsEls.forEach((d) => {
        if (d !== except) d.removeAttribute("open");
      });
    }

    function onToggle(e) {
      const target = e.target;
      if (
        target &&
        target.tagName === "DETAILS" &&
        target.classList.contains("wom-mega")
      ) {
        if (target.open) closeAll(target);
      }
    }

    function onDocMouseDown(e) {
      if (!root.contains(e.target)) closeAll(null);
    }

    function onKeyDown(e) {
      if (e.key === "Escape") closeAll(null);
    }

    root.addEventListener("toggle", onToggle);
    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      root.removeEventListener("toggle", onToggle);
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

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
              <NavLink to="/about" className="wom-mega-item">
                About
              </NavLink>
              <NavLink to="/statement-of-faith" className="wom-mega-item">
                Statement of Faith
              </NavLink>
              <NavLink to="/mission" className="wom-mega-item">
                Mission &amp; Vision
              </NavLink>
              <NavLink to="/outreach" className="wom-mega-item">
                Outreach
              </NavLink>
              <NavLink to="/education" className="wom-mega-item">
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
              <NavLink to="/bible/old-covenant" className="wom-mega-item">
                Old Covenant
              </NavLink>
              <NavLink to="/bible/renewed-covenant" className="wom-mega-item">
                Renewed Covenant
              </NavLink>
              <NavLink to="/bible/apocrypha" className="wom-mega-item">
                Apocrypha Material
              </NavLink>
              <NavLink to="/lectures" className="wom-mega-item">
                Lectures
              </NavLink>
              <NavLink to="/bible-study" className="wom-mega-item">
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
              <NavLink to="/testimonies" className="wom-mega-item">
                Testimonies
              </NavLink>
              <NavLink to="/submit" className="wom-mega-item">
                Submissions
              </NavLink>
              <NavLink to="/memberships" className="wom-mega-item">
                Memberships
              </NavLink>
              <NavLink to="/positions" className="wom-mega-item">
                Positions
              </NavLink>
              <NavLink to="/ministries" className="wom-mega-item">
                Ministries
              </NavLink>
              <NavLink to="/assemblies" className="wom-mega-item">
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
              <NavLink to="/register" className="wom-mega-item">
                Register
              </NavLink>
              <NavLink to="/login" className="wom-mega-item">
                Login
              </NavLink>
              <NavLink to="/profile" className="wom-mega-item">
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
