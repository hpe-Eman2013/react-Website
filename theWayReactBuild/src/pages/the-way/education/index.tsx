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
    <main className="container education-page">
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
        className="education-intro mb-4"
        aria-labelledby="education-intro-title"
      >
        <div className="education-intro__body">
          <div className="education-intro__eyebrow" id="education-intro-title">
            Education Mission
          </div>

          <p className="education-intro__lead mb-0">
            This educational work is designed to help move a believer from the
            condition of a{" "}
            <strong>
              <u>legal subject</u>
            </strong>{" "}
            into the responsibilities of a{" "}
            <strong>
              <u>Kingdom Trustee</u>
            </strong>
            . It seeks to bridge the spiritual requirements of Yahuah with the
            practical mechanics of stewardship, lawful order, scriptural
            understanding, and care for the living estate.
          </p>
        </div>
      </section>

      <section
        className="education-access mb-4"
        aria-labelledby="education-access-title"
      >
        <div className="education-access__body">
          <div className="education-head">
            <h2 id="education-access-title" className="education-section-title">
              How Access Works
            </h2>
            <div className="education-head__sub">
              Public preview, Website Membership, and support-backed learning
            </div>
          </div>

          <div className="education-access-grid">
            <button
              type="button"
              className="education-access-item education-access-item--link"
              onClick={() => {
                document.getElementById("education-topics")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              <span className="education-access-item__step">01</span>
              <h3 className="education-access-item__title">
                Learn the Purpose
              </h3>
              <p className="mb-0">
                Visitors can view general overviews of each study area and learn
                why these forms of knowledge matter.
              </p>
              <span className="education-access-item__cta">
                Explore Study Areas
              </span>
            </button>

            <Link
              to="/the-way/education/website-membership"
              className="education-access-item education-access-item--link"
            >
              <span className="education-access-item__step">02</span>
              <h3 className="education-access-item__title">
                Become a Website Member
              </h3>
              <p className="mb-0">
                Website Membership provides access to participate more fully in
                the educational resources offered on this platform.
              </p>
              <span className="education-access-item__cta">
                Learn About Membership
              </span>
            </Link>

            <Link
              to="/contact"
              className="education-access-item education-access-item--link"
            >
              <span className="education-access-item__step">03</span>
              <h3 className="education-access-item__title">Support the Work</h3>
              <p className="mb-0">
                Support helps maintain and update specialized materials so they
                remain relevant, useful, and responsibly developed.
              </p>
              <span className="education-access-item__cta">
                Support Education
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="education-topics"
        className="mb-4"
        aria-labelledby="education-topics-title"
      >
        <div className="education-head">
          <h2 id="education-topics-title" className="education-section-title">
            Study Areas
          </h2>
          <div className="education-head__sub">
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

      <section className="education-cta" aria-labelledby="education-cta-title">
        <div className="education-cta__body">
          <h2 id="education-cta-title" className="education-section-title">
            Support the Work of Education
          </h2>
          <p className="education-cta__text">
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
