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
      aria-label="Education topic navigation"
    >
      <div className="education-stage-nav__list">
        {educationTopicOrder.map((key: EducationTopicKey) => {
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
            >
              {topic.title}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
