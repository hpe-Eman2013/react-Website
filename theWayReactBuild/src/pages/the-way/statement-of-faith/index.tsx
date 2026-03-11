import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "@/assets/css/the-way/StatementOfFaith.css";

import heroImg from "@/assets/images/the-way/statement-of-faith/preview.jpg";

type ScriptureProps = {
  reference: string;
  verse: React.ReactNode;
  version: string;
};

function Scripture({ reference, verse, version }: ScriptureProps) {
  return (
    <details className="scripture">
      <summary className="scripture-ref">{reference}</summary>

      <div className="scripture-panel">
        <div className="scripture-panel__ref">{reference}</div>
        <div className="scripture-panel__verse">{verse}</div>
        <div className="scripture-panel__version">— {version}</div>
      </div>
    </details>
  );
}

type DoctrineItem = {
  id: string;
  number: number;
  title: string;
  content: React.ReactNode;
};

function DoctrineAccordionItem({
  item,
  isOpen,
  onSetOpen,
}: {
  item: DoctrineItem;
  isOpen: boolean;
  onSetOpen: (id: string, open: boolean) => void;
}) {
  const summaryId = `${item.id}-summary`;
  const panelId = `${item.id}-panel`;

  return (
    <article className="sofa-doctrine">
      <details
        className={`sofa-accordion ${isOpen ? "is-open" : ""}`}
        open={isOpen}
        onToggle={(e) => {
          const el = e.currentTarget as HTMLDetailsElement;
          onSetOpen(item.id, el.open);
        }}
      >
        <summary id={summaryId} className="sofa-accordion__summary">
          <span className="sofa-accordion__badge" aria-hidden="true">
            {item.number}
          </span>

          <span className="sofa-accordion__title ">{item.title}</span>

          <span className="sofa-accordion__chev" aria-hidden="true">
            ▾
          </span>
        </summary>

        <div
          id={panelId}
          className="sofa-accordion__panel"
          role="region"
          aria-labelledby={summaryId}
        >
          {item.content}
        </div>
      </details>
    </article>
  );
}

