import React, { useState } from "react";
import cashappQr from "@/assets/images/cashapp-qr.png";
import "@/assets/css/GivingPage.css";

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
    <main className="container wom-giving">
      <header className="wom-giving-header">
        <h1>Giving / Donations</h1>
        <p className="text-muted">
          Thank you for supporting the work of The Way of Messiah.
        </p>
      </header>

      <section className="wom-giving-grid">
        {/* CashApp */}
        <article className="card wom-giving-card">
          <div className="card-body">
            <h2 className="h4">CashApp</h2>
            <p className="text-muted">Send directly via CashApp:</p>

            <div className="wom-cashapp-row">
              <code className="wom-cashapp-tag">{CASHAPP_TAG}</code>
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={copyCashTag}
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            {/* Optional QR block: add an image later */}
            <div
              className="wom-qr-placeholder"
              aria-label="CashApp QR placeholder"
            >
              <img
                src={cashappQr}
                alt="CashApp QR code for $theWayOfYah"
                className="wom-qr"
              />
            </div>

            <p className="wom-help">
              Tip: include a note like “Donation” in your CashApp memo.
            </p>
          </div>
        </article>

        {/* Stripe */}
        <article className="card wom-giving-card">
          <div className="card-body">
            <h2 className="h4">Give Online (Stripe)</h2>
            <p className="text-muted">
              Choose one-time or monthly giving using our secure online
              platform.
            </p>

            {/* One-time amount */}
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

            {/* Monthly tiers (best practice) */}
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

        {/* Non-cash contributions */}
        <article className="card wom-giving-card wom-giving-wide">
          <div className="card-body">
            <h2 className="h4">Non-Cash Contributions</h2>
            <p className="text-muted">
              You can also donate stock, mutual funds, trusts, etc. Please
              contact us and we’ll provide instructions.
            </p>
            <a className="btn btn-outline-primary" href="/who-are-we/contact">
              Contact Us
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
