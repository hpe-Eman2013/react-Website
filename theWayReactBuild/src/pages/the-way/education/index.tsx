import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "@/assets/css/the-way/Education.css";

import heroImg from "@/assets/images/the-way/education/preview.jpg";

import ContentStageViewer from "@/components/education/ContentStageViewer";
import StageNavigation from "@/components/education/StageNavigation";
import TopicGrid from "@/components/education/TopicGrid";
import {
  defaultEducationTopicKey,
  educationTopicMap,
  educationTopics,
} from "@/components/education/registry";
import type { EducationTopicKey } from "@/components/education/types";

function isEducationTopicKey(value: string | null): value is EducationTopicKey {
  if (!value) return false;
  return value in educationTopicMap;
}

export default function Education() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialTopicParam = searchParams.get("topic");
  const initialKey = isEducationTopicKey(initialTopicParam)
    ? initialTopicParam
    : defaultEducationTopicKey;

  const [activeKey, setActiveKey] = useState<EducationTopicKey>(initialKey);

  const viewerRef = useRef<HTMLElement | null>(null);

  const activeTopic = useMemo(() => educationTopicMap[activeKey], [activeKey]);

  useEffect(() => {
    const topicParam = searchParams.get("topic");

    if (!isEducationTopicKey(topicParam)) {
      if (topicParam !== null) {
        setSearchParams(
          (prev) => {
            const next = new URLSearchParams(prev);
            next.delete("topic");
            return next;
          },
          { replace: true },
        );
      }
      return;
    }

    if (topicParam !== activeKey) {
      setActiveKey(topicParam);
    }
  }, [activeKey, searchParams, setSearchParams]);

  function handleSelectTopic(key: EducationTopicKey) {
    setActiveKey(key);

    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.set("topic", key);
        return next;
      },
      { replace: true },
    );

    window.requestAnimationFrame(() => {
      viewerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  return (
    <main className="container py-4 education-page">
      <section className="education-hero" aria-label="Education">
        <div className="education-hero__media">
          <img
            src={heroImg}
            alt=""
            className="education-hero__img"
            aria-hidden="true"
          />
          <div className="education-hero__overlay" />
          <div className="education-hero__content">
            <h1 className="education-hero__title">Education</h1>
            <p className="education-hero__subtitle">
              The Way of Messiah — 508(c)(1)(A) Religious Ministry
            </p>
          </div>
        </div>
      </section>

      <section
        className="card shadow-sm mb-4 education-intro"
        aria-label="Education mission"
      >
        <div className="card-body">
          <p className="mb-0">
            This educational work is designed to help move a believer from the
            condition of a <strong>legal subject</strong> into the
            responsibilities of a <strong>Kingdom Trustee</strong>. It seeks to
            bridge the spiritual requirements of Yahuah with the practical
            mechanics of stewardship, lawful order, scriptural understanding,
            and care for the living estate.
          </p>
        </div>
      </section>

      <section
        className="card shadow-sm mb-4 education-access"
        aria-labelledby="education-access-title"
      >
        <div className="card-body">
          <div className="education-head">
            <h2 id="education-access-title" className="h5 mb-1">
              How Access Works
            </h2>
            <div className="text-muted">
              Public preview, Website Membership, and support-backed learning
            </div>
          </div>

          <div className="education-access-grid">
            <article className="education-access-item">
              <h3 className="education-access-item__title">
                1. Learn the Purpose
              </h3>
              <p className="mb-0">
                Visitors can view general overviews of each study area and learn
                why these forms of knowledge matter.
              </p>
            </article>

            <article className="education-access-item">
              <h3 className="education-access-item__title">
                2. Become a Website Member
              </h3>
              <p className="mb-0">
                Website Membership provides access to participate more fully in
                the educational resources offered on this platform.
              </p>
            </article>

            <article className="education-access-item">
              <h3 className="education-access-item__title">
                3. Support the Work
              </h3>
              <p className="mb-0">
                Support helps maintain and update specialized materials so they
                remain relevant, useful, and responsibly developed.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="education-topics"
        className="mb-4"
        aria-labelledby="education-topics-title"
      >
        <div className="education-head">
          <h2 id="education-topics-title" className="h5 mb-1">
            Study Areas
          </h2>
          <div className="text-muted">
            Explore the educational paths available through The Way
          </div>
        </div>

        <TopicGrid
          topics={educationTopics}
          activeKey={activeKey}
          onSelect={handleSelectTopic}
        />
      </section>

      <section className="mb-4">
        <StageNavigation activeKey={activeKey} onSelect={handleSelectTopic} />
      </section>

      <section ref={viewerRef} className="mb-4">
        <ContentStageViewer topic={activeTopic} />
      </section>

      <section
        className="card shadow-sm education-cta"
        aria-labelledby="education-cta-title"
      >
        <div className="card-body">
          <h2 id="education-cta-title" className="h5 mb-2">
            Support the Work of Education
          </h2>
          <p className="mb-3">
            Your support helps maintain and expand educational materials in
            stewardship, trust, equity, scripture, and agricultural instruction
            so that the work remains current, useful, and available.
          </p>

          <div className="education-cta__actions">
            <Link
              to="/the-way/education/website-membership"
              className="theway-btn theway-btn-primary"
            >
              Become a Website Member
            </Link>
            <Link to="/contact" className="theway-btn theway-btn-ghost">
              Support the Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
