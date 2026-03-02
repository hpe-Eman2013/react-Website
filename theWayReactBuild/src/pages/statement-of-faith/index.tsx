import React, { useId } from "react";
import "@/assets/css/who-are-we/StatementOfFaith.css";

type ScriptureProps = {
  reference: string;
  verse: string;
  version: string;
};

function Scripture({ reference, verse, version }: ScriptureProps) {
  const tipId = useId();

  return (
    <span className="scripture">
      <button type="button" className="scripture-ref" aria-describedby={tipId}>
        {reference}
      </button>

      <span id={tipId} role="tooltip" className="scripture-tooltip">
        <strong>{reference}</strong>
        <span className="scripture-tooltip-verse">{verse}</span>
        <span className="scripture-tooltip-version">— {version}</span>
      </span>
    </span>
  );
}

import heroImg from "@/assets/images/who-are-we/statement-of-faith/preview.jpg";

export default function StatementOfFaith() {
  return (
    <main className="container py-4 sofa-page">
      {/* HERO */}
      <section className="sofa-hero" aria-label="Statement of Faith">
        <div className="sofa-hero__media">
          <img
            src={heroImg}
            alt=""
            className="sofa-hero__img"
            aria-hidden="true"
            loading="eager"
          />
          <div className="sofa-hero__overlay" />
        </div>

        <div className="sofa-hero__content">
          <h1 className="sofa-hero__title">Statement of Faith</h1>
          <p className="sofa-hero__subtitle">
            The Way of Messiah — 508(c)(1)(A) Religious Ministry
          </p>
        </div>
      </section>

      {/* PREAMBLE */}
      <section className="card shadow-sm mb-4" aria-labelledby="sofa-preamble">
        <div className="card-body">
          <h2 id="sofa-preamble" className="h5 mb-3">
            Preamble
          </h2>

          <p>
            We do not call ourselves “Christians,” which was a term first
            applied by Gentiles to believers of Yahusha. Rather, we identify as
            <strong> “The Way”</strong>, as did believers in the first century.
          </p>

          <p>
            Vine&apos;s Expository Dictionary notes that the word “Christian”
            appears in Acts 11:26; 26:28; and 1 Peter 4:16. The term does not
            appear to have been adopted by believers during apostolic times and
            likely carried an implication of scorn when used by outsiders.
          </p>

          <p>
            Tacitus, writing near the end of the first century, records that the
            “vulgar call them Christians,” referencing Christus, who was
            executed under Pontius Pilate. From the second century onward, many
            believers accepted the term as honorable.
          </p>

          <p className="mb-2">
            However, Scripture records that believers were called{" "}
            <strong>“The Way”</strong>.
          </p>

          <div className="sofa-scriptures">
            <Scripture
              reference="Acts 9:1–2"
              verse="Now Saul, still breathing a threat even of murder to the disciples of the Master, having approaching the high priest, He requested from him letters to Damascus to the synagogues, that if someone he should find of the way being, both men and women, having been bound he may lead them to Jerusalem."
              version="Bayithamashiyach Paleo Hebrew Version"
            />
            <Scripture
              reference="Acts 19:8–9, 23"
              verse="And he went into the synagogue, and spoke boldly for the space of three months, disputing and persuading the things concerning the Kingdom of Elohiym. But when diverse were hardened, and believe not, but spoke evil of the Way before the multitude, he departed from them, and separated the Talmidiym (disciples), disputing daily in the school of one Tyrannus. And the same time there arose no small stir about the Way."
              version="The Cepher Version"
            />
            <Scripture
              reference="Acts 22:4–5"
              verse="I shall purse the strongholds of that Way to the death, binding and delivering up into the prison both men and women, as also the high priest testified to me and all the house of the elders, from whom I received letters to the brothers, and went to Damascus to arrest even those who were present there to bring them to Jerusalem, so that they may be punished."
              version="Bayithamashiyach Paleo Hebrew Version"
            />
            <Scripture
              reference="Acts 24:14–15, 22"
              verse="And this I confess to you, that according to the Way which they call a sect, so I worship the Elohim of my fathers, believing all that has been written in the Torah and in the Nebi’im (prophets). And having heard this, having known more exactly about the Way, Phelix put them off, saying, ‘When Lusias the commander comes down, I shall decide your case'"
              version="YAH Scriptures Version"
            />
          </div>
        </div>
      </section>

      {/* CORE STATEMENT */}
      <section className="card shadow-sm mb-4" aria-labelledby="sofa-core">
        <div className="card-body">
          <h2 id="sofa-core" className="h5 mb-3">
            Core Statement
          </h2>

          <p className="mb-0">
            Our faith is rooted in the eternal Word of Yahuah and the testimony
            of Yahusha the Messiah, guided by the Ruach Ha&apos;Qodesh, and
            lived out in obedience to His Torah, equity in dealings, and
            stewardship of creation.
          </p>

          {/* If you have a missing list here, keep it exactly as-is */}
          {/* <ol>...</ol> */}
        </div>
      </section>

      {/* DOCTRINAL POINTS */}
      <section className="card shadow-sm mb-4" aria-labelledby="sofa-beliefs">
        <div className="card-body">
          <h2 id="sofa-beliefs" className="h5 mb-3">
            Core Beliefs
          </h2>

          <ol className="sofa-points">
            {/* keep your existing <li className="sofa-point">... exactly as-is */}
            {/* (paste unchanged) */}
          </ol>
        </div>
      </section>

      {/* COVENANT */}
      <section className="card shadow-sm mb-4" aria-labelledby="sofa-covenant">
        <div className="card-body">
          <h2 id="sofa-covenant" className="h5 mb-3">
            Covenant of Fellowship
          </h2>
          <ul className="mb-0">
            <li>Walk in obedience to Yahuah&apos;s Torah.</li>
            <li>Gather faithfully for worship and teaching.</li>
            <li>
              Support the ministry through prayer, sacrificial giving, and
              physical acts of service.
            </li>
            <li>
              Live as ambassadors and witnesses of the Messiah&apos;s truth.
            </li>
          </ul>
        </div>
      </section>

      {/* DIFFERENCES */}
      <section className="card shadow-sm" aria-labelledby="sofa-differences">
        <div className="card-body">
          <h2 id="sofa-differences" className="h5 mb-3">
            Differences in Yahuah&apos;s Instructions
          </h2>

          <div className="sofa-defs">
            <p className="mb-2">
              <strong>Commands (Mitzvot)</strong> — Direct binding orders.
            </p>
            <p className="mb-2">
              <strong>Statutes (Chukkim)</strong> — Covenant decrees.
            </p>
            <p className="mb-2">
              <strong>Judgments (Mishpatim)</strong> — Justice rulings.
            </p>
            <p className="mb-0">
              <strong>Ways (Derekh)</strong> — The path of life aligned with
              Yahuah.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
