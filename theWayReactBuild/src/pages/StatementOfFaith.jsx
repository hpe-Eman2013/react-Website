import React from "react";
import PropTypes from "prop-types";

function Scripture({ reference, verse, version }) {
  return (
    <span className="position-relative d-inline-block scripture-wrapper">
      <span className="text-decoration-underline scripture-ref" tabIndex={0}>
        {reference}
      </span>

      <span className="scripture-tooltip">
        <strong>{reference}</strong>
        <div className="mt-1 small">{verse}</div>
        <div className="mt-1 fst-italic text-muted small">— {version}</div>
      </span>
    </span>
  );
}

Scripture.propTypes = {
  reference: PropTypes.string.isRequired,
  verse: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
};

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
            Vine’s Expository Dictionary notes that the word “Christian” appears
            in Acts 11:26; 26:28; and 1 Peter 4:16. The term does not appear to
            have been adopted by believers during apostolic times and likely
            carried an implication of scorn when used by outsiders.
          </p>

          <p>
            Tacitus, writing near the end of the first century, records that the
            “vulgar call them Christians,” referencing Christus, who was
            executed under Pontius Pilate. From the second century onward, many
            believers accepted the term as honorable.
          </p>

          <p>
            However, Scripture records that believers were called{" "}
            <strong>“The Way”</strong>
            <br />
            <Scripture
              reference="Acts 9:1–2"
              verse="Now Saul, still breathing a threat even of murder to the disciples of the Master, having approaching the high priest, He requested from him letters to Damascus to the synagogues, that if someone he should find of the way being, both men and women, having been bound he may lead them to Jerusalem."
              version="Bayithamashiyach Paleo Hebrew Version"
            />
            <br />
            <Scripture
              reference="Acts 19:8–9, 23"
              verse="And he went into the synagogue, and spoke boldly for the space of three months, disputing and persuading the things concerning the Kingdom of Elohiym. But when diverse were hardened, and believe not, but spoke evil of the Way before the multitude, he departed from them, and separated the Talmidiym (disciples), disputing daily in the school of one Tyrannus. And the same time there arose no small stir about the Way."
              version="The Cepher Version"
            />
            <br />
            <Scripture
              reference="Acts 22:4–5"
              verse="I shall purse the strongholds of that Way to the death, binding and delivering up into the prison both men and women, as also the high priest testified to me and all the house of the elders, from whom I received letters to the brothers, and went to Damascus to arrest even those who were present there to bring them to Jerusalem, so that they may be punished."
              version="Bayithamashiyach Paleo Hebrew Version"
            />
            <br />
            <Scripture
              reference="Acts 24:14–15, 22"
              verse="And this I confess to you, that according to the Way which they call a sect, so I worship the Elohim of my fathers, believing all that has been written in the Torah and in the Nebi’im (prophets). And having heard this, having known more exactly about the Way, Phelix put them off, saying, ‘When Lusias the commander comes down, I shall decide your case'"
              version="YAH Scriptures Version"
            />
            <br />
          </p>
        </div>
      </div>

      {/* CORE STATEMENT */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <p className="mb-4">
            Our faith is rooted in the eternal Word of Yahuah and the testimony
            of Yahusha the Messiah, guided by the Ruach Ha’Qodesh, and lived out
            in obedience to His Torah, equity in dealings, and stewardship of
            creation.
          </p>

          <ol>
            <li className="mb-3">
              <strong>Scriptures</strong>
              <p className="text-muted">
                We believe the Scriptures — Torah, Prophets, Writings, and
                Apostolic Witness — are the inspired, infallible Word of Yahuah,
                the final authority for life, faith, and practice.
              </p>
            </li>

            <li className="mb-3">
              <strong>Elohim (Yahuah)</strong>
              <p className="text-muted">
                We believe Yahuah Elohim is Creator of heaven and earth, eternal
                and sovereign. He is “the Only True Elohim” (John 17:3).
              </p>
            </li>

            <li className="mb-3">
              <strong>Messiah (Yahusha)</strong>
              <p className="text-muted">
                We believe Yahusha is the promised Messiah, the Word made flesh
                (John 1:1–14), conceived by divine power (Luke 1:35), given
                authority by the Father (Matt. 28:18; 1 Cor. 15:24–28), and will
                return to restore all things.
              </p>
            </li>

            <li className="mb-3">
              <strong>Ruach Ha’Qodesh</strong>
              <p className="text-muted">
                We believe the Ruach searches all things, quickens believers,
                indwells the faithful as the Spirit of adoption (Rom. 8:15), and
                makes the presence of Elohim and Messiah continually with us
                (Matt. 28:20).
              </p>
            </li>

            <li className="mb-3">
              <strong>Salvation</strong>
              <p className="text-muted">
                Salvation is the gift of Yahuah’s grace, received through faith,
                repentance, and obedience. It leads to covenant relationship and
                preparation for inheritance in His coming Kingdom.
              </p>
            </li>

            <li className="mb-3">
              <strong>Morality & Life</strong>
              <p className="text-muted">
                Yahuah created mankind male and female (Gen. 1:27). Marriage is
                between one man and one woman (Gen. 2:21–23; Matt. 19:4–5).
                Sexual sins including fornication, adultery, homosexuality,
                lesbianism, pedophilia, and bestiality are forbidden (1 Cor.
                6:9–10; Rom. 1:26–27; Matt. 18:6; Exod. 22:19).
              </p>

              <p className="text-muted">
                We affirm the sanctity of life and reject murder, abortion,
                infanticide, and child sacrifice (Exod. 21:22–23; 23:7; Lev.
                20:2; Deut. 12:31).
              </p>
            </li>

            <li className="mb-3">
              <strong>Sabbaths & Appointed Times</strong>
              <p className="text-muted">
                The seventh-day Sabbath is a perpetual sign (Exod. 31:13). We
                affirm the Feasts of Yahuah (Lev. 23) as eternal convocations
                pointing to Messiah and reject pagan traditions mixed with
                worship (Exod. 32; Deut. 12:29–30).
              </p>
            </li>

            <li className="mb-3">
              <strong>The Assembly</strong>
              <p className="text-muted">
                Leadership is for service, not domination (Mark 9:35; Eph.
                4:15–16). Elders are accountable (James 3:1; 1 Tim. 5:17).
                Discipline aims at restoration (Matt. 18:15–17; 1 Cor. 5:9–13).
              </p>
            </li>

            <li className="mb-3">
              <strong>The Future Hope</strong>
              <p className="text-muted">
                We believe in the resurrection of the righteous and unrighteous
                (Acts 24:15) and the Millennial reign of Messiah restoring
                dominion under covenant promises (Isa. 11:11–12; Jer. 23:7–8).
              </p>
            </li>

            <li className="mb-3">
              <strong>The Regathering</strong>
              <p className="text-muted">
                Yahuah will gather Yashar’el from all nations into the land
                promised to Avraham in the last days (Deut. 30:1–10; Isa.
                11:10–12; Jer. 31:7–11; Ezek. 37:21–23; Matt. 24:31; John
                11:49–52).
              </p>
            </li>

            <li>
              <strong>Mission of The Way</strong>
              <p className="text-muted">
                We proclaim the Gospel of the Kingdom (Matt. 24:14), edify the
                Assembly (1 Cor. 14:12, 26), teach Torah (Hos. 4:6), care for
                widows and the fatherless (James 1:27), and await Messiah’s
                return blameless (2 Pet. 3:14).
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
            <li>Walk in obedience to Yahuah’s Torah.</li>
            <li>Gather faithfully for worship and teaching.</li>
            <li>Support the ministry through prayer and service.</li>
            <li>Live as witnesses of Messiah’s truth.</li>
          </ul>
        </div>
      </div>

      {/* DIFFERENCES */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="h5 mb-3">Differences in Yahuah’s Instructions</h2>

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
