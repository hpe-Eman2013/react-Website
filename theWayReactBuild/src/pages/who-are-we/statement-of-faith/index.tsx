import React from "react";
import "@/assets/css/who-are-we/StatementOfFaith.css";

type ScriptureProps = {
  reference: string;
  verse: string;
  version: string;
};

function Scripture({ reference, verse, version }: ScriptureProps) {
  return (
    <span className="position-relative d-inline-block scripture-wrapper">
      <span
        className="text-decoration-underline scripture-ref"
        tabIndex={0}
        role="button"
      >
        {reference}
      </span>

      <span className="scripture-tooltip">
        <strong>{reference}</strong>

        {/* was: <div className="mt-1 small">{verse}</div> */}
        <span className="mt-1 small scripture-tooltip-verse">{verse}</span>

        {/* was: <div className="mt-1 fst-italic text-muted small">— {version}</div> */}
        <span className="mt-1 fst-italic text-muted small scripture-tooltip-version">
          — {version}
        </span>
      </span>
    </span>
  );
}

export default function StatementOfFaith() {
  return (
    <div className="container py-4">
      <div className="mb-4">
        <h1 className="h3 mb-1">Statement of Faith</h1>
        <div className="text-muted">
          The Way of Messiah — 508(c)(1)(A) Religious Ministry
        </div>
      </div>

      {/* PREAMBLE */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h2 className="h5 mb-3">Preamble</h2>

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

          <p>
            However, Scripture records that believers were called{" "}
            <strong>“The Way”</strong>.
          </p>

          <div className="mt-2 d-flex flex-column gap-2">
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
      </div>

      {/* CORE STATEMENT */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h2 className="h5 mb-3">Core Statement</h2>
          <p className="mb-4">
            Our faith is rooted in the eternal Word of Yahuah and the testimony
            of Yahusha the Messiah, guided by the Ruach Ha&apos;Qodesh, and
            lived out in obedience to His Torah, equity in dealings, and
            stewardship of creation.
          </p>

          <ol>{/* ... keep the rest of your list exactly as-is ... */}</ol>
        </div>
      </div>
      {/* DOCTRINAL POINTS */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h2 className="h5 mb-3">Core Beliefs</h2>

          <ol className="sofa-points">
            <li className="sofa-point">
              <h3 className="h6 mb-2">Scriptures</h3>
              <p className="mb-0">
                We believe the Scriptures — Torah, Prophets, Writings, and
                Apostolic Witness — are the inspired, infallible Word of Yahuah,
                the final authority for life, faith, and practice.
              </p>
            </li>

            <li className="sofa-point">
              <h3 className="h6 mb-2">Elohim (Yahuah)</h3>
              <p className="mb-0">
                We believe Yahuah Elohim is Creator of heaven and earth, eternal
                and sovereign. He is “the Only True Elohim” (John 17:3). His
                divine nature is expressed through His omnipotence,
                omnipresence, and omniscience, made possible by the Ruach
                Ha’Qodesh that emanates from Yahuah.
              </p>
            </li>

            <li className="sofa-point">
              <h3 className="h6 mb-2">Messiah (Yahusha)</h3>
              <p className="mb-0">
                We believe Yahusha is the promised Messiah, the Word of Elohim
                made flesh (John 1:1–14), through whom salvation and
                reconciliation are given. He existed in the heavenly realm
                before having his life transferred into the womb of a virgin
                woman named Miryam (Mary) according to Luke 1:35. He was given
                authority by the Father (Matt. 28:18; 1 Cor. 15:24–28), and will
                return to restore all things.
              </p>
            </li>

            <li className="sofa-point">
              <h3 className="h6 mb-2">Ruach Ha’Qodesh (Holy Spirit)</h3>
              <p className="mb-0">
                We believe the Ruach searches all things, quicken (make alive)
                the spirits of believers in Yahusha, empowers believers, and
                indwells the faithful as the Spirit of adoption (Rom. 8:15).
                Through Him, the presence of Elohim and Yahusha the Messiah is
                with us always (Matt. 28:20).
              </p>
            </li>

            <li className="sofa-point">
              <h3 className="h6 mb-2">Salvation</h3>
              <p className="mb-0">
                We believe salvation is the gift of Yahuah’s grace, received
                through faith, repentance, and obedience. It leads us to walk in
                covenant relationship with Him. If we keep His Torah and keep
                unspotted from this Devil controlled world, He prepares us to be
                inhabitants and heirs of His coming Kingdom.
              </p>
            </li>

            <li className="sofa-point">
              <h3 className="h6 mb-2">Morality &amp; Life</h3>
              <p className="mb-2">
                We believe Yahuah created mankind male and female (Gen. 1:27).
                Marriage is between one man and one woman (Gen. 2:21–23; Matt.
                19:4–5). Sexual sins such as fornication, adultery,
                homosexuality, lesbianism, pedophilia, and bestiality are
                forbidden (1 Cor. 6:9–10; Rom. 1:26–27; Matt. 18:6; Exod.
                22:19).
              </p>
              <p className="mb-0">
                We affirm the sanctity of human life, rejecting murder, abortion
                (murder of the innocent), infanticide (killing a child under one
                years old), and child sacrifice as violations of Yahuah’s law
                (Exod. 21:22–23; 23:7; Lev. 20:2; Deut. 12:31).
              </p>
            </li>

            <li className="sofa-point">
              <h3 className="h6 mb-2">Sabbaths &amp; Appointed Times</h3>
              <p className="mb-2">
                We believe the seventh-day Sabbath is a perpetual sign between
                Yahuah and His people (Exod. 31:13). It is a day of rest,
                worship, instruction, and good works. We affirm the annual
                Feasts of Yahuah (Lev. 23) — Passover, Unleavened Bread, First
                Fruits, Weeks (Shavuot), Trumpets, Atonement, Tabernacles
                (Sukkot), and the Great Day (Shemini Atzeret) — as eternal
                convocations pointing to the work of Messiah.
              </p>
              <p className="mb-0">
                We reject man-made traditions and pagan holidays that mix false
                worship with the truth of Yahuah (Exod. 32; Deut. 12:29–30).
              </p>
            </li>

            <li className="sofa-point">
              <h3 className="h6 mb-2">The Assembly (Body of Messiah)</h3>
              <p className="mb-2">
                We believe all members are equal within the Body, and leadership
                is given for service, not domination (Mark 9:35; Eph. 4:15–16).
                Elders are accountable to higher judgment (James 3:1; 1 Tim.
                5:17).
              </p>
              <p className="mb-0">
                Discipline is necessary for unrepentant sin, but restoration is
                the goal (Matt. 18:15–17; 1 Cor. 5:9–13).
              </p>
            </li>

            <li className="sofa-point">
              <h3 className="h6 mb-2">The Future Hope</h3>
              <p className="mb-0">
                We believe in the resurrection of the righteous and the
                unrighteous (Acts 24:15). The Messiah will reign during the
                Millennial Kingdom, restoring dominion to mankind under Yahuah’s
                covenant promises (Isa. 11:11–12; Jer. 23:7–8).
              </p>
            </li>

            <li className="sofa-point">
              <h3 className="h6 mb-2">The Regathering</h3>
              <p className="mb-0">
                We believe that Yahuah will gather Yashar’el, the true people of
                Yahuah from all nations and bring them into the land that He
                promised Avraham (Abraham) and his descendants in the last days,
                according to these verses: (Deut. 30:1-10; Neh. 1:8-9; Isa.
                11:10-12; 43:5-7; 60:4, 9-22; Jer. 23:3-8; 29:11-14; 30:1-11;
                31:7-11; 32:37-41; 46:27-28; Ezek. 11:16-21; 20:23-24,33-44;
                28:25-26; 34:11-17; 36:19-34; 37:21-23; Hosea. 3:4-5; Joel
                3:1-3; Amos 9:14-15; Micah 2:12; Zep. 3:17-20; Zech. 2:1-13;
                8:7-8; 10:8-12; Matt. 24:31; John 11:49-52).
              </p>
            </li>
          </ol>
        </div>
      </div>
      {/* COVENANT */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h2 className="h5 mb-3">Covenant of Fellowship</h2>
          <ul>
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
      </div>

      {/* DIFFERENCES */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="h5 mb-3">Differences in Yahuah&apos;s Instructions</h2>

          <p>
            <strong>Commands (Mitzvot)</strong> — Direct binding orders.
          </p>
          <p>
            <strong>Statutes (Chukkim)</strong> — Covenant decrees.
          </p>
          <p>
            <strong>Judgments (Mishpatim)</strong> — Justice rulings.
          </p>
          <p>
            <strong>Ways (Derekh)</strong> — The path of life aligned with
            Yahuah.
          </p>
        </div>
      </div>
    </div>
  );
}
