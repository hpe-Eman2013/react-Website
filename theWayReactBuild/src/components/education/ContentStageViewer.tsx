import React from "react";
import { Link } from "react-router-dom";
import type { EducationTopic } from "./types";

type ContentStageViewerProps = {
  topic: EducationTopic;
};

function getStatusLabel(status: EducationTopic["status"]): string {
  switch (status) {
    case "available":
      return "Available Now";
    case "in-development":
      return "In Development";
    case "members":
      return "Members Access";
    case "support-backed":
      return "Support-Backed";
    default:
      return status;
  }
}

export default function ContentStageViewer({ topic }: ContentStageViewerProps) {
  return (
    <section className="education-viewer" tabIndex={0}>
      <div className="education-viewer__layout">
        <div className="education-viewer__media">
          <img
            src={topic.image}
            alt={topic.imageAlt}
            className="education-viewer__img"
          />
        </div>

        <div className="education-viewer__body">
          <div className="education-viewer__header">
            <div>
              {topic.eyebrow ? (
                <div className="education-viewer__eyebrow">{topic.eyebrow}</div>
              ) : null}

              <h2 className="education-viewer__title">{topic.title}</h2>
            </div>

            <div className="education-viewer__meta">
              <span className="education-viewer__badge">
                {topic.accessLabel}
              </span>
              <span className="education-viewer__status">
                {getStatusLabel(topic.status)}
              </span>
            </div>
          </div>

          <p className="education-viewer__summary">{topic.summary}</p>

          {topic.featuredNote ? (
            <div className="education-viewer__callout education-viewer__callout--featured">
              <h3 className="education-viewer__callout-title">
                Featured Focus
              </h3>
              <p className="education-viewer__callout-text">
                {topic.featuredNote}
              </p>
            </div>
          ) : null}

          <div className="education-viewer__section">
            <h3 className="education-viewer__section-title">Why It Matters</h3>
            <p className="education-viewer__text">{topic.whyItMatters}</p>
          </div>

          {topic.mission ? (
            <div className="education-viewer__section">
              <h3 className="education-viewer__section-title">Mission Focus</h3>
              <p className="education-viewer__text">{topic.mission}</p>
            </div>
          ) : null}

          <div className="education-viewer__section">
            <h3 className="education-viewer__section-title">
              What You’ll Explore
            </h3>
            <ul className="education-viewer__highlights">
              {topic.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          {topic.supportNote ? (
            <div className="education-viewer__callout education-viewer__callout--support">
              <h3 className="education-viewer__callout-title">
                Support &amp; Access
              </h3>
              <p className="education-viewer__callout-text">
                {topic.supportNote}
              </p>
            </div>
          ) : null}

          <div className="education-viewer__actions">
            {topic.ctas.map((cta, index) => (
              <Link
                key={`${topic.key}-${cta.to}-${cta.label}`}
                to={cta.to}
                className={
                  index === 0
                    ? "theway-btn theway-btn-primary"
                    : "theway-btn theway-btn-ghost"
                }
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
