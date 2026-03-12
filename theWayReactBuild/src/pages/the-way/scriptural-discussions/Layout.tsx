import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "@/assets/css/the-way/ScripturalDiscussions.css";

export default function ScripturalDiscussionsLayout() {
  return (
    <main className="scriptural-page">
      <section className="scriptural-hero">
        <div className="scriptural-hero__overlay" />
        <div className="scriptural-hero__inner">
          <p className="scriptural-eyebrow">The Way of Messiah</p>
          <h1 className="scriptural-hero__title">Scriptural Discussions</h1>
          <p className="scriptural-hero__subtitle">
            From the fall in Eden to the final judgment of the serpent, the
            Scriptures record the conflict between two seeds, the loss of
            dominion, the preservation of the righteous line, and the lawful
            restoration of all things through the Elect One.
          </p>

          <div className="scriptural-hero__actions">
            <a
              className="theway-btn theway-btn-primary"
              href="#scriptural-content"
            >
              Begin the Journey
            </a>
            <Link className="theway-btn theway-btn-secondary" to="/the-way">
              Back to The Way
            </Link>
          </div>
        </div>
      </section>

      <section className="scriptural-subnav">
        <div className="scriptural-shell">
          <nav
            className="scriptural-subnav__inner"
            aria-label="Scriptural Discussions sections"
          >
            <NavLink
              end
              to="/the-way/scriptural-discussions"
              className="scriptural-subnav__link"
            >
              Overview
            </NavLink>
            <NavLink
              to="/the-way/scriptural-discussions/genesis"
              className="scriptural-subnav__link"
            >
              Genesis
            </NavLink>
            <NavLink
              to="/the-way/scriptural-discussions/ancient-witnesses"
              className="scriptural-subnav__link"
            >
              Ancient Witnesses
            </NavLink>
            <NavLink
              to="/the-way/scriptural-discussions/revelation"
              className="scriptural-subnav__link"
            >
              Revelation
            </NavLink>
          </nav>
        </div>
      </section>

      <section id="scriptural-content">
        <Outlet />
      </section>
    </main>
  );
}
