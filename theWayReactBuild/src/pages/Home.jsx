import React from "react";
import { Link } from "react-router-dom";
import "@/assets/css/Home.css";

// ✅ Replace these with your own symbol-free stock images placed in:
// frontend/src/assets/home/
// (or wherever your bundler supports importing assets)
import heroBg from "../assets/images/home/hero-nature.jpg";
import cardWho from "../assets/images/home/card-who.jpg";
import cardScripture from "../assets/images/home/card-scripture.jpg";
import cardAssembly from "../assets/images/home/card-assembly.jpg";
import cardGiving from "../assets/images/home/card-giving.jpg";
import parallaxBg from "../assets/images/home/parallax-nature.jpg";

const Home = () => {
  const cards = [
    {
      title: "Who Are We",
      description: "Our foundation, purpose, and covenant identity.",
      to: "/who-are-we",
      img: cardWho,
    },
    {
      title: "Scriptural Discussions",
      description: "Study, teachings, and conversations rooted in Scripture.",
      to: "/scriptural-discussions",
      img: cardScripture,
    },
    {
      title: "The Assembly",
      description: "Gathering, fellowship, and community life.",
      to: "/assembly",
      img: cardAssembly,
    },
    {
      title: "Giving",
      description: "Support the work and help strengthen the community.",
      to: "/giving",
      img: cardGiving,
    },
  ];

  return (
    <main className="home">
      {/* HERO */}
      <section className="home-hero" style={{ "--hero-bg": `url(${heroBg})` }}>
        <div className="home-hero__overlay" />

        <div className="home-shell home-hero__inner">
          <div className="home-hero__content">
            <p className="home-hero__kicker">The Way of Messiah</p>

            <h1 className="home-hero__title">
              Walking Together in the Ways of Yahuah
            </h1>

            <p className="home-hero__subtitle">
              A covenant assembly devoted to obedience, fellowship, and the
              restoration of the ancient paths.
            </p>

            <div className="home-hero__cta">
              <Link className="btn-primary" to="/who-are-we">
                Who We Are
              </Link>
              <Link className="btn-secondary" to="/assembly">
                The Assembly
              </Link>
            </div>

            <p className="home-hero__note">
              *We intentionally avoid religious symbols in imagery (no crosses,
              statues, icons).
            </p>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="home-section home-welcome">
        <div className="home-shell">
          <div className="home-welcome__grid">
            <div>
              <h2 className="home-h2">You Are Welcome Here</h2>
              <p className="home-lead">
                Whether you are seeking understanding, fellowship, or a deeper
                walk in truth — you are welcome here. We gather as families and
                students of Scripture, walking humbly and learning together.
              </p>
              <div className="home-actions">
                <Link className="btn-tertiary" to="/who-are-we">
                  Learn More
                </Link>
                <Link className="link-soft" to="/membership">
                  Become a Member →
                </Link>
              </div>
            </div>

            <div className="home-welcome__panel" aria-label="Welcome highlight">
              <div className="home-welcome__panelInner">
                <h3 className="home-h3">What you’ll find</h3>
                <ul className="home-bullets">
                  <li>Warm fellowship and community support</li>
                  <li>Scripture-centered learning and discussion</li>
                  <li>Gatherings, events, and announcements</li>
                  <li>Ways to serve and strengthen the work</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CARDS */}
      <section className="home-section">
        <div className="home-shell">
          <div className="home-section__header">
            <h2 className="home-h2">Explore</h2>
            <p className="home-muted">
              Start where you feel led — each section is designed to be clear,
              welcoming, and easy to navigate.
            </p>
          </div>

          <div className="home-cards" role="list">
            {cards.map((c) => (
              <Link
                key={c.title}
                to={c.to}
                className="home-card"
                role="listitem"
              >
                <div
                  className="home-card__media"
                  style={{ backgroundImage: `url(${c.img})` }}
                  aria-hidden="true"
                />
                <div className="home-card__body">
                  <h3 className="home-card__title">{c.title}</h3>
                  <p className="home-card__desc">{c.description}</p>
                  <span className="home-card__link">Enter →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PARALLAX / FIXED BACKGROUND QUOTE */}
      <section
        className="home-parallax"
        style={{ backgroundImage: `url(${parallaxBg})` }}
        aria-label="Unity quote"
      >
        <div className="home-parallax__overlay" />
        <div className="home-shell home-parallax__inner">
          <p className="home-parallax__quote">
            “Behold, how good and how pleasant it is for brethren to dwell
            together in unity.”
          </p>
          <p className="home-parallax__cite">— Psalm 133:1</p>
          <div className="home-parallax__cta">
            <Link className="btn-primary" to="/assembly">
              See Gatherings & Events
            </Link>
          </div>
        </div>
      </section>

      {/* SMALL FOOTER CTA */}
      <section className="home-section">
        <div className="home-shell home-final">
          <h2 className="home-h2">Ready to connect?</h2>
          <p className="home-muted">
            Visit the Assembly page, explore discussions, or learn more about
            who we are.
          </p>
          <div className="home-actions">
            <Link className="btn-secondary" to="/assembly">
              The Assembly
            </Link>
            <Link className="btn-tertiary" to="/scriptural-discussions">
              Scriptural Discussions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
