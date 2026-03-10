import React from "react";
import { Link } from "react-router-dom";
import "@/assets/css/the-way/About.css";

type Feature = {
  title: string;
  desc: string;
  to?: string;
};

const features: Feature[] = [
  {
    title: "Scripture Study & Teaching",
    desc: "Structured lessons and studies to build understanding and obedience.",
    to: "/the-way",
  },
  {
    title: "Feasts & Sabbaths",
    desc: "Gatherings, calendars, and guidance for set-apart days of Yahuah.",
    to: "/events",
  },
  {
    title: "Equipping for Outreach",
    desc: "Tools and training to serve, teach, and strengthen others.",
    to: "/the-way",
  },
  {
    title: "Stewardship & Practical Wisdom",
    desc: "Household order, equity principles, and wise management.",
    to: "/the-way",
  },
  {
    title: "Education Materials",
    desc: "Courses and resources designed for consistent growth.",
    to: "/the-way",
  },
  {
    title: "Community Building",
    desc: "Membership, support, and shared covenant purpose.",
    to: "/memberships",
  },
];

const values = [
  "Covenant obedience",
  "Truth with humility",
  "Family discipleship",
  "Community fellowship",
  "Righteous stewardship",
  "Clear teaching & accountability",
];

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero" aria-label="About hero">
        <div className="about-hero-overlay" />
        <div className="about-hero-inner">
          <h1 className="about-hero-title">About The Way of Messiah</h1>
          <p className="about-hero-subtitle">
            A restored-faith community centered on obedience, covenant worship,
            and practical stewardship—equipping families to walk uprightly in
            truth.
          </p>

          <div className="about-hero-actions">
            <Link className="theway-btn" to="/the-way/statement-of-faith">
              Statement of Faith
            </Link>
            <Link
              className="theway-btn theway-btn-ghost"
              to="/the-way/memberships"
            >
              Membership
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-panel">
            <h2 className="about-h2">Mission & Purpose</h2>

            <div className="about-copy">
              <p>
                We exist to honor Yahuah by returning to His ways—His
                commandments, Sabbaths, appointed times, and the order of
                covenant living.
              </p>
              <p>
                Our mission is practical: teach, equip, and build tools that
                help believers grow in understanding, unity, and obedience.
              </p>
              <p>
                We focus on training that strengthens households: scripture
                study, lawful stewardship, and community practice—so faith
                becomes a lived walk.
              </p>
            </div>

            <ul className="about-bullets" aria-label="Core values">
              {values.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="about-section alt">
        <div className="about-container">
          <header className="about-header">
            <h2 className="about-h2">What We Do</h2>
            <p className="about-lead">
              We teach, organize, and build resources that make covenant life
              actionable.
            </p>
          </header>

          <div className="about-grid" role="list">
            {features.map((f) => (
              <div className="about-card" role="listitem" key={f.title}>
                <h3 className="about-h3">{f.title}</h3>
                <p className="about-muted">{f.desc}</p>
                {f.to ? (
                  <Link className="about-link" to={f.to}>
                    Learn more →
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-panel">
            <h2 className="about-h2">Our Story</h2>
            <p className="about-copy">
              This ministry exists because many are hungry for clarity—how to
              obey, how to worship, how to build, and how to steward life in a
              way that honors Elohiym. We’re building a home for learning and
              practice, not just ideas.
            </p>

            <details className="about-details">
              <summary>Read more</summary>
              <div className="about-details-body">
                <p>
                  Our goal is to produce materials that help households grow in
                  discipline, understanding, and fruitful living—while
                  strengthening fellowship through shared worship, set-apart
                  days, and community support.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* SCRIPTURE ANCHORS */}
      <section className="about-section alt">
        <div className="about-container">
          <header className="about-header">
            <h2 className="about-h2">Scripture Anchors</h2>
            <p className="about-lead">
              These passages frame the “why” behind our work.
            </p>
          </header>

          <div className="about-quotes">
            <figure className="about-quote">
              <blockquote>
                “My people are destroyed for lack of knowledge…”
              </blockquote>
              <figcaption>Hosea 4:6</figcaption>
            </figure>

            <figure className="about-quote">
              <blockquote>
                “Remember the sabbath day, to keep it holy.”
              </blockquote>
              <figcaption>Deuteronomy 5:12</figcaption>
            </figure>

            <figure className="about-quote">
              <blockquote>
                “These are the feasts of Yahuah… holy convocations…”
              </blockquote>
              <figcaption>Leviticus 23:2</figcaption>
            </figure>

            <figure className="about-quote">
              <blockquote>
                “Be doers of the word, and not hearers only…”
              </blockquote>
              <figcaption>James 1:22</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="about-cta">
        <div className="about-container about-cta-inner">
          <div className="about-cta-copy">
            <h2 className="about-h2">Start Here</h2>
            <p className="about-lead">
              If you’re new, begin with our foundation, then take your next
              step.
            </p>
          </div>

          <div className="about-cta-actions">
            <Link className="theway-btn" to="/the-way/statement-of-faith">
              Statement of Faith
            </Link>
            <Link className="theway-btn theway-btn-ghost" to="/memberships">
              Membership
            </Link>
            <Link className="theway-btn theway-btn-ghost" to="/give">
              Giving
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
