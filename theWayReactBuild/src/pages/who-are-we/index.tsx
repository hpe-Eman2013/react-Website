import React from "react";
import { Link } from "react-router-dom";
import "@/assets/css/who-are-we/WhoAreWe.css";

// ✅ Image imports (symbol-free stock only)
import heroBg from "@/assets/images/who-are-we/about/hero.jpg";
import imgAbout from "@/assets/images/who-are-we/about/preview.jpg";
import imgFaith from "@/assets/images/who-are-we/statement-of-faith/preview.jpg";
import imgMission from "@/assets/images/who-are-we/mission-vision/preview.jpg";
import imgOutreach from "@/assets/images/who-are-we/outreach/preview.jpg";
import imgEducation from "@/assets/images/who-are-we/education/preview.jpg";

const WhoAreWe = () => {
  const blocks = [
    {
      title: "About",
      desc: "Learn our background, how this assembly formed, and what we value in fellowship and daily walk.",
      to: "/who-are-we/about",
      img: imgAbout,
    },
    {
      title: "Statement of Faith",
      desc: "A clear summary of what we believe, how we approach Scripture, and what we teach as an assembly.",
      to: "/who-are-we/statement-of-faith",
      img: imgFaith,
    },
    {
      title: "Mission & Vision",
      desc: "Our purpose, long-term direction, and the kind of community we aim to build—faithful, steady, and fruitful.",
      to: "/who-are-we/mission-vision",
      img: imgMission,
    },
    {
      title: "Outreach",
      desc: "How we serve others in practical ways—support, compassion, and good works that strengthen families and community.",
      to: "/who-are-we/outreach",
      img: imgOutreach,
    },
    {
      title: "Education",
      desc: "Resources, studies, and learning pathways—so individuals and families can grow in understanding step-by-step.",
      to: "/who-are-we/education",
      img: imgEducation,
    },
  ];

  return (
    <main className="waw">
      {/* HERO */}
      <section className="waw-hero" aria-label="Who Are We hero">
        <img src={heroBg} alt="" className="waw-hero__bg" aria-hidden="true" />

        <div className="waw-hero__overlay" />

        <div className="waw-shell waw-hero__inner">
          <div className="waw-hero__card">
            <p className="waw-kicker">Who Are We</p>

            <h1 className="waw-title">
              A Warm Assembly Built on Truth and Fellowship
            </h1>

            <p className="waw-subtitle">
              We are a covenant community seeking to walk faithfully, learn with
              humility, and strengthen one another in everyday life—families,
              singles, and seekers alike.
            </p>

            <div className="waw-hero__cta">
              <Link className="btn-primary" to="/who-are-we/statement-of-faith">
                Read Our Statement of Faith
              </Link>
              <Link className="btn-secondary" to="/assembly">
                Visit The Assembly
              </Link>
            </div>

            <p className="waw-note">
              *We intentionally avoid religious symbols in imagery (no crosses,
              statues, icons).
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="waw-section">
        <div className="waw-shell">
          <div className="waw-intro">
            <h2 className="waw-h2">Start Here</h2>
            <p className="waw-muted">
              This section is designed to be clear and approachable. Each page
              is broken into smaller parts with brief explanations and links so
              you can go deeper at your own pace.
            </p>
          </div>

          {/* BLOCKS */}
          <ul className="waw-grid">
            {blocks.map((b) => (
              <li key={b.title} className="waw-gridItem">
                <Link to={b.to} className="waw-card">
                  <div className="waw-card__media">
                    <img
                      src={b.img}
                      alt={`${b.title} preview`}
                      className="waw-card__img"
                      loading="lazy"
                    />
                  </div>

                  <div className="waw-card__body">
                    <h3 className="waw-card__title">{b.title}</h3>
                    <p className="waw-card__desc">{b.desc}</p>
                    <span className="waw-card__link">Learn more →</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {/* QUICK LINKS STRIP */}
          <div className="waw-strip" aria-label="Quick links">
            <div className="waw-strip__text">
              <h3 className="waw-h3">Prefer a quick overview?</h3>
              <p className="waw-muted">
                If you want the shortest path, start with Statement of Faith and
                Mission & Vision.
              </p>
            </div>

            <div className="waw-strip__actions">
              <Link
                className="btn-tertiary"
                to="/who-are-we/statement-of-faith"
              >
                Statement of Faith
              </Link>
              <Link className="btn-tertiary" to="/who-are-we/mission-vision">
                Mission & Vision
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhoAreWe;
