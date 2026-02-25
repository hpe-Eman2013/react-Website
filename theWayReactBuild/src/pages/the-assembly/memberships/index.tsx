import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type Section = {
  id: string;
  title: string;
  body: React.ReactNode;
};

export default function MembershipPage() {
  const [accepted, setAccepted] = useState(false);

  const sections: Section[] = useMemo(
    () => [
      {
        id: "preamble",
        title: "Preamble",
        body: (
          <>
            <p>
              We, the undersigned, being called out of the nations and restored
              to <strong>The Way</strong> (Acts 24:14), acknowledge that the
              earth and all fullness thereof belong to Yahuah Elohim. We confess
              that we are sojourners and stewards upon His land.
            </p>
            <p>
              Having been redeemed by the blood of Messiah Yahusha, we renounce
              allegiance to systems contrary to His righteousness and embrace
              our calling as faithful stewards and trustees of the Kingdom.
            </p>
            <p>
              This Covenant serves as: (1) a declaration of spiritual
              commitment, (2) an Articles of Agreement for the assembly, (3) a
              framework of Equity and Stewardship, and (4) a standard for
              fellowship and accountability.
            </p>
            <p className="mb-0">
              By entering into membership with The Way of Messiah, I affirm my
              agreement with the Statement of Faith and commit to the following
              Articles:
            </p>
          </>
        ),
      },
      {
        id: "article-1",
        title: "Article I — Spiritual Foundation",
        body: (
          <>
            <h3 className="h6 mt-2">1. The Name</h3>
            <p>
              We acknowledge and honor the set-apart Name of our Father{" "}
              <strong>Yahuah</strong>, and His Son, our Savior{" "}
              <strong>Yahusha</strong>.
            </p>

            <h3 className="h6 mt-2">2. The Torah</h3>
            <p>
              We accept the Torah (Instructions) as the governing Law of our
              household. We strive to walk in the <em>Spirit of the Law</em>,
              which is Equity—where mercy and justice meet.
            </p>

            <h3 className="h6 mt-2">3. The Testimony</h3>
            <p>
              We hold fast to the testimony of Yahusha, the Author and Finisher
              of our faith, who modeled the perfect life of obedience and
              stewardship.
            </p>

            <h3 className="h6 mt-2">4. Faithfulness to Yahuah</h3>
            <ul className="mb-0">
              <li>
                To walk in obedience to Yahuah’s commandments, statutes,
                ordinances, and ways.
              </li>
              <li>
                To honor the Sabbaths and Feasts of Yahuah as eternal covenant
                signs.
              </li>
              <li>
                To pursue repentance and restoration when correction is
                necessary.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "article-2",
        title: "Article II — Fellowship & Community Covenant",
        body: (
          <>
            <p>
              Membership in The Way of Messiah is a covenant relationship. I
              commit:
            </p>
            <ul>
              <li>To gather regularly for worship, study, and fellowship.</li>
              <li>
                To walk in love, humility, and unity with my brothers and
                sisters.
              </li>
              <li>
                To avoid gossip, strife, slander, or division within the Body.
              </li>
              <li>
                To receive loving correction from the elders when necessary.
              </li>
              <li>
                To pursue reconciliation before allowing disputes to grow.
              </li>
            </ul>
            <p className="mb-0">
              I understand that restoration—not punishment—is the goal of all
              accountability.
            </p>
          </>
        ),
      },
      {
        id: "article-3",
        title: "Article III — Principles of Equity & Trust",
        body: (
          <>
            <h3 className="h6 mt-2">1. Fiduciary Duty</h3>
            <p>
              I acknowledge that I own nothing in pride. All assets, talents,
              lands, and abilities placed in my care are held in trust for the
              benefit of the Kingdom and generations to come.
            </p>

            <h3 className="h6 mt-2">2. Clean Hands</h3>
            <p>
              I covenant to walk with clean hands and a pure heart (Tehillim /
              Psalms 24:4). I will not use Equity or Trust principles to cloak
              fraud or injustice, but to protect righteousness and stewardship.
            </p>

            <h3 className="h6 mt-2">3. Righteous Judgment</h3>
            <p className="mb-0">
              I agree to resolve disputes according to the Law of Equity and the
              counsel of believers, not through adversarial contention or
              worldly systems, except where required by law.
            </p>
          </>
        ),
      },
      {
        id: "article-4",
        title: "Article IV — Stewardship of the Land (Agriculture)",
        body: (
          <>
            <p>Recognizing the Dominion Mandate entrusted to mankind:</p>
            <ul className="mb-0">
              <li>To learn and practice Biblical Agriculture.</li>
              <li>To honor the soil as living creation.</li>
              <li>Not to allow the “talents” of the earth to remain idle.</li>
              <li>To provide for my household and assist the needy.</li>
              <li>To protect seed purity and the health of the land.</li>
              <li>
                To observe the Sabbaths of the earth as instructed by Yahuah.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "article-5",
        title: "Article V — Support of the Ministry",
        body: (
          <>
            <p>As able, I commit:</p>
            <ul className="mb-0">
              <li>
                To support The Way of Messiah through prayer, service, and
                financial contributions.
              </li>
              <li>To participate in outreach and works of compassion.</li>
              <li>
                To contribute my gifts, time, and skills for the strengthening
                of the assembly.
              </li>
            </ul>
          </>
        ),
      },

      // ✅ Tightened clause (replaces your prior arbitration section)
      {
        id: "article-6",
        title:
          "Article VI — Dispute Resolution, Mediation, and Binding Arbitration",
        body: (
          <>
            <p>
              <strong>Purpose and Biblical Standard.</strong> In accordance with{" "}
              <strong>1 Corinthians 6:1–8</strong> and the principles of
              reconciliation (see also Matthew 18:15–17), I agree that disputes
              arising within this covenant community should be handled first
              through private reconciliation and counsel among believers, with
              the goal of restoration.
            </p>

            <p>
              <strong>Covered Disputes.</strong> Except as expressly stated
              below, this section applies to any dispute, claim, or controversy
              arising out of or relating to:
            </p>
            <ul>
              <li>
                my membership, participation, or relationship with The Way of
                Messiah,
              </li>
              <li>
                this Covenant and any related policies, communications, or
                records,
              </li>
              <li>
                interactions with Elders/Trustees, officers, agents, volunteers,
                or other members,
              </li>
              <li>
                any alleged harm (contract, tort, statutory, equitable, or
                otherwise) between the parties.
              </li>
            </ul>

            <p>
              <strong>Step 1 — Written Notice and Informal Resolution.</strong>{" "}
              Before initiating arbitration, the party bringing a dispute must
              provide written notice describing the issue and desired
              resolution. The parties will attempt in good faith to resolve the
              dispute informally within <strong>30 days</strong> after notice is
              received.
            </p>

            <p>
              <strong>Step 2 — Mediation.</strong> If not resolved informally,
              the parties shall participate in mediation conducted by one or
              more impartial believers (or an experienced conciliation
              mediator), unless both parties agree in writing to skip mediation.
            </p>

            <p>
              <strong>Step 3 — Binding Arbitration.</strong> If still
              unresolved, the dispute shall be resolved by{" "}
              <strong>final and binding arbitration</strong>.
            </p>

            <ul>
              <li>
                <strong>Arbitration Panel.</strong> Arbitration shall be heard
                by <strong>one arbitrator</strong> unless either party requests
                a panel. If a panel is used, it shall consist of{" "}
                <strong>three</strong> impartial arbitrators.
              </li>
              <li>
                <strong>Selection.</strong> The parties shall jointly select the
                arbitrator(s). If they cannot agree within{" "}
                <strong>14 days</strong>, The Way of Messiah shall propose a
                list of qualified arbitrators, and the parties shall select via
                an alternating strike method or another neutral method agreed in
                writing.
              </li>
              <li>
                <strong>Governing Law.</strong> This arbitration agreement is
                intended to be enforceable under the{" "}
                <strong>Federal Arbitration Act (9 U.S.C. §§ 1–16)</strong> and,
                to the extent not preempted, applicable state law. A written
                arbitration agreement is generally enforceable under federal
                law, subject to standard contract defenses.{" "}
                {/* Source note is in your chat message below, not in UI */}
              </li>
              <li>
                <strong>Location and Format.</strong> Unless the parties agree
                otherwise, arbitration will be conducted in the same state as
                the assembly’s principal location. Hearings may be in-person or
                remote (video) at the arbitrator’s discretion, considering cost
                and fairness.
              </li>
              <li>
                <strong>Rules and Fairness.</strong> The arbitrator shall apply
                procedures that ensure both sides have a fair opportunity to be
                heard, present evidence, and examine witnesses. Formal court
                rules of evidence need not apply.
              </li>
              <li>
                <strong>Written Award.</strong> The arbitrator shall issue a
                written decision stating essential findings and the relief
                granted, if any.
              </li>
              <li>
                <strong>Confidentiality.</strong> To protect the peace and
                privacy of the Body, the mediation and arbitration process shall
                be kept confidential by the parties and participants, except as
                required to enforce an award, comply with law, or protect
                safety.
              </li>
            </ul>

            <p>
              <strong>Waiver of Court Trial and Jury Trial.</strong> To the
              fullest extent permitted by law, I understand and agree that by
              accepting this Covenant, I am waiving the right to have covered
              disputes decided by a judge or jury in a civil court.
            </p>

            <p>
              <strong>No Class or Representative Actions.</strong> Arbitration
              shall be conducted on an individual basis only. No party may bring
              or participate in a class action, collective action, or
              representative proceeding regarding a covered dispute, to the
              fullest extent permitted by law.
            </p>

            <p>
              <strong>Permitted Court Actions (Narrow Exceptions).</strong> This
              section does not prevent:
            </p>
            <ul>
              <li>
                actions required by law (including mandatory reporting or lawful
                subpoenas),
              </li>
              <li>
                requests for temporary emergency relief to prevent immediate
                harm (e.g., safety threats), provided the merits still proceed
                to arbitration,
              </li>
              <li>
                enforcement of an arbitration award in a court with proper
                jurisdiction.
              </li>
            </ul>

            <p>
              <strong>Severability and Survival.</strong> If any portion of this
              section is found unenforceable, the remainder shall remain in
              effect to the maximum extent permitted. This dispute resolution
              agreement survives termination of membership.
            </p>

            <p className="mb-0">
              <strong>Goal.</strong> The goal of reconciliation, mediation, and
              arbitration shall be restoration, equity, and peace in alignment
              with Yahuah’s Word.
            </p>
          </>
        ),
      },

      {
        id: "article-7",
        title: "Article VII — Accountability & Restoration",
        body: (
          <>
            <p>
              I acknowledge that membership is voluntary and covenantal. If I
              persist in conduct contrary to this Covenant and refuse
              correction:
            </p>
            <ul>
              <li>
                The elders may restrict or revoke membership for the protection
                of the assembly.
              </li>
              <li>The goal shall always remain repentance and restoration.</li>
            </ul>
          </>
        ),
      },
      {
        id: "article-8",
        title: "Article VIII — Declaration of Jurisdiction",
        body: (
          <>
            <p>
              By entering into this Covenant, I make a public declaration that:
            </p>
            <ul>
              <li>
                I am transitioning my life, labor, and legacy into the
                jurisdiction of Yahuah Elohim.
              </li>
              <li>I stand as a trustee of His Word.</li>
              <li>I practice His Equity.</li>
              <li>I steward His land and resources faithfully.</li>
            </ul>
            <blockquote className="blockquote">
              <p className="mb-0">
                “Well done, good and faithful servant.” — Mattithyahu (Matthew)
                25:21
              </p>
            </blockquote>
          </>
        ),
      },
      {
        id: "how-to-use",
        title: "How to Use This (Onboarding & Private Records)",
        body: (
          <>
            <ul className="mb-0">
              <li>
                <strong>Onboarding:</strong> Provide this to potential members
                who wish to join the assembly.
              </li>
              <li>
                <strong>Legal Clarity:</strong> Keep on file as private records
                reflecting intent and agreement.
              </li>
            </ul>
          </>
        ),
      },
    ],
    [],
  );

  return (
    <div className="container py-4">
      <header className="mb-4">
        <h1 className="mb-2">Membership Covenant & Articles of Stewardship</h1>
        <p className="text-muted mb-0">
          The Way of Messiah — A Declaration of Faith, Jurisdiction, Fellowship,
          and Stewardship under Yahuah Elohim.
        </p>
      </header>

      {/* Quick navigation */}
      <nav className="mb-4">
        <div className="d-flex flex-wrap gap-2">
          {sections.map((s) => (
            <a
              key={s.id}
              className="btn btn-sm btn-outline-secondary"
              href={`#${s.id}`}
            >
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Covenant sections */}
      <div className="vstack gap-3">
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="card">
            <div className="card-body">
              <h2 className="h5">{s.title}</h2>
              <div className="mt-3">{s.body}</div>
            </div>
          </section>
        ))}
      </div>

      {/* Acknowledgement + CTA */}
      <section className="card mt-4">
        <div className="card-body">
          <h2 className="h5">Acknowledgement</h2>
          <p className="text-muted">
            Checking this box does not submit a membership request by itself. It
            confirms you have read and understand the covenant before
            proceeding.
          </p>

          <div className="form-check">
            <input
              id="ack"
              className="form-check-input"
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="ack">
              I have read and understand the Membership Covenant & Articles of
              Stewardship.
            </label>
          </div>

          <div className="d-flex gap-2 flex-wrap mt-3">
            <Link
              className={`btn btn-primary ${accepted ? "" : "disabled"}`}
              to="/the-assembly/memberships/request"
              aria-disabled={!accepted}
            >
              Request Membership
            </Link>

            <Link
              className="btn btn-outline-secondary"
              to="/the-assembly/memberships/question"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
