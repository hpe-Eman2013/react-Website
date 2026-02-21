import React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import TestimonyCard from "../components/TestimonyCard";
import {
  fetchApprovedTestimonies,
  fetchVoteMap,
} from "../services/testimonyService";

const Testimonies = () => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");
  const [votesById, setVotesById] = useState({}); // { [id]: "like" | "dislike" }

  const [searchParams, setSearchParams] = useSearchParams();
  const submitted = searchParams.get("submitted") === "1";

  // For accessibility: move focus to the banner when arriving here after submit
  const submittedBannerRef = useRef(null);

  useEffect(() => {
    if (submitted) {
      // Focus the banner so screen readers + keyboard users land on confirmation.
      submittedBannerRef.current?.focus?.();
    }
  }, [submitted]);

  useEffect(() => {
    const load = async () => {
      try {
        setStatus("loading");
        setError("");

        const [testimoniesData, votesData] = await Promise.all([
          fetchApprovedTestimonies(),
          fetchVoteMap().catch(() => ({ ok: true, votes: {} })),
        ]);
        const v = votesData?.votes ? votesData : votesData?.data;

        setItems(Array.isArray(testimoniesData) ? testimoniesData : []);
        setVotesById(v?.votes || {});
        setStatus("success");
      } catch (e) {
        setStatus("error");
        setError(e?.message || "Failed to load testimonies.");
      }
    };

    load();
  }, []);

  const apiBase = useMemo(() => import.meta.env.VITE_API_BASE_URL, []);

  function dismissSubmittedBanner() {
    // Remove the query param without reloading
    const next = new URLSearchParams(searchParams);
    next.delete("submitted");
    setSearchParams(next, { replace: true });
  }
  function onVoteUpdated(id, vote) {
    setVotesById((prev) => ({ ...prev, [id]: vote }));
  }

  return (
    <main className="container py-4" id="main-content">
      <h1 className="mb-3">Testimonies</h1>

      {/* Submitted banner (shows after redirect from /submit) */}
      {submitted && (
        <div
          className="alert alert-success d-flex justify-content-between align-items-start gap-3"
          role="status"
          aria-live="polite"
          tabIndex={-1}
          ref={submittedBannerRef}
        >
          <div>
            <div className="fw-bold">Thank you for sharing.</div>
            <div className="small">
              Your testimony was submitted and will appear here after admin
              approval.
            </div>
          </div>

          <button
            type="button"
            className="btn btn-sm btn-outline-success"
            onClick={dismissSubmittedBanner}
            aria-label="Dismiss submission confirmation"
          >
            Dismiss
          </button>
        </div>
      )}

      {status === "loading" && (
        <div className="alert alert-info" role="status" aria-live="polite">
          Loading…
        </div>
      )}

      {status === "error" && (
        <div className="alert alert-danger" role="alert">
          <div className="fw-bold">Could not load testimonies</div>
          <div className="small">{error}</div>

          <div className="small mt-2">
            This is expected until the Node/Express API is running at{" "}
            <code>{apiBase}</code>.
          </div>
        </div>
      )}

      {status === "success" && items.length === 0 && (
        <div className="alert alert-secondary" role="status" aria-live="polite">
          No testimonies yet.
        </div>
      )}

      {/* Cards */}
      <div className="d-grid gap-3" aria-busy={status === "loading"}>
        {items.map((t) => {
          const tid = t._id || t.id;
          return (
            <TestimonyCard
              key={tid}
              testimony={t}
              userVote={tid ? votesById[tid] || null : null}
              onVoteUpdated={onVoteUpdated}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Testimonies;
