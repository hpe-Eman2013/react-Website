import React from "react";
import type { EducationTopic, EducationTopicKey } from "./types";

type TopicGridProps = {
  topics: EducationTopic[];
  activeKey: EducationTopicKey;
  onSelect: (key: EducationTopicKey) => void;
};

export default function TopicGrid({
  topics,
  activeKey,
  onSelect,
}: TopicGridProps) {
  return (
    <section
      className="education-topic-grid"
      aria-label="Education study areas"
    >
      {topics.map((topic) => {
        const isActive = topic.key === activeKey;

        return (
          <article
            key={topic.key}
            className={`education-topic-card${
              isActive ? " education-topic-card--active" : ""
            }`}
          >
            <button
              type="button"
              className="education-topic-card__button"
              onClick={() => onSelect(topic.key)}
              aria-current={isActive ? "true" : undefined}
            >
              <div className="education-topic-card__top">
                {topic.eyebrow ? (
                  <div className="education-topic-card__eyebrow">
                    {topic.eyebrow}
                  </div>
                ) : null}

                <span className="education-topic-card__badge">
                  {topic.accessLabel}
                </span>
              </div>

              <h2 className="education-topic-card__title">{topic.title}</h2>

              <p className="education-topic-card__summary">{topic.summary}</p>

              <div className="education-topic-card__footer">
                <span className="education-topic-card__link">
                  {isActive ? "Currently Selected" : "View Overview"}
                </span>
              </div>
            </button>
          </article>
        );
      })}
    </section>
  );
}
