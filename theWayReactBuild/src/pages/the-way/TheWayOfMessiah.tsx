import React from "react";
import { Link } from "react-router-dom";
import "@/assets/css/the-way/TheWay.css";

type Pillar = {
  title: string;
  description: string;
  to: string;
};

const PILLARS: Pillar[] = [
  {
    title: "About Us",
    description: "Who we are, why we exist, and what we’re building together.",
    to: "/the-way/about",
  },
  {
    title: "Statement of Faith",
    description: "What we believe — anchored in Scripture, tested, and lived.",
    to: "/the-way/statement-of-faith",
  },
  {
    title: "Outreach",
    description:
      "Serving, teaching, and strengthening families and communities.",
    to: "/the-way/outreach",
  },
  {
    title: "Education",
    description:
      "Training for wisdom, stewardship, and practical righteousness.",
    to: "/the-way/education",
  },
  {
    title: "Lectures",
    description:
      "Long-form teaching: structured series, topics, and deep dives.",
    to: "/the-way/lectures",
  },
  {
    title: "Scriptural Studies",
    description: "Study guides, reading plans, and verse-by-verse exploration.",
    to: "/the-way/scriptural-studies",
  },
  {
    title: "Memberships",
    description:
      "Covenant community: commitments, conduct, and accountability.",
    to: "/the-way/memberships",
  },
  {
    title: "Giving",
    description:
      "Support the work—help us build tools, teaching, and outreach.",
    to: "/giving",
  },
];

export default function TheWayPage() {
  return (
    <main className="theway">
      {/* HERO */}
      <section className="theway-hero">
        <div className="theway-hero-overlay" />
        <div className="theway-hero-inner">
          <h2 className="theway-eyebrow">THE WAY</h2>

          <h1 className="theway-title">
            Restoring the Ancient Paths — Returning to the Names &amp; the Word
          </h1>

          <p className="theway-subtitle">
            We’re rebuilding what was fractured by compromise: recovering the
            Hebraic foundation of faith, confronting Hellenization where it
            altered doctrine, and honoring the Names as Scripture reveals.
          </p>

          <div className="theway-hero-ctas">
            <a href="#pillars" className="theway-btn theway-btn-ghost">
              Explore the 8 Pillars
            </a>
            <Link
              className="theway-btn theway-btn-primary"
              to="/statement-of-faith"
            >
              Read the Statement of Faith
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="theway-section">
        <div className="theway-container">
          <h2 className="theway-h2">Why “The Way”</h2>

          <div className="theway-prose">
            <p>
              “The Way” is a return: to the pattern of Scripture, the
              commandments of Elohim, the witness of Messiah, and the covenant
              rhythms of Sabbaths and Feasts. We seek alignment — not novelty —
              because truth doesn’t need reinvention.
            </p>
            <p>
              Over time, layers of philosophy and tradition have shaped modern
              faith practice. We openly examine those layers, compare everything
              with the Word, and restore what is ancient, faithful, and clean.
            </p>
            <p>
              This page is your springboard. Each pillar below is a focused
              path: learn who we are, what we believe, how we serve, how we
              teach, how we study, how we gather, and how you can participate.
            </p>
          </div>

          {/* SCRIPTURE PANELS */}
          <div className="theway-scripture-grid" aria-label="Scripture panels">
            <figure className="theway-quote">
              <blockquote>
                “Thus said Yahuah, “Stand in the ways and see, and ask for the
                old paths, where the good way is, and walk in it; and find rest
                for yourselves. …”
              </blockquote>
              <figcaption>Jeremiah 6:16</figcaption>
            </figure>

            <figure className="theway-quote">
              <blockquote>
                “To the Torah and to the testimony: if they speak not according
                to this word, it is because there is no light in them.”
              </blockquote>
              <figcaption>Isaiah 8:20</figcaption>
            </figure>

            <figure className="theway-quote">
              <blockquote>
                “"And Elohim said further to Mosheh, “Thus you are to say to the
                children of Yisra’ĕl, ‘Yahuah Elohim of your fathers, the Elohim
                of Aḇraham, the Elohim of Yitsḥaq, and the Elohim of Ya’aqoḇ,
                has sent me to you. This is My Name forever, and this is My
                remembrance to all generations.’"
              </blockquote>
              <figcaption>Exodus 3:15</figcaption>
            </figure>

            <figure className="theway-quote">
              <blockquote>
                “"Here is the endurance of the qodeshim, here are those guarding
                the Commands of Yahuah and the belief of Yahusha."”
              </blockquote>
              <figcaption>Revelation 14:12</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="theway-section theway-section-alt" id="pillars">
        <div className="theway-container">
          <div className="theway-section-head">
            <h2 className="theway-h2">The 8 Pillars</h2>
            <p className="theway-muted">
              Choose a path. Each pillar is short, focused, and built for
              navigation—not information overload.
            </p>
          </div>

          <div
            className="theway-grid"
            role="list"
            aria-label="Eight pillar navigation"
          >
            {PILLARS.map((p) => (
              <article className="theway-card" role="listitem" key={p.title}>
                <h3 className="theway-card-title">{p.title}</h3>
                <p className="theway-card-desc">{p.description}</p>
                <div className="theway-card-actions">
                  <Link className="theway-card-link" to={p.to}>
                    Learn more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="theway-section">
        <div className="theway-container">
          <div className="theway-cta">
            <div className="theway-cta-text">
              <h2 className="theway-h2">Start with what matters most</h2>
              <p className="theway-muted">
                If you’re new here, begin with our Statement of Faith, then
                Memberships if you’re ready to walk with us.
              </p>
            </div>
            <div className="theway-cta-actions">
              <Link
                className="theway-btn theway-btn-primary"
                to="/statement-of-faith"
              >
                Statement of Faith
              </Link>
              <Link className="theway-btn theway-btn-ghost" to="/memberships">
                Memberships
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
