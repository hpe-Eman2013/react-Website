import React, { useEffect, useMemo, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import { getSeriesBundle } from "@/services/scripturalDiscussionApi";
import type {
  StudyPart,
  StudySeriesSummary,
} from "@/types/scriptural-discussions";

type SeriesBundleState = {
  summary: StudySeriesSummary;
  parts: StudyPart[];
} | null;

const AttackOnTheSeedLayout = () => {
  const [bundle, setBundle] = useState<SeriesBundleState>(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const result = await getSeriesBundle("attack-on-the-seed");

        if (!active) return;
        setBundle(result);
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

  const parts = useMemo(() => bundle?.parts ?? [], [bundle]);

  useEffect(() => {
    if (loading || !bundle) return;

    const basePath =
      "/the-way/scriptural-discussions/scriptural-studies/attack-on-the-seed";

    if (location.pathname === basePath) {
      navigate(`${basePath}/part-1`, { replace: true });
    }
  }, [bundle, loading, location.pathname, navigate]);

  const activePartNumber = useMemo(() => {
    const match = location.pathname.match(/part-(\d+)/);
    return match ? Number(match[1]) : 1;
  }, [location.pathname]);

  if (loading) {
    return (
      <section className="scriptural-discussions-page attack-seed-layout">
        <div className="container py-5">
          <p>Loading study series...</p>
        </div>
      </section>
    );
  }

  if (!bundle) {
    return (
      <section className="scriptural-discussions-page attack-seed-layout">
        <div className="container py-5">
          <h1>Series not found</h1>
          <p>The requested study series could not be located.</p>
          <Link to="/the-way/scriptural-discussions/scriptural-studies">
            Back to Scriptural Studies
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="scriptural-discussions-page attack-seed-layout">
      <header className="attack-seed-layout__hero">
        <div className="container">
          <div className="attack-seed-layout__hero-inner">
            <p className="eyebrow">Scriptural Studies</p>
            <h1>{bundle.summary.title}</h1>
            <p className="lead">{bundle.summary.subtitle}</p>
            <p className="attack-seed-layout__description">
              {bundle.summary.description}
            </p>

            <div
              className="attack-seed-layout__tags"
              aria-label="Series topics"
            >
              {bundle.summary.tags.map((tag) => (
                <span key={tag} className="attack-seed-layout__tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="container py-5">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/the-way/scriptural-discussions">
                Scriptural Discussions
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/the-way/scriptural-discussions/scriptural-studies">
                Scriptural Studies
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Attack on the Seed
            </li>
          </ol>
        </nav>

        <div className="attack-seed-layout__main">
          <aside
            className="attack-seed-layout__rail"
            aria-label="Series progression"
          >
            <div className="scriptural-panel">
              <p className="eyebrow mb-2">Series Progress</p>
              <h2 className="attack-seed-layout__rail-title">All 12 Parts</h2>
              <p className="attack-seed-layout__rail-copy">
                Pass each quiz with at least 70% to unlock the next lesson and
                enable notes access.
              </p>

              <div className="attack-seed-layout__part-list">
                {parts.map((part) => {
                  const isUnlocked = part.partNumber === 1;
                  const isActive = activePartNumber === part.partNumber;

                  return isUnlocked ? (
                    <Link
                      key={part.slug}
                      to={`/the-way/scriptural-discussions/scriptural-studies/attack-on-the-seed/part-${part.partNumber}`}
                      className={`attack-seed-layout__part-link${
                        isActive ? " is-active" : ""
                      }`}
                    >
                      <span className="attack-seed-layout__part-number">
                        {String(part.partNumber).padStart(2, "0")}
                      </span>
                      <span className="attack-seed-layout__part-text">
                        <strong>{part.title}</strong>
                        <small>{part.durationLabel}</small>
                      </span>
                    </Link>
                  ) : (
                    <div
                      key={part.slug}
                      className="attack-seed-layout__part-link is-locked"
                      aria-disabled="true"
                    >
                      <span className="attack-seed-layout__part-number">
                        {String(part.partNumber).padStart(2, "0")}
                      </span>
                      <span className="attack-seed-layout__part-text">
                        <strong>{part.title}</strong>
                        <small>Locked until prior quiz pass</small>
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="attack-seed-layout__rail-actions">
                <Link
                  className="btn btn-outline-secondary w-100"
                  to="/the-way/scriptural-discussions/overview"
                >
                  Back to Overview
                </Link>
              </div>
            </div>
          </aside>

          <main className="attack-seed-layout__content">
            <Outlet />
          </main>
        </div>
      </div>
    </section>
  );
};

export default AttackOnTheSeedLayout;
