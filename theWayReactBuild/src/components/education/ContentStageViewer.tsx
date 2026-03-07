import React from "react";
import { Link } from "react-router-dom";
import type { EducationTopic } from "./types";

type ContentStageViewerProps = {
  topic: EducationTopic;
};

export default function ContentStageViewer({ topic }: ContentStageViewerProps) {
  const panelId = `education-panel-${topic.key}`;
  const tabId = `education-tab-${topic.key}`;

  return (
    <section
      id={panelId}
      className="education-viewer card shadow-sm"
      role="tabpanel"
      aria-labelledby={tabId}
      tabIndex={0}
    >
      <div className="card-body education-viewer__body">
        <div className="education-viewer__header">
          <div>
            {topic.eyebrow ? (
              <div className="education-viewer__eyebrow">{topic.eyebrow}</div>
            ) : null}

            <h2 className="education-viewer__title">{topic.title}</h2>
          </div>

          <span className="education-viewer__badge">{topic.accessLabel}</span>
        </div>

        <p className="education-viewer__summary">{topic.summary}</p>

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

        <div className="education-viewer__actions">
          {topic.ctas.map((cta) => (
            <Link
              key={`${topic.key}-${cta.to}-${cta.label}`}
              to={cta.to}
              className="theway-btn theway-btn-primary"
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
