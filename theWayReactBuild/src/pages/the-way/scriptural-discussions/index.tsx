import React from "react";
import Scripture from "@/components/Scripture";
import { Link } from "react-router-dom";
import "@/assets/css/the-way/scriptural-discussions/ScripturalDiscussions.css";

const timelineSections = [
  {
    number: "01",
    title: "The Attack on Man: Dominion Lost",
    books: "Genesis 3",
    description:
      "The serpent’s deception results in the loss of delegated dominion. Humanity falls under hostile administration, and the legal struggle for authority over the earth begins.",
  },
  {
    number: "02",
    title: "The Attack on Adam and Hawwah",
    books: "Genesis, 1 Adam and Hawwah",
    description:
      "After the fall, the adversary immediately attempts to destroy the first parents through despair, deception, violence, counterfeit light, and interruption of repentance.",
  },
  {
    number: "03",
    title: "The Attack on the Holy Line",
    books: "Genesis 4–5",
    description:
      "The adversary shifts his assault to the righteous seed. The murder of Abel and the corruption of generations reveal the strategy to extinguish the covenant line.",
  },
  {
    number: "04",
    title: "The Corruption of All Mankind",
    books: "Genesis 6, Enoch, Jubilees",
    description:
      "Violence, mixture, rebellion, and corruption spread across the earth until nearly all flesh becomes defiled.",
  },
  {
    number: "05",
    title: "Yahuah Wipes the Earth of Rebellion",
    books: "Genesis 6–9",
    description:
      "The flood becomes divine judgment against universal corruption while preserving the righteous line through Noah.",
  },
  {
    number: "06",
    title: "The Children of Noah and the Holy Line",
    books: "Genesis 10–11",
    description:
      "After the flood, humanity spreads again across the earth. Nations rise, rebellion reappears, and the covenant line must once again be preserved.",
  },
  {
    number: "07",
    title: "Yahuah Chooses Abram",
    books: "Genesis 12–22; Jasher 7,9,11-12,13; Jubilees 11-12,17,19",
    description:
      "Abram is chosen as the vessel through whom the covenant line will continue and the promise to the nations will unfold.",
  },
  {
    number: "08",
    title: "The Holy Seed and the Exodus",
    books: "Genesis 25 – Exodus",
    description:
      "Through Yitschaq (Isaac), Ya'aqov (Jacob), and the tribes of Yashar'el (Israel), the covenant line becomes a nation delivered from bondage and established under divine law.",
  },
  {
    number: "09",
    title: "The Prophets, Judges, and Kings Protect the Seed",
    books: "Judges – Kings – Prophets",
    description:
      "Through cycles of rebellion and restoration, Yahuah preserves the covenant people and continually announces the coming righteous King.",
  },
  {
    number: "10",
    title: "The Revealing of the Elect One — The True Seed",
    books: "Gospels",
    description:
      "Yahusha appears as the promised seed of the woman and heir of the kingdom, confronting the adversary directly.",
  },
  {
    number: "11",
    title: "The War Against the Heirs of Earth’s Dominion",
    books: "Acts–Epistles",
    description:
      "The conflict continues through persecution, deception, and spiritual warfare against those who follow the Elect One.",
  },
  {
    number: "12",
    title: "The Final Restoration of Dominion",
    books:
      "Enoch 10, Jubilees 10, Isaiah 14, Daniel, Ezekiel 28, Revelation 20",
    description:
      "The serpent’s rule is destroyed, the faithful inherit with the Elect One, and the dominion lost in Eden is restored.",
  },
];

const ancientWitnesses = [
  {
    title: "1 Adam and Hawwah",
    description:
      "Expands the earliest warfare after Eden, showing the serpent’s attacks against the first parents through despair, violence, false light, and interrupted worship.",
  },
  {
    title: "2 Adam and Hawwah",
    description:
      "Continues the conflict into the next generations, tracing corruption, mixture, counterfeit authority, and attacks against the righteous line.",
  },
  {
    title: "Enoch",
    description:
      "Provides additional witness concerning rebellion in the heavenly realm, corruption before the flood, and the coming judgment of the wicked.",
  },
  {
    title: "Jubilees",
    description:
      "Preserves structured testimony concerning early sacred history, covenant continuity, appointed times, and the ordering of generations.",
  },
  {
    title: "Jasher and Related Records",
    description:
      "Adds historical texture and supporting context to events, lineages, conflicts, and the preservation of the righteous.",
  },
];

const studyApproach = [
  {
    number: "01",
    title: "Scripture Interprets Scripture",
    description:
      "Passages are compared across the Law, Prophets, Writings, Gospel accounts, Apostolic writings, and supporting ancient witnesses.",
  },
  {
    number: "02",
    title: "The Narrative Thread Is Preserved",
    description:
      "Each book is studied in relation to the conflict first declared in Eden, rather than as an isolated or disconnected text.",
  },
  {
    number: "03",
    title: "Context Matters",
    description:
      "Historical, covenantal, legal, and prophetic settings are taken seriously so the text is not forced into shallow readings.",
  },
  {
    number: "04",
    title: "Every Teaching Is Tested",
    description:
      "Claims, traditions, and interpretations are weighed carefully so that error, mixture, and counterfeit light are exposed.",
  },
  {
    number: "05",
    title: "Study Is Joined to Reverence",
    description:
      "These discussions are not merely informational. They are intended to cultivate discernment, obedience, worship, and hope.",
  },
];

