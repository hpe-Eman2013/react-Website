import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getPart, getPartProgress } from "@/services/scripturalDiscussionApi";
import type {
  StudyPart,
  StudyPartProgress,
} from "@/types/scriptural-discussions";

const AttackOnTheSeedPart1Page = () => {
  const [part, setPart] = useState<StudyPart | null>(null);
  const [progress, setProgress] = useState<StudyPartProgress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const [partResult, progressResult] = await Promise.all([
          getPart("attack-on-the-seed", 1),
          getPartProgress("attack-on-the-seed", 1),
        ]);

        if (!active) return;

        setPart(partResult);
        setProgress(progressResult);
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    void load();

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="scriptural-panel">
        <p>Loading lesson...</p>
      </div>
    );
  }

  if (!part) {
    return (
      <div className="scriptural-panel">
        <h2>Part not found</h2>
        <p>The requested lesson could not be loaded.</p>
      </div>
    );
  }

  return (
    <section className="attack-seed-part">
      <header className="attack-seed-part__header scriptural-panel">
        <p className="eyebrow">Part {part.partNumber}</p>
        <h2>{part.title}</h2>
        <p className="lead mb-3">{part.summary}</p>

        <div className="attack-seed-part__meta">
          <span>{part.durationLabel}</span>
          <span>•</span>
          <span>{progress?.unlocked ? "Unlocked" : "Locked"}</span>
          <span>•</span>
          <span>Quiz required for progression</span>
        </div>
      </header>

      <section className="attack-seed-part__intro scriptural-panel">
        <p className="eyebrow">AI Introduction</p>
        <h3>The Lesson Opening</h3>
        <p>
          In this first part, the lesson establishes the original declaration of
          enmity and frames the entire study through the conflict between two
          seed lines.
        </p>
        <p>
          This intro belongs to the child lesson, not the parent shell, because
          each part will carry its own emphasis, tone, and opening explanation
          while inheriting the series framework above it.
        </p>
      </section>

      <section className="attack-seed-part__segments">
        <div className="d-grid gap-4">
          {part.segments.map((segment, index) => (
            <article key={segment.id} className="scriptural-panel">
              <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-3">
                <div>
                  <p className="eyebrow mb-1">Segment {index + 1}</p>
                  <h3 className="mb-0">{segment.heading}</h3>
                </div>

                {segment.speaker ? (
                  <span className="badge text-bg-secondary">
                    {segment.speaker}
                  </span>
                ) : null}
              </div>

              {segment.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {segment.scripture ? (
                <blockquote className="study-scripture-callout mt-3 mb-0">
                  <p className="mb-2">“{segment.scripture.text}”</p>
                  <footer>{segment.scripture.reference}</footer>
                </blockquote>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="attack-seed-part__actions scriptural-panel">
        <p className="eyebrow">Next Step</p>
        <h3>Complete the Part 1 Workflow</h3>
        <p>
          Pass the quiz with at least 70% to unlock the next part and enable the
          notes download for this lesson.
        </p>

        <div className="d-flex flex-wrap gap-3 mt-4">
          <Link
            className="btn btn-primary"
            to="/the-way/scriptural-discussions/scriptural-studies/attack-on-the-seed/part-1/quiz"
          >
            Take Quiz
          </Link>

          <Link
            className="btn btn-outline-secondary"
            to="/the-way/scriptural-discussions/scriptural-studies/attack-on-the-seed/part-1/notes"
          >
            View Notes Access
          </Link>
        </div>
      </section>
    </section>
  );
};

export default AttackOnTheSeedPart1Page;
