import React from "react";

import AccessibleLink from "@/components/ui/AccessibleLink";

export interface ProgressRailItem {
  partNumber: number;
  title: string;
  durationLabel?: string;
  href: string;
  unlocked: boolean;
  completed: boolean;
  current: boolean;
}

interface ProgressRailProps {
  title?: string;
  description?: string;
  items: ProgressRailItem[];
}

const ProgressRail: React.FC<ProgressRailProps> = ({
  title = "Series Progress",
  description = "Pass each quiz with at least 70% to unlock the next lesson and enable notes access.",
  items,
}) => {
  return (
    <section className="progress-rail" aria-labelledby="progress-rail-title">
      <div className="scriptural-panel">
        <p className="eyebrow mb-2">Series Navigation</p>
        <h2 id="progress-rail-title" className="progress-rail__title">
          {title}
        </h2>
        <p className="progress-rail__description">{description}</p>

        <div className="progress-rail__list" role="list">
          {items.map((item) => {
            const stateLabel = item.completed
              ? "Completed"
              : item.current
                ? "Current lesson"
                : item.unlocked
                  ? "Unlocked"
                  : "Locked";

            return (
              <div key={item.partNumber} role="listitem">
                <AccessibleLink
                  to={item.href}
                  disabled={!item.unlocked}
                  className={[
                    "progress-rail__item",
                    item.current ? "is-current" : "",
                    item.completed ? "is-completed" : "",
                    !item.unlocked ? "is-locked" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <span className="progress-rail__badge" aria-hidden="true">
                    {item.completed
                      ? "✓"
                      : String(item.partNumber).padStart(2, "0")}
                  </span>

                  <span className="progress-rail__content">
                    <strong className="progress-rail__item-title">
                      {item.title}
                    </strong>

                    <span className="progress-rail__meta">
                      {item.durationLabel ? `${item.durationLabel} • ` : ""}
                      {stateLabel}
                    </span>
                  </span>
                </AccessibleLink>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgressRail;
