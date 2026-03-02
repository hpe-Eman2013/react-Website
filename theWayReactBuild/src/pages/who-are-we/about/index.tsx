import React from "react";
import "@/assets/css/who-are-we/About.css";

import heroImg from "@/assets/images/who-are-we/about/preview.jpg";

export default function AboutPage() {
  return (
    <main className="container py-4 about-page">
      {/* HERO */}
      <section className="about-hero" aria-label="About">
        <div className="about-hero__media">
          <img
            src={heroImg}
            alt=""
            className="about-hero__img"
            aria-hidden="true"
            loading="eager"
          />
          <div className="about-hero__overlay" />
        </div>

        <div className="about-hero__content">
          <h1 className="about-hero__title">About</h1>
          <p className="about-hero__subtitle">
            The Way of Messiah — 508(c)(1)(A) Religious Ministry
          </p>
        </div>
      </section>

      {/* BODY */}
      <div className="card shadow-sm">
        <div className="card-body">
          {/* PURPOSE */}
          <section className="about-section" aria-labelledby="about-purpose">
            <h2 id="about-purpose" className="h5 mb-3">
              Purpose
            </h2>

            <p className="mb-3">
              To provide a website where people can gain an understanding of who
              Yashar&apos;El is today, and assemble them in worship of the only
              true Elohim, Yahuah.
            </p>
          </section>

          {/* WHY THIS MINISTRY EXISTS (NARRATIVE) */}
          <section className="about-section" aria-labelledby="about-why">
            <h2 id="about-why" className="h5 mb-3">
              Why this ministry exists
            </h2>

            <p className="mb-3">
              Christianity has done a masterful job of misleading people to
              worship the Messiah they call &quot;Christ&quot; and the Son of
              Elohim, which they call &quot;Jesus&quot;, according to the way
              that the translators of Scripture, who were influenced by Greek
              philosophy and tradition, choose to render the text.
            </p>

            <p className="mb-2">
              We seek to correct this misunderstanding by accurately explaining
              the identity and roles of:
            </p>

            <ul className="mb-3">
              <li>The Father called The Elohim</li>
              <li>The Son of Elohim</li>
              <li>The 12 sons of Ya&apos;aqov (called Jacob)</li>
            </ul>

            <p className="mb-0">
              Once an accurate understanding of these three entities occurs, the
              scriptures will open to you and illuminate your mind by removing
              the veil that Satan placed over the minds of those perishing (2
              Corinthians 4:3-4).
            </p>
          </section>

          {/* THE GOOD NEWS (WARMLY WORDED SECTION) */}
          <section className="about-section" aria-labelledby="about-goodnews">
            <h2 id="about-goodnews" className="h5 mb-3">
              The Good News of the Kingdom
            </h2>

            <p className="mb-0">
              Spreading the truth of The Father, His Son and His people is known
              as the Gospel or Good News of the Kingdom, for in the Kingdom will
              be the reign of the Messiah, the Son of Elohim, the co-heirs
              (those adopted into the family of Elohim by the gift of the Ruach
              Ha&apos;Qodesh (Holy Spirit)), and by the power and authority of
              Yahuah Elohim for a thousand years. It is your duty to share this
              Good News with those you encounter, whether in your families or
              among strangers.
            </p>
          </section>

          {/* COMMUNITY FORMATION */}
          <section className="about-section" aria-labelledby="about-community">
            <h2 id="about-community" className="h5 mb-3">
              Building local community
            </h2>

            <p className="mb-0">
              When we grow in numbers in our local communities, we will request
              members of the Assembly to open their homes for fellowship,
              spiritual direction, education, leadership appointments and
              Assembly organization. This humble and selfless opportunity is a
              way for a member to volunteer their time and resources in
              promotion of the Gospel and ministering to the Qodeshym (set apart
              ones).
            </p>
          </section>

          {/* ULTIMATE AIM (CLOSE) */}
          <section className="about-section" aria-labelledby="about-aim">
            <h2 id="about-aim" className="h5 mb-3">
              Our hope for every member
            </h2>

            <p className="mb-0">
              The ultimate purpose of this ministry will be fulfilled when all
              members are fully prepared to meet their Messiah, Yahusha, by
              living a life that is pure, without spot or wrinkle (Ephesians
              5:27), busy doing the works of Elohim and doing good works (Titus
              2:7) towards their neighbors, showing them how to do the same. May
              the shalom of Elohim be with you and your family as you embark on
              this journey with us!
            </p>
          </section>

          <hr className="my-4" />

          {/* SHORT MISSION + WHAT YOU'LL FIND (SCANNABLE CARDS) */}
          <section className="about-section" aria-labelledby="about-mission">
            <h2 id="about-mission" className="h5 mb-2">
              Our mission
            </h2>
            <p className="mb-0">
              To proclaim the Gospel of the Messiah, strengthen believers, and
              provide resources that help families grow in truth and purpose.
            </p>
          </section>

          <section className="about-section" aria-labelledby="about-find">
            <h2 id="about-find" className="h5 mt-4">
              What you&apos;ll find here
            </h2>

            <ul className="mb-0 about-list">
              <li>Testimonies that encourage faith</li>
              <li>Teachings and studies</li>
              <li>Events and gatherings</li>
              <li>Resources to support your walk</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
