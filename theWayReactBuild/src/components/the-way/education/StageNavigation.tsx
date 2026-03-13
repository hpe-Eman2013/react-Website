import React from "react";
import type { EducationTopicKey } from "./types";
import { educationTopicMap, educationTopicOrder } from "./registry";

type StageNavigationProps = {
  activeKey: EducationTopicKey;
  onSelect: (key: EducationTopicKey) => void;
};

export default function StageNavigation({
  activeKey,
  onSelect,
}: StageNavigationProps) {
  return (
    <nav
      className="education-stage-nav"
      aria-labelledby="education-stage-nav-title"
    >
      <div className="education-stage-nav__inner">
        <div className="education-stage-nav__header">
          <div>
            <div
              id="education-stage-nav-title"
              className="education-stage-nav__eyebrow"
            >
              Quick Topic Navigation
            </div>
            <p className="education-stage-nav__text">
              Move quickly between the major educational paths offered through
              The Way.
            </p>
          </div>
        </div>

        <div className="education-stage-nav__list">
          {educationTopicOrder.map((key: EducationTopicKey, index) => {
            const topic = educationTopicMap[key];
            const isActive = key === activeKey;

            return (
              <button
                key={key}
                type="button"
                className={`education-stage-btn${
                  isActive ? " education-stage-btn--active" : ""
                }`}
                onClick={() => onSelect(key)}
                aria-label={`Go to ${topic.title}`}
              >
                <span className="education-stage-btn__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="education-stage-btn__label">
                  {topic.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