export default function StatementOfFaith() {
  const doctrines: DoctrineItem[] = useMemo(
    () => [
      {
        id: "preamble",
        number: 1,
        title: "Preamble",
        content: (
          <>
            <p>
              We do not call ourselves “Christians,” which was a term first
              applied by Gentiles to believers of Yahusha. Rather, we identify
              as “The Way”, as did believers in the first century.
            </p>

            <p>
              Vine&apos;s Expository Dictionary notes that the word “Christian”
              appears in Acts 11:26; 26:28; and 1 Peter 4:16. The term does not
              appear to have been adopted by believers during apostolic times
              and likely carried an implication of scorn when used by outsiders.
            </p>

            <p>
              Tacitus, writing near the end of the first century, records that
              the “vulgar call them Christians,” referencing Christus, who was
              executed under Pontius Pilate. From the second century onward,
              many believers accepted the term as honorable.
            </p>

            <p className="mb-2">
              However, Scripture records that believers were called “The Way”.
            </p>

            <div className="sofa-scriptures">
              <Scripture
                reference="Acts 9:1–2"
                verse={
                  <>
                    Now Saul, still breathing a threat even of murder to the
                    disciples of the Master, having approaching the high priest,
                    He requested from him letters to Damascus to the synagogues,
                    that if someone he should find of the Way being, both men
                    and women, having been bound he may lead them to Jerusalem.
                  </>
                }
                version="Bayithamashiyach Paleo Hebrew Version"
              />
              <Scripture
                reference="Acts 19:8–9, 23"
                verse={
                  <>
                    And he went into the synagogue, and spoke boldly for the
                    space of three months, disputing and persuading the things
                    concerning the Kingdom of Elohiym. But when diverse were
                    hardened, and believe not, but spoke evil of the Way before
                    the multitude, he departed from them, and separated the
                    Talmidiym (disciples), disputing daily in the school of one
                    Tyrannus. And the same time there arose no small stir about
                    the Way.
                  </>
                }
                version="The Cepher Version"
              />
              <Scripture
                reference="Acts 22:4–5"
                verse={
                  <>
                    I shall purse the strongholds of that Way to the death,
                    binding and delivering up into the prison both men and
                    women, as also the high priest testified to me and all the
                    house of the elders, from whom I received letters to the
                    brothers, and went to Damascus to arrest even those who were
                    present there to bring them to Jerusalem, so that they may
                    be punished.
                  </>
                }
                version="Bayithamashiyach Paleo Hebrew Version"
              />
              <Scripture
                reference="Acts 24:14–15, 22"
                verse={
                  <>
                    And this I confess to you, that according to the Way which
                    they call a sect, so I worship the Elohim of my fathers,
                    believing all that has been written in the Torah and in the
                    Nebi’im (prophets). And having heard this, having known more
                    exactly about the Way, Phelix put them off, saying, ‘When
                    Lusias the commander comes down, I shall decide your case.’
                  </>
                }
                version="YAH Scriptures Version"
              />
            </div>
          </>
        ),
      },

      {
        id: "core-statement",
        number: 2,
        title: "Core Statement",
        content: (
          <>
            <p>
              We believe in Yahuah, the sole Creator of the heavens and the
              earth. He is the Elohiym of Abraham, Isaac, and Jacob. We
              acknowledge that His name is set-apart (Qodesh) and must be
              restored to its rightful place in our hearts and speech, moving
              away from titles and translations that obscure His eternal
              identity.
            </p>

            <p>
              We believe that Yahusha is the promised Mashiach, the Son of the
              Living Elohiym. We reject the Hellenized and modern variations of
              his name, affirming that Yahusha is the only name that carries the
              full weight of the Father&apos;s promise: “Yahuah is Salvation.”
              He is the Word made flesh, our High Priest, and the only door to
              the Father.
            </p>

            <p>
              We believe that those who follow The Way are being called out of
              the confusion of modern religious traditions and “isms.” We are
              being restored to our identity as the set-apart people of Yahuah,
              both natural branches and those grafted into the olive tree
              through the blood of Yahusha (Romans 11:17–18).
            </p>

            <p className="mb-0">
              We hold the Scriptures to be the inspired truth, but we recognize
              the necessity of returning to the Paleo Hebrew roots to unlock
              their true depth. We seek the “Pure Lip” promised in the prophets,
              stripping away the layers of Greek and Latin influence to hear the
              Father&apos;s voice clearly (Zeph. 3:9).
            </p>
          </>
        ),
      },

      {
        id: "core-beliefs",
        number: 3,
        title: "Core Beliefs",
        content: (
          <>
            <p className="sofa-lead">
              Our faith is rooted in the eternal Word of Yahuah and the
              testimony of Yahusha the Messiah, guided by the Ruach
              Ha&apos;Qodesh (Holy Spirit), and lived out in obedience to His
              Torah, equity in dealings, and stewardship of creation.
            </p>

            <ol className="sofa-beliefs">
              <li className="sofa-belief">
                <h4 className="sofa-belief__title">1. Scriptures</h4>
                <p className="mb-0">
                  We believe the Scriptures — Torah, Prophets, Writings, and
                  Apostolic Witness — are the inspired, infallible Word of
                  Yahuah, the final authority for life, faith, and practice.
                </p>
              </li>

              <li className="sofa-belief">
                <h4 className="sofa-belief__title">2. Elohim (Yahuah)</h4>
                <p className="mb-0">
                  We believe Yahuah Elohim is Creator of heaven and earth,
                  eternal and sovereign. He is “the Only True Elohim” (John
                  17:3). His divine nature is expressed through His omnipotence,
                  omnipresence, and omniscience, made possible by the Ruach
                  Ha&apos;Qodesh that emanates from Yahuah.
                </p>
              </li>

              <li className="sofa-belief">
                <h4 className="sofa-belief__title">3. Messiah (Yahusha)</h4>
                <p>
                  We believe Yahusha is the promised Messiah, the Word of Elohim
                  made flesh (John 1:1–14), through whom salvation and
                  reconciliation are given. He existed in the heavenly realm
                  before having his life transferred into the womb of a virgin
                  woman named Miryam (Mary) according to Luke 1:35.
                </p>
                <p className="mb-0">
                  He was given authority by the Father (Matt. 28:18; 1 Cor.
                  15:24–28), and will return to restore all things.
                </p>
              </li>

              <li className="sofa-belief">
                <h4 className="sofa-belief__title">
                  4. Ruach Ha&apos;Qodesh (Holy Spirit)
                </h4>
                <p className="mb-0">
                  We believe the Ruach searches all things, quicken (make alive)
                  the spirits of believers in Yahusha, empowers believers, and
                  indwells the faithful as the Spirit of adoption (Rom. 8:15).
                  Through Him, the presence of Elohim and Yahusha the Messiah is
                  with us always (Matt. 28:20).
                </p>
              </li>

              <li className="sofa-belief">
                <h4 className="sofa-belief__title">5. Salvation</h4>
                <p className="mb-0">
                  We believe salvation is the gift of Yahuah&apos;s grace,
                  received through faith, repentance, and obedience. It leads us
                  to walk in covenant relationship with Him. If we keep His
                  Torah and keep unspotted from this Devil controlled world, He
                  prepares us to be inhabitants and heirs of His coming Kingdom.
                </p>
              </li>

              <li className="sofa-belief">
                <h4 className="sofa-belief__title">6. Morality &amp; Life</h4>
                <p>
                  We believe Yahuah created mankind male and female (Gen. 1:27).
                  Marriage is between one man and one woman (Gen. 2:21–23; Matt.
                  19:4–5). Sexual sins such as fornication, adultery,
                  homosexuality, lesbianism, pedophilia, and bestiality are
                  forbidden (1 Cor. 6:9–10; Rom. 1:26–27; Matt. 18:6; Exod.
                  22:19).
                </p>
                <p className="mb-0">
                  We affirm the sanctity of human life, rejecting murder,
                  abortion (murder of the innocent), infanticide (killing a
                  child under one years old), and child sacrifice as violations
                  of Yahuah&apos;s law (Exod. 21:22–23; 23:7; Lev. 20:2; Deut.
                  12:31).
                </p>
              </li>

              <li className="sofa-belief">
                <h4 className="sofa-belief__title">
                  7. Sabbaths &amp; Appointed Times
                </h4>
                <p>
                  We believe the seventh-day Sabbath is a perpetual sign between
                  Yahuah and His people (Exod. 31:13). It is a day of rest,
                  worship, instruction, and good works.
                </p>
                <p>
                  We affirm the annual Feasts of Yahuah (Lev. 23) — Passover,
                  Unleavened Bread, First Fruits, Weeks (Shavuot), Trumpets,
                  Atonement, Tabernacles (Sukkot), and the Great Day (Shemini
                  Atzeret) — as eternal convocations pointing to the work of
                  Messiah.
                </p>
                <p className="mb-0">
                  We reject man-made traditions and pagan holidays that mix
                  false worship with the truth of Yahuah (Exod. 32; Deut.
                  12:29–30).
                </p>
              </li>

              <li className="sofa-belief">
                <h4 className="sofa-belief__title">
                  8. The Assembly (Body of Messiah)
                </h4>
                <p>
                  We believe all members are equal within the Body, and
                  leadership is given for service, not domination (Mark 9:35;
                  Eph. 4:15–16). Elders are accountable to higher judgment
                  (James 3:1; 1 Tim. 5:17).
                </p>
                <p className="mb-0">
                  Discipline is necessary for unrepentant sin, but restoration
                  is the goal (Matt. 18:15–17; 1 Cor. 5:9–13).
                </p>
              </li>

              <li className="sofa-belief">
                <h4 className="sofa-belief__title">9. The Future Hope</h4>
                <p className="mb-0">
                  We believe in the resurrection of the righteous and the
                  unrighteous (Acts 24:15). The Messiah will reign during the
                  Millennial Kingdom, restoring dominion to mankind under
                  Yahuah&apos;s covenant promises (Isa. 11:11–12; Jer. 23:7–8).
                </p>
              </li>

              <li className="sofa-belief">
                <h4 className="sofa-belief__title">10. The Regathering</h4>
                <p className="mb-0">
                  We believe that Yahuah will gather Yashar&apos;el, the true
                  people of Yahuah from all nations and bring them into the land
                  that He promised Avraham (Abraham) and his descendants in the
                  last days, according to these verses: (Deut. 30:1–10; Neh.
                  1:8–9; Isa. 11:10–12; 43:5–7; 60:4, 9–22; Jer. 23:3–8;
                  29:11–14; 30:1–11; 31:7–11; 32:37–41; 46:27–28; Ezek.
                  11:16–21; 20:23–24, 33–44; 28:25–26; 34:11–17; 36:19–34;
                  37:21–23; Hosea 3:4–5; Joel 3:1–3; Amos 9:14–15; Micah 2:12;
                  Zeph. 3:17–20; Zech. 2:1–13; 8:7–8; 10:8–12; Matt. 24:31; John
                  11:49–52).
                </p>
              </li>

              <li className="sofa-belief">
                <h4 className="sofa-belief__title">11. Mission of The Way</h4>
                <p className="mb-0">
                  We believe our mission is to proclaim the Gospel of the
                  Kingdom (Matt. 24:14), edify the Assembly with spiritual gifts
                  (1 Cor. 14:12, 26), teach Yahuah&apos;s people the Torah, so
                  they will not be destroyed for a lack of knowledge (Hosea
                  4:6), care for the fatherless and widows (James 1:27), and
                  remain without spot and blameless (2 Peter 3:14) as we await
                  Messiah&apos;s return.
                </p>
              </li>
            </ol>
          </>
        ),
      },

      {
        id: "differences",
        number: 4,
        title: "Differences in Yahuah's Instructions",
        content: (
          <div className="sofa-subsections">
            <section className="sofa-subsection">
              <h4 className="sofa-subsection__title">
                1. Commands (מִצְוֹת — Mitzvot)
              </h4>
              <ul className="sofa-bullets">
                <li>
                  Meaning: Direct orders, commandments, binding instructions.
                </li>
                <li>
                  Nature: Broad, foundational requirements (like the 10
                  Commandments).
                </li>
                <li>
                  Examples:
                  <ul>
                    <li>
                      Exodus 20:3 — “You shall have no other gods before Me.”
                    </li>
                    <li>
                      Deut. 6:1 — “Now this is the commandment… that you may do
                      them in the land…”
                    </li>
                  </ul>
                </li>
                <li>
                  Takeaway: These are Yahuah&apos;s direct orders,
                  non-negotiable and universal.
                </li>
              </ul>
            </section>

            <section className="sofa-subsection">
              <h4 className="sofa-subsection__title">
                2. Statutes (חֻקִּים — Chukkim)
              </h4>
              <ul className="sofa-bullets">
                <li>
                  Meaning: Decrees, permanent laws, often without full human
                  explanation.
                </li>
                <li>
                  Nature: “Set apart” practices that mark covenant identity.
                </li>
                <li>
                  Examples:
                  <ul>
                    <li>
                      Leviticus 23 — Feasts of Yahuah (Sabbaths, Passover,
                      Sukkot, etc.).
                    </li>
                    <li>
                      Deut. 6:2 — “That you may fear Yahuah… to keep all His
                      statutes and His commandments.”
                    </li>
                  </ul>
                </li>
                <li>
                  Takeaway: These are appointed practices that show obedience,
                  even when we may not fully grasp the reason. They are about
                  covenant loyalty.
                </li>
              </ul>
            </section>

            <section className="sofa-subsection">
              <h4 className="sofa-subsection__title">
                3. Ordinances / Judgments (מִשְׁפָּטִים — Mishpatim)
              </h4>
              <ul className="sofa-bullets">
                <li>
                  Meaning: Rulings, case laws, judgments — how to apply
                  Yahuah&apos;s justice.
                </li>
                <li>
                  Nature: Social and civil instructions; guide how we treat one
                  another.
                </li>
                <li>
                  Examples:
                  <ul>
                    <li>
                      Exodus 21–23 — laws about servants, damages, theft, and
                      restitution.
                    </li>
                    <li>
                      Deut. 16:18 — “You shall appoint judges… and they shall
                      judge the people with righteous judgment (mishpat).”
                    </li>
                  </ul>
                </li>
                <li>
                  Takeaway: These are justice rules — applications of Torah in
                  community life.
                </li>
              </ul>
            </section>

            <section className="sofa-subsection">
              <h4 className="sofa-subsection__title">
                4. Ways (דֶּרֶךְ — Derekh)
              </h4>
              <ul className="sofa-bullets">
                <li>
                  Meaning: The path, way, manner of life, or lifestyle aligned
                  with Yahuah.
                </li>
                <li>Nature: The overall walk — embodying His character.</li>
                <li>
                  Examples:
                  <ul>
                    <li>
                      Psalm 25:4 — “Show me Your ways (derekh), O Yahuah; teach
                      me Your paths.”
                    </li>
                    <li>
                      Deut. 10:12 — “…to walk in all His ways, and to love Him…”
                    </li>
                  </ul>
                </li>
                <li>
                  Takeaway: This is the bigger picture: living a lifestyle
                  patterned after Yahuah&apos;s character of justice, mercy, and
                  holiness.
                </li>
              </ul>
            </section>
          </div>
        ),
      },

      {
        id: "covenant",
        number: 5,
        title: "Covenant of Fellowship",
        content: (
          <ul className="sofa-list mb-0">
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
        ),
      },
    ],
    [],
  );

  const allIds = useMemo(() => doctrines.map((d) => d.id), [doctrines]);
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set());
  const [allowMultiple, setAllowMultiple] = useState(false);

  function setOneOpen(id: string, open: boolean) {
    setOpenIds((prev) => {
      if (!open) {
        const next = new Set(prev);
        next.delete(id);
        return next;
      }

      if (allowMultiple) {
        const next = new Set(prev);
        next.add(id);
        return next;
      }

      return new Set([id]);
    });
  }

  function expandAll() {
    setAllowMultiple(true);
    setOpenIds(new Set(allIds));
  }

  function collapseAll() {
    setAllowMultiple(false);
    setOpenIds(new Set());
  }

  return (
    <main className="container py-4 sofa-page">
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
            Anchored in Scripture, lived in obedience, and practiced in covenant
            faithfulness.
          </p>

          <div className="sofa-hero__cta">
            <Link
              className="theway-btn"
              to="/the-way/education/memberships/register"
            >
              Membership
            </Link>
            <Link className="theway-btn theway-btn-ghost" to="/contact">
              Contact
            </Link>
            <Link className="theway-btn theway-btn-ghost" to="/the-way">
              The Way
            </Link>
          </div>
        </div>
      </section>

      <section className="sofa-panel" aria-labelledby="sofa-intro">
        <h2 id="sofa-intro" className="sofa-panel__title">
          We affirm
        </h2>
        <p className="sofa-panel__text">
          This statement summarizes what we believe, teach, and seek to live as
          a community. Scripture is our authority, Messiah is our foundation,
          and obedience is the fruit of covenant faith.
        </p>
      </section>

      <section className="sofa-controls" aria-label="Accordion controls">
        <div className="sofa-controls__left">
          <span className="sofa-muted">
            Open: {openIds.size} / {doctrines.length}
          </span>
        </div>
        <div className="sofa-controls__right">
          <button type="button" className="sofa-btn" onClick={expandAll}>
            Expand All
          </button>
          <button
            type="button"
            className="sofa-btn sofa-btn--ghost"
            onClick={collapseAll}
          >
            Collapse All
          </button>
        </div>
      </section>

      <section className="sofa-grid" aria-label="Doctrinal statements">
        {doctrines.map((item) => (
          <DoctrineAccordionItem
            key={item.id}
            item={item}
            isOpen={openIds.has(item.id)}
            onSetOpen={setOneOpen}
          />
        ))}
      </section>

      <section className="sofa-cta" aria-label="Next steps">
        <div className="sofa-cta__inner">
          <h2 className="sofa-cta__title">Next steps</h2>
          <p className="sofa-cta__text">
            If you’re exploring covenant life, learn the pillars of The Way,
            connect with us, or take the next step toward membership.
          </p>

          <div className="sofa-cta__buttons">
            <Link className="theway-btn" to="/the-way">
              Read The Way
            </Link>
            <Link
              className="theway-btn theway-btn-ghost"
              to="/the-way/education/memberships/register"
            >
              Membership
            </Link>
            <Link className="theway-btn theway-btn-ghost" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