export default function ScripturalDiscussionsOverview() {
  return (
    <>
      <section className="scriptural-section scriptural-section--intro">
        <div className="scriptural-shell scriptural-shell--narrow">
          <div className="scriptural-section__heading">
            <p className="scriptural-kicker">The First Promise in Eden</p>
            <h2>The conflict begins in the garden</h2>
          </div>

          <div className="scriptural-prophecy">
            <Scripture
              reference="Genesis 3:15"
              verse="And I shall put enmity between you and the woman, and between your seed and her seed; He shall bruise your head, and you shall bruise his heel."
              version="Bayithamashiyach Paleo Hebrew Version"
            />

            <p>
              What begins in the garden is not merely the story of human
              failure. It is the unveiling of a conflict that stretches across
              generations, kingdoms, covenants, and witnesses. In the midst of
              judgment, Yahuah declares enmity between the serpent and the
              woman, between opposing seeds, and establishes the hope that the
              adversary will not reign forever.
            </p>
            <p>
              From that moment forward, Scripture records the loss of dominion,
              the war against the righteous line, the preservation of covenant
              heirs, and the final restoration brought about through the Elect
              One.
            </p>
          </div>
        </div>
      </section>

      <section className="scriptural-section scriptural-section--alt">
        <div className="scriptural-shell scriptural-shell--split">
          <div className="scriptural-panel">
            <p className="scriptural-kicker">Mercy Embedded in Judgment</p>
            <h2>Even the fall contains the promise of restoration</h2>
            <p>
              The expulsion from Eden is severe, but it is not abandonment.
              Scripture reveals judgment, loss, exposure, sorrow, and death, yet
              also guarded mercy, divine covering, delayed execution, and a
              promise that the serpent would not have the final word.
            </p>
            <p>
              The story of Scripture therefore moves not only from innocence to
              ruin, but from ruin to promise, from promise to preservation, and
              from preservation to restoration.
            </p>
          </div>

          <div className="scriptural-panel">
            <p className="scriptural-kicker">Why these studies matter</p>
            <h2>A unified reading of Scripture</h2>
            <p>
              These discussions are designed to help readers see the unity of
              the biblical record and the ancient witnesses. Rather than
              approaching each book as an isolated lesson, this pathway traces
              the same conflict from Genesis to Revelation and through the
              apocryphal materials that illuminate the struggle.
            </p>
          </div>
        </div>
      </section>

      <section id="timeline" className="scriptural-section">
        <div className="scriptural-shell">
          <div className="scriptural-section__heading">
            <p className="scriptural-kicker">The Storyline of Scripture</p>
            <h2>The war of the two seeds across twelve movements</h2>
            <p>
              This pathway follows the central thread running through Scripture:
              the fall, the conflict, the preservation of the righteous line,
              the appearing of the Elect One, and the final restoration of
              dominion.
            </p>
          </div>

          <div className="scriptural-timeline">
            {timelineSections.map((item) => (
              <article key={item.number} className="scriptural-card">
                <div className="scriptural-card__top">
                  <span className="scriptural-card__number">{item.number}</span>
                  <span className="scriptural-card__books">{item.books}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scriptural-section scriptural-section--alt">
        <div className="scriptural-shell">
          <div className="scriptural-section__heading">
            <p className="scriptural-kicker">Ancient Witnesses</p>
            <h2>Supporting records that illuminate the conflict</h2>
            <p>
              Alongside the traditional canon, ancient writings preserve
              additional testimony concerning early corruption, attacks upon the
              righteous, heavenly rebellion, sacred memory, and the preservation
              of the seed.
            </p>
          </div>

          <div className="scriptural-witness-grid">
            {ancientWitnesses.map((item) => (
              <article key={item.title} className="scriptural-witness">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scriptural-section">
        <div className="scriptural-shell">
          <div className="scriptural-section__heading">
            <p className="scriptural-kicker">
              How These Studies Are Approached
            </p>
            <h2>A careful and reverent method of study</h2>
          </div>

          <div className="scriptural-approach-grid">
            {studyApproach.map((item) => (
              <article key={item.number} className="scriptural-approach-card">
                <span className="scriptural-approach-card__number">
                  {item.number}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="begin-journey"
        className="scriptural-section scriptural-section--cta"
      >
        <div className="scriptural-shell scriptural-shell--narrow">
          <div className="scriptural-cta">
            <p className="scriptural-kicker">Begin with Genesis</p>
            <h2>Start at the beginning of the conflict</h2>
            <p>
              The journey begins with the fall, the first promise, and the rise
              of enmity in Eden. From there, each study builds upon the last,
              tracing the conflict through the righteous line, the covenant
              people, the appearing of the Elect One, and the final judgment of
              the serpent.
            </p>

            <div className="scriptural-cta__actions">
              <Link
                className="theway-btn theway-btn-primary"
                to="/the-way/scriptural-discussions/scriptural-studies"
              >
                View Scriptural Studies
              </Link>
              <Link
                className="theway-btn theway-btn-ghost"
                to="/the-way/scriptural-discussions/lectures-sermons"
              >
                View Lectures &amp; Sermons
              </Link>
              <Link className="theway-btn theway-btn-secondary" to="/events">
                View Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
