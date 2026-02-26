import React from "react";
import { NavLink } from "react-router-dom";
import "@/assets/css/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="wom-footer" role="contentinfo">
      <div className="wom-footer-inner">
        <div className="wom-footer-left">
          <div className="wom-footer-brand">The Way of Messiah</div>
          <div className="wom-footer-copy">
            © {year} The Way of Messiah. All rights reserved.
          </div>
        </div>

        <nav className="wom-footer-links" aria-label="Footer links">
          <NavLink to="/privacy" className="wom-footer-link">
            Privacy Policy
          </NavLink>
          <NavLink to="/terms" className="wom-footer-link">
            Terms of Use
          </NavLink>
          <NavLink to="/copyright" className="wom-footer-link">
            Copyright Policy
          </NavLink>
          <NavLink to="/faq" className="wom-footer-link">
            FAQ
          </NavLink>
          <NavLink to="/sitemap" className="wom-footer-link">
            Site Map
          </NavLink>
        </nav>

        <div className="wom-footer-social" aria-label="Social links">
          <a
            className="wom-social"
            href="#"
            aria-label="TikTok"
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>
          <a
            className="wom-social"
            href="#"
            aria-label="X"
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>
          <a
            className="wom-social"
            href="#"
            aria-label="YouTube"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
          <a
            className="wom-social"
            href="#"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
