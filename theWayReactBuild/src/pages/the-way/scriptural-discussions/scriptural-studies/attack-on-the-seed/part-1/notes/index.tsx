import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AccessNotice from "@/components/the-way/scriptural-discussions/AccessNotice";
import { getPartNotesMeta } from "@/services/scripturalDiscussionApi";
import { useStudyProgress } from "@/hooks/useStudyProgress";
import type { StudyNotesMeta } from "@/types/scriptural-discussions";

const AttackOnTheSeedPart1NotesPage = () => {
  const [notesMeta, setNotesMeta] = useState<StudyNotesMeta | null>(null);
  const [loading, setLoading] = useState(true);

  const { getPartProgress } = useStudyProgress({
    seriesSlug: "attack-on-the-seed",
    totalParts: 12,
  });

  const progress = getPartProgress(1);
  const canDownload = Boolean(progress.notesDownloadEnabled);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const notesResult = await getPartNotesMeta("attack-on-the-seed", 1);

        if (!active) return;

        setNotesMeta(notesResult);
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
          <h2>Part 1 Study Notes</h2>
          <p>Downloadable notes and scripture references for this lesson.</p>

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
            <AccessNotice
              title="Notes Locked"
              message="Pass the Part 1 quiz with at least 70% to unlock the downloadable study notes."
            >
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
            </AccessNotice>
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
