import React from "react";
import { Link } from "react-router-dom";
import "@/assets/css/events/Events.css";
import eventsImg from "@/assets/images/events/events.jpg";

export default function EventsPage() {
  const quarterRows = [
    { quarter: "Quarter 1", months: "Months 1–3", days: "91 days" },
    { quarter: "Quarter 2", months: "Months 4–6", days: "91 days" },
    { quarter: "Quarter 3", months: "Months 7–9", days: "91 days" },
    { quarter: "Quarter 4", months: "Months 10–12", days: "91 days" },
  ];

  const firstMonthRows = [
    { date: "March 25, 2026", event: "Biblical New Year" },
    { date: "April 7, 2026", event: "Passover Preparation" },
    { date: "April 8, 2026", event: "Passover" },
    { date: "April 9–15, 2026", event: "Feast of Unleavened Bread" },
  ];

  const benefits = [
    "Sabbaths remain fixed and never drift.",
    "Feast days always occur on the same weekday each year.",
    "The weekly cycle remains perfectly aligned.",
  ];

  const importancePoints = [
    "Recognize the correct timing of the Feasts.",
    "Maintain the Sabbath cycle.",
    "Understand the structure of Yahuah’s appointed times.",
  ];

  return (
    <main className="events-page">
      <section className="events-hero">
        <img
          src={eventsImg}
          alt="bread, cup, grapes, and wheat representing appointed times and biblical observance"
          className="events-hero__media"
          loading="eager"
        />

        <div className="events-hero__overlay" />

        <div className="events-hero__inner container">
          <span className="events-hero__eyebrow">
            Appointed Times • Enoch Calendar
          </span>

          <h1 className="events-hero__title">
            Understanding the Biblical New Year
          </h1>

          <p className="events-hero__subtitle">
            Scripture identifies the spring month of Abib as the beginning of
            months. The 364-day calendar described in Genesis, Enoch, and
            Jubilees preserves the Sabbath cycle and keeps the appointed times
            in their order.
          </p>

          <div className="events-hero__actions">
            <a className="theway-btn theway-btn-primary" href="#new-year-study">
              Read the Study
            </a>
            <a className="theway-btn theway-btn-ghost" href="#first-month-2026">
              View 2026 Dates
            </a>
          </div>
        </div>
      </section>

      <section id="new-year-study" className="events-section">
        <div className="container">
          <div className="events-section__header">
            <span className="events-section__label">Overview</span>
            <h2>Why the Biblical New Year matters</h2>
          </div>

          <div className="events-grid events-grid--overview">
            <article className="events-card">
              <h3>Description</h3>
              <p>
                In the modern world, the civil year begins on January 1
                according to the Gregorian calendar. However, Scripture teaches
                that the beginning of the year occurs in the spring month of
                Abib, as stated in Exodus 12:2:
              </p>

              <blockquote className="events-quote">
                <p>
                  “This month shall be unto you the beginning of months: it
                  shall be the first month of the year to you.”
                </p>
                <footer>Exodus 12:2</footer>
              </blockquote>

              <p>
                The ancient calendar described in Genesis, Enoch, and Jubilees
                uses a 364-day solar structure, divided into four equal
                quarters. This calendar preserves the weekly Sabbath cycle and
                ensures that the appointed times of Yahuah occur on consistent
                days.
              </p>

              <p className="events-highlight">
                According to this structure, the Biblical New Year for 2026
                begins on <strong>Wednesday, March 25, 2026</strong>.
              </p>
            </article>

            <article className="events-card">
              <h3>Why the Year Begins on Wednesday</h3>
              <p>
                Genesis records that the sun, moon, and stars were appointed on
                the fourth day of creation to regulate time:
              </p>

              <blockquote className="events-quote">
                <p>Genesis 1:14–19</p>
              </blockquote>

              <p>
                Because of this, the ancient priestly calendar begins the year
                on Day Four of the week, which is Wednesday.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="events-section events-section--alt">
        <div className="container">
          <div className="events-section__header">
            <span className="events-section__label">Calendar Structure</span>
            <h2>Structure of the 364-Day Calendar</h2>
          </div>

          <div className="events-grid events-grid--two">
            <article className="events-card">
              <h3>Yearly Quarter Structure</h3>

              <div className="events-table-wrap">
                <table className="events-table">
                  <thead>
                    <tr>
                      <th>Quarter</th>
                      <th>Months</th>
                      <th>Days</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quarterRows.map((row) => (
                      <tr key={row.quarter}>
                        <td>{row.quarter}</td>
                        <td>{row.months}</td>
                        <td>{row.days}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="events-total">
                <strong>Total:</strong> 364 days
              </p>
            </article>

            <article className="events-card">
              <h3>Key Benefits of This Structure</h3>
              <ul className="events-list">
                {benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="first-month-2026" className="events-section">
        <div className="container">
          <div className="events-section__header">
            <span className="events-section__label">Abib 2026</span>
            <h2>First Month of the Year</h2>
          </div>

          <article className="events-card">
            <div className="events-table-wrap">
              <table className="events-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Event</th>
                  </tr>
                </thead>
                <tbody>
                  {firstMonthRows.map((row) => (
                    <tr key={`${row.date}-${row.event}`}>
                      <td>{row.date}</td>
                      <td>{row.event}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </section>

      <section className="events-section events-section--alt">
        <div className="container">
          <div className="events-section__header">
            <span className="events-section__label">Importance</span>
            <h2>Why This Study Is Important</h2>
          </div>

          <div className="events-grid events-grid--two">
            <article className="events-card">
              <p>
                The Scriptures warn that improper calendar calculations can
                cause the appointed times of Yahuah to be observed incorrectly.
                For this reason, ancient writings such as Jubilees 6:23–32
                emphasize maintaining the 364-day order of the year.
              </p>
            </article>

            <article className="events-card">
              <h3>Restoring This Understanding Helps Believers</h3>
              <ul className="events-list">
                {importancePoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="events-cta">
        <div className="container">
          <div className="events-cta__card">
            <div>
              <span className="events-section__label">Next Steps</span>
              <h2>More appointed times can be added here next</h2>
              <p>
                This page can expand into a full events center with Sabbaths,
                Feasts, calendar studies, and future event announcements.
              </p>
            </div>

            <div className="events-cta__actions">
              <Link className="theway-btn theway-btn-primary" to="/contact">
                Contact Us
              </Link>
              <Link className="theway-btn theway-btn-ghost" to="/the-way">
                Back to The Way
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
