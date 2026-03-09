import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowUp, Instagram, Youtube, X } from "lucide-react";
import "@/assets/css/Footer.css";

function TikTokIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16.5 3c.6 3.3 2.7 5.2 5.5 5.4v3.1c-2.2.1-4.1-.7-5.5-1.9v6.6c0 4-3.2 7.3-7.3 7.3S2 20.2 2 16.2c0-4 3.3-7.3 7.3-7.3.5 0 1 0 1.5.2v3.3c-.5-.2-1-.4-1.5-.4-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4V3h3.2Z"
      />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { label: "TikTok", href: "#", Icon: TikTokIcon },
    { label: "X", href: "#", Icon: X },
    { label: "YouTube", href: "#", Icon: Youtube },
    { label: "Instagram", href: "#", Icon: Instagram },
  ];

  function handleBackToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="wom-footer" role="contentinfo">
      <div className="wom-footer-inner">
        <div className="wom-footer-left">
          <div className="wom-footer-brand">
            <NavLink to="/" className="wom-footer-brand">
              The Way of Messiah
            </NavLink>
          </div>
          <div className="wom-footer-copy">
            © {year} The Way of Messiah. All rights reserved.
          </div>
        </div>

        <nav className="wom-footer-links" aria-label="Footer links">
          <NavLink to="/legal/privacy" className="wom-footer-link">
            Privacy Policy
          </NavLink>
          <NavLink to="/legal/terms" className="wom-footer-link">
            Terms of Use
          </NavLink>
          <NavLink to="/legal/copyright" className="wom-footer-link">
            Copyright Policy
          </NavLink>
          <NavLink to="/legal/faq" className="wom-footer-link">
            FAQ
          </NavLink>
          <NavLink to="/legal/sitemap" className="wom-footer-link">
            Site Map
          </NavLink>
        </nav>

        <div className="wom-footer-social" aria-label="Social links">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              className="wom-social"
              href={href}
              aria-label={label}
              title={label}
              target="_blank"
              rel="noreferrer"
            >
              <Icon className="wom-social-icon" />
            </a>
          ))}

          <button
            type="button"
            className="wom-social wom-social-button wom-back-to-top"
            onClick={handleBackToTop}
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="wom-social-icon" />
          </button>
        </div>
      </div>
    </footer>
  );
}
