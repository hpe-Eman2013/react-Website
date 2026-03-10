import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "@/assets/css/AppNavbar.css";
import { useTheme } from "@/context/ThemeProvider";

export default function AppNavbar() {
  const rootRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);

  const linkClass = ({ isActive }) => `wom-link ${isActive ? "active" : ""}`;

  function closeAllDesktop(except = null) {
    const root = rootRef.current;
    if (!root) return;

    root.querySelectorAll("details.wom-mega[open]").forEach((d) => {
      if (d !== except) d.removeAttribute("open");
    });
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
    setOpenMobileGroup(null);
  }

  function toggleMobileGroup(group) {
    setOpenMobileGroup((prev) => (prev === group ? null : group));
  }

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    function onDocMouseDown(e) {
      if (!root.contains(e.target)) {
        closeAllDesktop(null);
      }
    }

    function onKeyDown(e) {
      if (e.key === "Escape") {
        closeAllDesktop(null);
        closeMobileMenu();
      }
    }

    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    function onDocMouseDown(e) {
      const root = rootRef.current;
      const mobileMenu = mobileMenuRef.current;

      if (!root || !mobileMenu) return;
      if (!root.contains(e.target)) closeMobileMenu();
    }

    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.body.classList.toggle("wom-mobile-menu-open", isMobileMenuOpen);
    return () => document.body.classList.remove("wom-mobile-menu-open");
  }, [isMobileMenuOpen]);

  return (
    <header className="wom-sticky-nav" ref={rootRef}>
      <div className="wom-nav-inner">
        <NavLink
          to="/"
          className="wom-brand"
          onClick={() => {
            closeAllDesktop(null);
            closeMobileMenu();
          }}
        >
          The Way of Messiah
        </NavLink>

        <nav
          className="wom-links wom-links--desktop"
          aria-label="Main navigation"
        >
          <NavLink
            to="/"
            end
            className={linkClass}
            onClick={() => closeAllDesktop(null)}
          >
            Home
          </NavLink>

          <details
            className="wom-mega"
            onToggle={(e) =>
              e.currentTarget.open && closeAllDesktop(e.currentTarget)
            }
          >
            <summary className="wom-link wom-summary">
              The Way <span className="wom-caret">▾</span>
            </summary>

            <div className="wom-mega-panel">
              <NavLink
                to="/the-way"
                className="wom-mega-item"
                onClick={() => closeAllDesktop(null)}
              >
                The Way Overview
              </NavLink>
              <NavLink
                to="/the-way/mission"
                className="wom-mega-item"
                onClick={() => closeAllDesktop(null)}
              >
                Mission
              </NavLink>
              <NavLink
                to="/the-way/about"
                className="wom-mega-item"
                onClick={() => closeAllDesktop(null)}
              >
                About
              </NavLink>
              <NavLink
                to="/the-way/statement-of-faith"
                className="wom-mega-item"
                onClick={() => closeAllDesktop(null)}
              >
                Statement of Faith
              </NavLink>
              <NavLink
                to="/the-way/outreach"
                className="wom-mega-item"
                onClick={() => closeAllDesktop(null)}
              >
                Outreach
              </NavLink>
              <NavLink
                to="/the-way/education"
                className="wom-mega-item"
                onClick={() => closeAllDesktop(null)}
              >
                Education
              </NavLink>
              <NavLink
                to="/the-way/education/memberships/login"
                className="wom-mega-item"
                onClick={() => closeAllDesktop(null)}
              >
                Education Membership Login
              </NavLink>
              <NavLink
                to="/the-way/education/memberships/register"
                className="wom-mega-item"
                onClick={() => closeAllDesktop(null)}
              >
                Education Membership Register
              </NavLink>
            </div>
          </details>

          <details
            className="wom-mega"
            onToggle={(e) =>
              e.currentTarget.open && closeAllDesktop(e.currentTarget)
            }
          >
            <summary className="wom-link wom-summary">
              Scriptural Discussions <span className="wom-caret">▾</span>
            </summary>

            <div className="wom-mega-panel">
              <NavLink
                to="/the-way/scriptural-discussions"
                className="wom-mega-item"
                onClick={() => closeAllDesktop(null)}
              >
                Overview
              </NavLink>
              <NavLink
                to="/the-way/scriptural-discussions/apocrypha"
                className="wom-mega-item"
                onClick={() => closeAllDesktop(null)}
              >
                Apocrypha
              </NavLink>
              <NavLink
                to="/the-way/scriptural-discussions/lectures-sermons"
                className="wom-mega-item"
                onClick={() => closeAllDesktop(null)}
              >
                Lectures &amp; Sermons
              </NavLink>
              <NavLink
                to="/the-way/scriptural-discussions/old-covenant"
                className="wom-mega-item"
                onClick={() => closeAllDesktop(null)}
              >
                Old Covenant
              </NavLink>
              <NavLink
                to="/the-way/scriptural-discussions/renewed-covenant"
                className="wom-mega-item"
                onClick={() => closeAllDesktop(null)}
              >
                Renewed Covenant
              </NavLink>
              <NavLink
                to="/the-way/scriptural-discussions/scriptural-studies"
                className="wom-mega-item"
                onClick={() => closeAllDesktop(null)}
              >
                Scriptural Studies
              </NavLink>
            </div>
          </details>

          <details
            className="wom-mega"
            onToggle={(e) =>
              e.currentTarget.open && closeAllDesktop(e.currentTarget)
            }
          >
            <summary className="wom-link wom-summary">
              The Assembly <span className="wom-caret">▾</span>
            </summary>

            <div className="wom-mega-panel">
              <NavLink
                to="/the-assembly/local-assemblies"
                className="wom-mega-item"
                onClick={() => closeAllDesktop(null)}
              >
                Local Assemblies
              </NavLink>
              <NavLink
                to="/the-assembly/ministries"
                className="wom-mega-item"
                onClick={() => closeAllDesktop(null)}
              >
                Ministries
              </NavLink>
              <NavLink
                to="/the-assembly/positions"
                className="wom-mega-item"
                onClick={() => closeAllDesktop(null)}
              >
                Positions
              </NavLink>
              <NavLink
                to="/the-assembly/submissions"
                className="wom-mega-item"
                onClick={() => closeAllDesktop(null)}
              >
                Submissions
              </NavLink>
              <NavLink
                to="/the-assembly/testimonies"
                className="wom-mega-item"
                onClick={() => closeAllDesktop(null)}
              >
                Testimonies
              </NavLink>
              <NavLink
                to="/the-assembly/memberships/login"
                className="wom-mega-item"
                onClick={() => closeAllDesktop(null)}
              >
                Assembly Membership Login
              </NavLink>
              <NavLink
                to="/the-assembly/memberships/register"
                className="wom-mega-item"
                onClick={() => closeAllDesktop(null)}
              >
                Assembly Membership Register
              </NavLink>
            </div>
          </details>

          <NavLink
            to="/giving"
            className={linkClass}
            onClick={() => closeAllDesktop(null)}
          >
            Giving
          </NavLink>

          <NavLink
            to="/events"
            className={linkClass}
            onClick={() => closeAllDesktop(null)}
          >
            Events
          </NavLink>

          <NavLink
            to="/contact"
            className={linkClass}
            onClick={() => closeAllDesktop(null)}
          >
            Contact
          </NavLink>

          <details
            className="wom-mega"
            onToggle={(e) =>
              e.currentTarget.open && closeAllDesktop(e.currentTarget)
            }
          >
            <summary className="wom-link wom-summary">
              Account <span className="wom-caret">▾</span>
            </summary>

            <div className="wom-mega-panel wom-mega-panel-right">
              <NavLink
                to="/accounts/profile"
                className="wom-mega-item"
                onClick={() => closeAllDesktop(null)}
              >
                Profile
              </NavLink>
              <NavLink
                to="/accounts/verify-email"
                className="wom-mega-item"
                onClick={() => closeAllDesktop(null)}
              >
                Verify Email
              </NavLink>
            </div>
          </details>

          <button
            type="button"
            onClick={toggleTheme}
            className="wom-theme-toggle"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </nav>

        <div className="wom-mobile-controls">
          <button
            type="button"
            onClick={toggleTheme}
            className="wom-theme-toggle"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <button
            type="button"
            className={`wom-hamburger ${isMobileMenuOpen ? "is-open" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="wom-mobile-menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="wom-mobile-menu"
        ref={mobileMenuRef}
        className={`wom-mobile-menu ${isMobileMenuOpen ? "is-open" : ""}`}
      >
        <nav className="wom-mobile-nav" aria-label="Mobile navigation">
          <NavLink
            to="/"
            end
            className="wom-mobile-link"
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>

          <div className="wom-mobile-group">
            <button
              type="button"
              className="wom-mobile-group__toggle"
              onClick={() => toggleMobileGroup("the-way")}
              aria-expanded={openMobileGroup === "the-way"}
            >
              <span>The Way</span>
              <span className="wom-mobile-group__caret">
                {openMobileGroup === "the-way" ? "−" : "+"}
              </span>
            </button>

            {openMobileGroup === "the-way" ? (
              <div className="wom-mobile-submenu">
                <NavLink
                  to="/the-way"
                  className="wom-mobile-sublink"
                  onClick={closeMobileMenu}
                >
                  The Way Overview
                </NavLink>
                <NavLink
                  to="/the-way/mission"
                  className="wom-mobile-sublink"
                  onClick={closeMobileMenu}
                >
                  Mission
                </NavLink>
                <NavLink
                  to="/the-way/about"
                  className="wom-mobile-sublink"
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
                <NavLink
                  to="/the-way/statement-of-faith"
                  className="wom-mobile-sublink"
                  onClick={closeMobileMenu}
                >
                  Statement of Faith
                </NavLink>
                <NavLink
                  to="/the-way/outreach"
                  className="wom-mobile-sublink"
                  onClick={closeMobileMenu}
                >
                  Outreach
                </NavLink>
                <NavLink
                  to="/the-way/education"
                  className="wom-mobile-sublink"
                  onClick={closeMobileMenu}
                >
                  Education
                </NavLink>
                <NavLink
                  to="/the-way/education/website-membership/login"
                  className="wom-mobile-sublink"
                  onClick={closeMobileMenu}
                >
                  Education Membership Login
                </NavLink>
                <NavLink
                  to="/the-way/education/website-membership/register"
                  className="wom-mobile-sublink"
                  onClick={closeMobileMenu}
                >
                  Education Membership Register
                </NavLink>
              </div>
            ) : null}
          </div>

          <div className="wom-mobile-group">
            <button
              type="button"
              className="wom-mobile-group__toggle"
              onClick={() => toggleMobileGroup("scriptural")}
              aria-expanded={openMobileGroup === "scriptural"}
            >
              <span>Scriptural Discussions</span>
              <span className="wom-mobile-group__caret">
                {openMobileGroup === "scriptural" ? "−" : "+"}
              </span>
            </button>

            {openMobileGroup === "scriptural" ? (
              <div className="wom-mobile-submenu">
                <NavLink
                  to="/the-way/scriptural-discussions"
                  className="wom-mobile-sublink"
                  onClick={closeMobileMenu}
                >
                  Overview
                </NavLink>
                <NavLink
                  to="/the-way/scriptural-discussions/apocrypha"
                  className="wom-mobile-sublink"
                  onClick={closeMobileMenu}
                >
                  Apocrypha
                </NavLink>
                <NavLink
                  to="/the-way/scriptural-discussions/lectures-sermons"
                  className="wom-mobile-sublink"
                  onClick={closeMobileMenu}
                >
                  Lectures &amp; Sermons
                </NavLink>
                <NavLink
                  to="/the-way/scriptural-discussions/old-covenant"
                  className="wom-mobile-sublink"
                  onClick={closeMobileMenu}
                >
                  Old Covenant
                </NavLink>
                <NavLink
                  to="/the-way/scriptural-discussions/renewed-covenant"
                  className="wom-mobile-sublink"
                  onClick={closeMobileMenu}
                >
                  Renewed Covenant
                </NavLink>
                <NavLink
                  to="/the-way/scriptural-discussions/scriptural-studies"
                  className="wom-mobile-sublink"
                  onClick={closeMobileMenu}
                >
                  Scriptural Studies
                </NavLink>
              </div>
            ) : null}
          </div>

          <div className="wom-mobile-group">
            <button
              type="button"
              className="wom-mobile-group__toggle"
              onClick={() => toggleMobileGroup("assembly")}
              aria-expanded={openMobileGroup === "assembly"}
            >
              <span>The Assembly</span>
              <span className="wom-mobile-group__caret">
                {openMobileGroup === "assembly" ? "−" : "+"}
              </span>
            </button>

            {openMobileGroup === "assembly" ? (
              <div className="wom-mobile-submenu">
                <NavLink
                  to="/the-assembly/local-assemblies"
                  className="wom-mobile-sublink"
                  onClick={closeMobileMenu}
                >
                  Local Assemblies
                </NavLink>
                <NavLink
                  to="/the-assembly/ministries"
                  className="wom-mobile-sublink"
                  onClick={closeMobileMenu}
                >
                  Ministries
                </NavLink>
                <NavLink
                  to="/the-assembly/positions"
                  className="wom-mobile-sublink"
                  onClick={closeMobileMenu}
                >
                  Positions
                </NavLink>
                <NavLink
                  to="/the-assembly/submissions"
                  className="wom-mobile-sublink"
                  onClick={closeMobileMenu}
                >
                  Submissions
                </NavLink>
                <NavLink
                  to="/the-assembly/testimonies"
                  className="wom-mobile-sublink"
                  onClick={closeMobileMenu}
                >
                  Testimonies
                </NavLink>
                <NavLink
                  to="/the-assembly/memberships/login"
                  className="wom-mobile-sublink"
                  onClick={closeMobileMenu}
                >
                  Assembly Membership Login
                </NavLink>
                <NavLink
                  to="/the-assembly/memberships/register"
                  className="wom-mobile-sublink"
                  onClick={closeMobileMenu}
                >
                  Assembly Membership Register
                </NavLink>
              </div>
            ) : null}
          </div>

          <NavLink
            to="/giving"
            className="wom-mobile-link"
            onClick={closeMobileMenu}
          >
            Giving
          </NavLink>

          <NavLink
            to="/events"
            className="wom-mobile-link"
            onClick={closeMobileMenu}
          >
            Events
          </NavLink>

          <NavLink
            to="/contact"
            className="wom-mobile-link"
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>

          <div className="wom-mobile-group">
            <button
              type="button"
              className="wom-mobile-group__toggle"
              onClick={() => toggleMobileGroup("account")}
              aria-expanded={openMobileGroup === "account"}
            >
              <span>Account</span>
              <span className="wom-mobile-group__caret">
                {openMobileGroup === "account" ? "−" : "+"}
              </span>
            </button>

            {openMobileGroup === "account" ? (
              <div className="wom-mobile-submenu">
                <NavLink
                  to="/accounts/profile"
                  className="wom-mobile-sublink"
                  onClick={closeMobileMenu}
                >
                  Profile
                </NavLink>
                <NavLink
                  to="/accounts/verify-email"
                  className="wom-mobile-sublink"
                  onClick={closeMobileMenu}
                >
                  Verify Email
                </NavLink>
              </div>
            ) : null}
          </div>
        </nav>
      </div>
    </header>
  );
}
