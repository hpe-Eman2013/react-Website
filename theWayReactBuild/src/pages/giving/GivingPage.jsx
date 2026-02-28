import React, { useState } from "react";
import cashappQr from "@/assets/images/giving/cashapp-qr.png";
import "@/assets/css/giving/GivingPage.css";
import {
  CreditCard,
  QrCode,
  Mail,
  Landmark,
  HeartHandshake,
} from "lucide-react";

const CASHAPP_TAG = "$theWayOfYah";

const MONTHLY_TIERS = [
  { label: "$10 / month", priceKey: "monthly_10" },
  { label: "$25 / month", priceKey: "monthly_25" },
  { label: "$50 / month", priceKey: "monthly_50" },
  { label: "$100 / month", priceKey: "monthly_100" },
];

export default function GivingPage() {
  const [amount, setAmount] = useState("25");
  const [monthlyTier, setMonthlyTier] = useState(MONTHLY_TIERS[1].priceKey); // default $25

  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copyCashTag() {
    try {
      await navigator.clipboard.writeText(CASHAPP_TAG);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }

  async function startCheckout(mode) {
    setLoading(true);
    try {
      const amt = Math.max(1, Number(amount || 0));

      const payload =
        mode === "monthly"
          ? { mode, priceKey: monthlyTier }
          : { mode, amount: amt };

      const res = await fetch("/api/donations/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.message || "Checkout failed.");
      if (data?.url) window.location.href = data.url;
    } catch (e) {
      alert(e?.message || "Checkout failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="wom-giving">
      <header className="wom-giving-hero">
        <div className="wom-giving-hero-inner">
          <div className="wom-giving-hero-icon" aria-hidden="true">
            <HeartHandshake />
          </div>

          <div>
            <h1 className="wom-giving-title">Giving / Donations</h1>

            <p className="wom-giving-subtitle">
              Thank you for supporting the work of The Way of Messiah.
            </p>

            <p className="wom-giving-purpose">
              Your gifts help build and share practical education that equips
              families and communities: trust and estate planning foundations,
              principles of equity law, agricultural planting and harvesting
              guidance, outreach preparation, and more. As Hosea 4:6 warns, “My
              people are destroyed for lack of knowledge.” Your contribution
              helps restore knowledge and strengthen stewardship—so men and
              women can walk wisely with what Yahuah has entrusted to them.
            </p>
          </div>
        </div>
      </header>

      <section className="wom-giving-section container">
        <div className="wom-giving-section-head">
          <h2 className="wom-section-title">Ways to Give</h2>
          <p className="wom-section-muted">
            Choose the method that works best for you.
          </p>
        </div>

        <div className="wom-giving-grid">
          {/* Stripe */}
          <article
            className="wom-giving-card"
            aria-label="Give Online using Stripe"
          >
            <div className="wom-card-top">
              <div className="wom-card-icon" aria-hidden="true">
                <CreditCard />
              </div>
              <div>
                <h3 className="wom-card-title">Give Online</h3>
                <p className="wom-card-muted">Secure checkout (Stripe)</p>
              </div>
            </div>

            <div className="wom-card-body">
              <label className="form-label" htmlFor="donationAmount">
                One-time amount (USD)
              </label>

              <div className="wom-amount-row">
                <span className="wom-dollar">$</span>
                <input
                  id="donationAmount"
                  className="form-control"
                  inputMode="numeric"
                  value={amount}
                  onChange={(e) =>
                    setAmount(e.target.value.replace(/[^\d]/g, ""))
                  }
                  placeholder="25"
                />
              </div>

              <div className="mt-3">
                <label className="form-label" htmlFor="monthlyTier">
                  Monthly giving (choose a tier)
                </label>

                <select
                  id="monthlyTier"
                  className="form-select"
                  value={monthlyTier}
                  onChange={(e) => setMonthlyTier(e.target.value)}
                >
                  {MONTHLY_TIERS.map((t) => (
                    <option key={t.priceKey} value={t.priceKey}>
                      {t.label}
                    </option>
                  ))}
                </select>

                <div className="form-text">
                  Monthly donations use fixed tiers for consistency and
                  subscription management.
                </div>
              </div>

              <div className="wom-btn-row">
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={loading}
                  onClick={() => startCheckout("one_time")}
                >
                  {loading ? "Redirecting..." : "Give One-Time"}
                </button>

                <button
                  type="button"
                  className="btn btn-outline-primary"
                  disabled={loading}
                  onClick={() => startCheckout("monthly")}
                >
                  {loading ? "Redirecting..." : "Give Monthly"}
                </button>
              </div>

              <p className="wom-help">
                You’ll be redirected to Stripe Checkout to complete your gift.
              </p>
            </div>
          </article>

          {/* CashApp */}
          <article className="wom-giving-card" aria-label="Give via CashApp">
            <div className="wom-card-top">
              <div className="wom-card-icon" aria-hidden="true">
                <QrCode />
              </div>
              <div>
                <h3 className="wom-card-title">CashApp</h3>
                <p className="wom-card-muted">Fast &amp; simple</p>
              </div>
            </div>

            <div className="wom-card-body">
              <img
                src={cashappQr}
                alt="CashApp QR code for $theWayOfYah"
                className="wom-qr"
              />

              <div className="wom-cashapp-row">
                <code className="wom-cashapp-tag">{CASHAPP_TAG}</code>

                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary"
                  onClick={copyCashTag}
                  title="Copy CashApp tag"
                >
                  {copied ? "Copied" : "Copy Tag"}
                </button>
              </div>

              <p className="wom-help mb-0">
                Tip: include a note like “Donation” in your CashApp memo.
              </p>
            </div>
          </article>

          {/* Give by Mail */}
          <article className="wom-giving-card" aria-label="Give by Mail">
            <div className="wom-card-top">
              <div className="wom-card-icon" aria-hidden="true">
                <Mail />
              </div>
              <div>
                <h3 className="wom-card-title">Give by Mail</h3>
                <p className="wom-card-muted">Check or money order</p>
              </div>
            </div>

            <div className="wom-card-body">
              <p className="wom-card-text">
                Mail a check or money order payable to{" "}
                <strong>The Way of Messiah Ministries</strong>.
              </p>

              <div className="wom-mail-box">
                <div className="wom-mail-line">
                  <strong>The Way of Messiah Ministries</strong>
                </div>
                <div className="wom-mail-line">P.O. BOX 46</div>
                <div className="wom-mail-line">
                  Sterling Heights, Michigan 48311
                </div>
              </div>

              <p className="wom-help mb-0">
                Please write “Donation” in the memo line.
              </p>
            </div>
          </article>

          {/* Non-cash */}
          <article
            className="wom-giving-card"
            aria-label="Non-cash contributions"
          >
            <div className="wom-card-top">
              <div className="wom-card-icon" aria-hidden="true">
                <Landmark />
              </div>
              <div>
                <h3 className="wom-card-title">Non-Cash</h3>
                <p className="wom-card-muted">Stock, funds, trusts</p>
              </div>
            </div>

            <div className="wom-card-body">
              <p className="wom-card-text">
                You can also donate stock, mutual funds, trusts, and other
                assets. Contact us and we’ll provide instructions.
              </p>

              <a className="btn btn-outline-primary" href="/who-are-we/contact">
                Contact Us
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
