import mongoose from "mongoose";

const TestimonySchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, default: "Anonymous" },

    // The testimony itself (existing)
    message: { type: String, trim: true, required: true },

    // NEW: photo/avatar (store URL/path)
    avatarUrl: { type: String, default: "" },

    // NEW: short comment (100 words max enforced server-side too)
    comment: { type: String, trim: true, default: "" },

    // NEW: location
    location: {
      country: { type: String, trim: true, default: "" },
      state: { type: String, trim: true, default: "" }, // state/province
      city: { type: String, trim: true, default: "" },
      postalCode: { type: String, trim: true, default: "" }, // zip/province code
    },

    // NEW: request response
    requestResponse: { type: Boolean, default: false },

    // OPTIONAL but strongly recommended if requestResponse=true:
    contactEmail: { type: String, trim: true, default: "" },

    // NEW: public reactions (for other visitors to click)
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },

    approved: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const Testimony = mongoose.model("Testimony", TestimonySchema);

export default Testimony;
