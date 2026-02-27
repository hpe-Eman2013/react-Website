import express from "express";
import Stripe from "stripe";

const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

function getFrontendUrl(req) {
  return process.env.FRONTEND_URL || `${req.protocol}://${req.get("host")}`;
}

router.post("/checkout", async (req, res) => {
  try {
    const { mode, amount } = req.body || {};
    const amt = Number(amount);

    if (!mode || !["one_time", "monthly"].includes(mode)) {
      return res.status(400).json({ message: "Invalid mode." });
    }
    if (!Number.isFinite(amt) || amt < 1) {
      return res.status(400).json({ message: "Amount must be at least $1." });
    }

    const frontend = getFrontendUrl(req);

    // Success/cancel URLs (create these pages later if you want; ok as routes now)
    const successUrl = `${frontend}/giving?success=1`;
    const cancelUrl = `${frontend}/giving?canceled=1`;

    let session;

    if (mode === "one_time") {
      session = await stripe.checkout.sessions.create({
        mode: "payment",
        success_url: successUrl,
        cancel_url: cancelUrl,
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: { name: "Donation (One-Time)" },
              unit_amount: Math.round(amt * 100),
            },
            quantity: 1,
          },
        ],
      });
    } else {
      const priceId = process.env.STRIPE_MONTHLY_PRICE_ID;
      if (!priceId) {
        return res
          .status(500)
          .json({ message: "Monthly price is not configured." });
      }

      // For monthly, amount is informational unless you create multiple monthly prices.
      // If you want variable monthly amounts, we can generate prices on the fly, but
      // most orgs pre-create a few fixed tiers ($10/$25/$50).
      session = await stripe.checkout.sessions.create({
        mode: "subscription",
        success_url: successUrl,
        cancel_url: cancelUrl,
        line_items: [{ price: priceId, quantity: 1 }],
      });
    }

    return res.json({ url: session.url });
  } catch (e) {
    console.error("donation checkout error:", e);
    return res.status(500).json({ message: "Unable to start checkout." });
  }
});

export default router;
