import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  getPartNotesMeta,
  getPartProgress,
} from "@/services/scripturalDiscussionApi";
import type {
  StudyNotesMeta,
  StudyPartProgress,
} from "@/types/scriptural-discussions";

const AttackOnTheSeedPart1NotesPage = () => {
  const [notesMeta, setNotesMeta] = useState<StudyNotesMeta | null>(null);
  const [progress, setProgress] = useState<StudyPartProgress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const [notesResult, progressResult] = await Promise.all([
          getPartNotesMeta("attack-on-the-seed", 1),
          getPartProgress("attack-on-the-seed", 1),
        ]);

        if (!active) return;

        setNotesMeta(notesResult);
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
      <section className="attack-seed-notes">
        <div className="scriptural-panel">
          <p>Loading notes access...</p>
        </div>
      </section>
    );
  }

  if (!notesMeta) {
    return (
      <section className="attack-seed-notes">
        <div className="scriptural-panel">
          <h2>Notes unavailable</h2>
          <p>The notes metadata for this lesson could not be loaded.</p>

          <div className="d-flex flex-wrap gap-3 mt-3">
            <Link
              className="btn btn-outline-secondary"
              to="/the-way/scriptural-discussions/scriptural-studies/attack-on-the-seed/part-1"
            >
              Back to Part 1
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const canDownload = Boolean(progress?.notesDownloadEnabled);

  return (
    <section className="attack-seed-notes">
      <article className="scriptural-panel">
        <p className="eyebrow">Part 1 Notes</p>
        <h2>{notesMeta.title}</h2>
        <p>{notesMeta.description}</p>

        <div className="attack-seed-notes__status mt-4">
          <strong>Status:</strong>{" "}
          {canDownload ? "Unlocked" : "Locked until quiz passage"}
        </div>

        {!canDownload ? (
          <div className="mt-4">
            <p>
              To download these notes, complete the Part 1 quiz and score at
              least 70%.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-3">
              <Link
                className="btn btn-primary"
                to="/the-way/scriptural-discussions/scriptural-studies/attack-on-the-seed/part-1/quiz"
              >
                Take Quiz
              </Link>

              <Link
                className="btn btn-outline-secondary"
                to="/the-way/scriptural-discussions/scriptural-studies/attack-on-the-seed/part-1"
              >
                Back to Lesson
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-4">
            <p>
              Your notes are ready. In the next pass, this button can trigger
              the actual PDF download.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-3">
              <button type="button" className="btn btn-primary">
                Download Notes PDF
              </button>

              <Link
                className="btn btn-outline-secondary"
                to="/the-way/scriptural-discussions/scriptural-studies/attack-on-the-seed/part-2"
              >
                Continue to Part 2
              </Link>
            </div>
          </div>
        )}
      </article>
    </section>
  );
};

export default AttackOnTheSeedPart1NotesPage;
