import React from "react";
import { Link } from "react-router-dom";
import "@/assets/css/the-way/Outreach.css";

import heroImg from "@/assets/images/the-way/outreach/preview.jpg";

import ScriptureOutreach from "@/components/outreach/scripture/ScriptureOutreach";
import EquityOutreach from "@/components/outreach/equity/EquityOutreach";
import AgricultureOutreach from "@/components/outreach/agriculture/AgricultureOutreach";

import communityImg from "@/assets/images/the-way/outreach/community.jpg";
import foodDistributionImg from "@/assets/images/the-way/outreach/foodDistribution.jpg";
import foodVolunteersImg from "@/assets/images/the-way/outreach/foodVolunteers.jpg";

export default function Outreach() {
  return (
    <main className="outreach-page" aria-label="Outreach page">
      {/* HERO */}
      <header className="outreach-hero" aria-label="Outreach">
        <div className="outreach-hero__media" aria-hidden="true">
          <img
            src={heroImg}
            alt=""
            className="outreach-hero__img"
            loading="eager"
          />
          <div className="outreach-hero__overlay" />
        </div>

        <div className="outreach-hero__content container outreach-hero__content--top">
          <p className="outreach-hero__kicker">The Way of Messiah</p>
          <h1 className="outreach-hero__title">Outreach</h1>
          <p className="outreach-hero__subtitle">
            Practical ministry rooted in the Word, the Law of Equity, and
            Stewardship of the Land.
          </p>

          <div className="outreach-hero__actions">
            <a className="btn-primary" href="#pillars">
              Explore the Pillars
            </a>

            <Link className="btn-ghost" to="/contact">
              Join the Work
            </Link>
          </div>

          <p className="outreach-hero__micro">
            508(c)(1)(A) Religious Ministry • Education in Word, Law, and Land
          </p>
        </div>
      </header>

      {/* INTRO */}
      <section
        className="outreach-intro container"
        aria-label="Outreach introduction"
      >
        <div className="outreach-panel">
          <h2 className="outreach-h2">Why Outreach Matters</h2>
          <p className="outreach-lead">
            Outreach for a ministry grounded in The Way, Equity, and Agriculture
            should be as practical as it is spiritual. Since the mission is to
            move people from “the system” back to the “Household of Yahuah,” our
            outreach demonstrates the tangible benefits of that transition.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section
        id="pillars"
        className="outreach-pillars container"
        aria-label="Outreach pillars"
      >
        <div className="outreach-section-head">
          <h2 className="outreach-h2">Three Pillars of Outreach</h2>
          <p className="outreach-sub">
            Each pillar has both <strong>virtual</strong> and{" "}
            <strong>in-person</strong> pathways so every member can participate
            with wisdom and order.
          </p>
        </div>

        <div className="outreach-grid">
          <ScriptureOutreach />
          <EquityOutreach />
          <AgricultureOutreach />
        </div>
      </section>

      {/* ROLES */}
      <section
        className="outreach-roles container"
        aria-label="Summary of outreach roles"
      >
        <div className="outreach-panel">
          <h2 className="outreach-h2">Summary of Outreach Roles</h2>

          <div
            className="outreach-table-wrap"
            role="region"
            aria-label="Outreach roles table"
          >
            <table className="outreach-table">
              <thead>
                <tr>
                  <th scope="col">Member Type</th>
                  <th scope="col">Virtual Outreach</th>
                  <th scope="col">In-Person Outreach</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>The Teacher</strong>
                  </td>
                  <td>Record “Hebrew Word of the Day”</td>
                  <td>Lead a Home Fellowship study</td>
                </tr>
                <tr>
                  <td>
                    <strong>The Steward</strong>
                  </td>
                  <td>Manage the Digital Seed Exchange</td>
                  <td>Host a Garden/Homestead tour</td>
                </tr>
                <tr>
                  <td>
                    <strong>The Counselor</strong>
                  </td>
                  <td>Answer legal/Trust law questions</td>
                  <td>Offer “Equity” consultations</td>
                </tr>
                <tr>
                  <td>
                    <strong>The Helper</strong>
                  </td>
                  <td>Share ministry graphics/posts</td>
                  <td>Distribute “Free Corners” produce</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PARTICIPATE */}
      <section className="outreach-participate" aria-label="Participation">
        <div className="container">
          <div className="outreach-section-head">
            <h2 className="outreach-h2">How You Can Participate</h2>
            <p className="outreach-sub">
              Simple steps. Clear lanes. No pressure—just consistency and good
              fruit.
            </p>
          </div>

          <div className="outreach-feature-grid">
            <article className="outreach-feature">
              <img
                src={communityImg}
                alt="Community gathering and discussion"
                loading="lazy"
              />
              <div className="outreach-feature__body">
                <h3>Gather</h3>
                <p>
                  Host or join small fellowships—teaching the Word and building
                  a local community that walks in obedience.
                </p>
              </div>
            </article>

            <article className="outreach-feature">
              <img
                src={foodDistributionImg}
                alt="Food distribution for those in need"
                loading="lazy"
              />
              <div className="outreach-feature__body">
                <h3>Serve</h3>
                <p>
                  Participate in practical care: food distribution, assistance,
                  and visible charity done in honor of Yahuah.
                </p>
              </div>
            </article>

            <article className="outreach-feature">
              <img
                src={foodVolunteersImg}
                alt="Volunteers preparing food supplies"
                loading="lazy"
              />
              <div className="outreach-feature__body">
                <h3>Support</h3>
                <p>
                  Help expand education materials and outreach logistics—so the
                  work can scale with integrity.
                </p>
              </div>
            </article>
          </div>

          <div className="outreach-cta">
            <Link className="btn-primary" to="/membership">
              Become a Member
            </Link>
            <Link className="btn-ghost" to="/donate">
              Support the Work
            </Link>
          </div>
        </div>
      </section>

      {/* LOW-PRESSURE FIRST STEP */}
      <section
        className="outreach-first-step container"
        aria-label="Low pressure first step"
      >
        <div className="outreach-panel">
          <h2 className="outreach-h2">
            A Low-Pressure First Step for All Members
          </h2>

          <p className="outreach-lead">
            Create a <strong>Ministry Card</strong> that members can carry. On
            one side, it has the names <strong>Yahuah</strong> and{" "}
            <strong>Yahusha</strong> in Paleo Hebrew. On the other, it says:
          </p>

          <blockquote className="outreach-quote">
            <p>
              “Seeking the Ancient Paths: Education in Word, Law, and Land.”
            </p>
            <footer>
              Include a QR code linking to your website or virtual modules
            </footer>
          </blockquote>
        </div>
      </section>

      {/* PRINT MATERIALS */}
      <section
        className="outreach-print container"
        aria-label="Print materials"
      >
        <details className="outreach-details">
          <summary className="outreach-details__summary">
            Print Materials &amp; Implementation Guides (Cards, Flyers,
            Brochure)
          </summary>

          <div className="outreach-details__body">
            <div className="outreach-actions">
              <a
                className="btn-tertiary"
                href="/print/ministry-card"
                target="_blank"
                rel="noreferrer"
              >
                View Ministry Card
              </a>
              <a
                className="btn-tertiary"
                href="/print/seed-flyer"
                target="_blank"
                rel="noreferrer"
              >
                View Seed &amp; Harvest Flyer
              </a>
              <a
                className="btn-tertiary"
                href="/print/brochure"
                target="_blank"
                rel="noreferrer"
              >
                View Tri-Fold Brochure
              </a>
            </div>

            <div className="outreach-note">
              <h3>Implementation note</h3>
              <p className="mb0">
                Keep these materials short, beautiful, and non-combative. The
                goal is to invite curiosity and open doors for conversation.
              </p>
            </div>
          </div>
        </details>
      </section>

      {/* FINAL CTA STRIP */}
      <footer
        className="outreach-footer-cta"
        aria-label="Outreach call to action"
      >
        <div className="container outreach-footer-cta__inner">
          <div>
            <h2>Ready to build with us?</h2>
            <p>
              Join the work—Word, Law, and Land—done with order, humility, and
              strength.
            </p>
          </div>
          <div className="outreach-footer-cta__actions">
            <Link className="btn-primary" to="/contact">
              Contact Us
            </Link>
            <Link className="btn-ghost btn-ghost--contrast" to="/the-way">
              Back to The Way
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
