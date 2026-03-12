import React from "react";
import { Link } from "react-router-dom";
import "@/assets/css/the-way/ScripturalDiscussions.css";

const timelineSections = [
  {
    number: "01",
    title: "The Fall and the Loss of Dominion",
    books: "Genesis 3",
    description:
      "The garden becomes the place of legal collapse, breached stewardship, and the rise of hostile administration. What was entrusted to man under obedience is forfeited through disobedience.",
  },
  {
    number: "02",
    title: "The Seed Clause and the Two Lines",
    books: "Genesis 3:15",
    description:
      "In the midst of judgment, Yahuah declares enmity between the serpent and the woman, between two seeds, and introduces the promise of final victory.",
  },
  {
    number: "03",
    title: "Attacks on Adam and Hawwah",
    books: "Genesis, 1 Adam and Hawwah",
    description:
      "The serpent wages immediate war against the first parents through fear, despair, deception, violence, counterfeit light, and interruption of repentance and worship.",
  },
  {
    number: "04",
    title: "Cain, Abel, and the First Bloodshed",
    books: "Genesis 4",
    description:
      "When the parents are not destroyed, the adversary turns toward their children. The murder of Abel becomes the first open strike against the righteous seed.",
  },
  {
    number: "05",
    title: "The Holy Line and the Threat of Mixture",
    books: "Genesis, 2 Adam and Hawwah",
    description:
      "The line of Seth is preserved, warned, and separated, yet gradually pressured by fascination, compromise, counterfeit authority, and unlawful mixture.",
  },
  {
    number: "06",
    title: "Corruption Before the Flood",
    books: "Genesis 6, Enoch, Jubilees",
    description:
      "Violence, corruption, rebellion, and defilement spread across the earth until judgment comes upon a world that has turned aside from divine order.",
  },
  {
    number: "07",
    title: "Preservation Through Noah and the Patriarchs",
    books: "Genesis 6–50",
    description:
      "Though the world is judged, the promise is not lost. Through Noah, Abraham, Isaac, and Jacob, the line of promise is preserved by covenant mercy.",
  },
  {
    number: "08",
    title: "The Covenant Nation and the Battle for Worship",
    books: "Exodus–Kings",
    description:
      "Israel is formed into a covenant people, called to holiness, worship, inheritance, and obedience, while constantly opposed by idolatry, rebellion, and corruption.",
  },
  {
    number: "09",
    title: "The Promise of the Coming Heir",
    books: "Prophets, Psalms",
    description:
      "The prophets announce the righteous Branch, the Servant, the King, and the One through whom restoration, judgment, and the kingdom will come.",
  },
  {
    number: "10",
    title: "The Elect One Revealed",
    books: "Gospels",
    description:
      "Yahusha appears as the lawful Heir, the obedient Son, and the promised Seed who succeeds where Adam failed and confronts the adversary face to face.",
  },
  {
    number: "11",
    title: "The War Against the Saints",
    books: "Acts–Epistles",
    description:
      "The same conflict continues against the assembly through persecution, false teaching, counterfeit messengers, pressure to compromise, and attacks on faithful obedience.",
  },
  {
    number: "12",
    title: "The Final Restoration of Dominion",
    books: "Revelation",
    description:
      "The serpent’s administration is terminated, the faithful inherit with the Elect One, and the restoration promised from the beginning is brought to completion.",
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

export default function ScripturalDiscussionsPage() {
  return (
    <main className="scriptural-page">
      <section className="scriptural-hero">
        <div className="scriptural-hero__overlay" />
        <div className="scriptural-hero__inner">
          <p className="scriptural-eyebrow">The Way of Messiah</p>
          <h1 className="scriptural-hero__title">Scriptural Discussions</h1>
          <p className="scriptural-hero__subtitle">
            From the fall in Eden to the final judgment of the serpent, the
            Scriptures record the conflict between two seeds, the loss of
            dominion, the preservation of the righteous line, and the lawful
            restoration of all things through the Elect One.
          </p>

          <div className="scriptural-hero__actions">
            <a className="theway-btn theway-btn-primary" href="#begin-journey">
              Begin the Journey
            </a>
            <a className="theway-btn theway-btn-ghost" href="#timeline">
              Explore the Path
            </a>
            <Link className="theway-btn theway-btn-secondary" to="/the-way">
              Back to The Way
            </Link>
          </div>
        </div>
      </section>

      <section className="scriptural-section scriptural-section--intro">
        <div className="scriptural-shell scriptural-shell--narrow">
          <div className="scriptural-section__heading">
            <p className="scriptural-kicker">The First Promise in Eden</p>
            <h2>The conflict begins in the garden</h2>
          </div>

          <div className="scriptural-prophecy">
            <div className="scriptural-prophecy__verse">Genesis 3:15</div>
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
                to="/the-way/scriptural-discussions/genesis"
              >
                Start with Genesis
              </Link>
              <Link
                className="theway-btn theway-btn-ghost"
                to="/the-way/scriptural-discussions/studies"
              >
                View All Studies
              </Link>
              <Link className="theway-btn theway-btn-secondary" to="/events">
                View Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
