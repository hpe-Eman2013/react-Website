import mongoose from "mongoose";

const EmailVerificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true, // keep this one (normal index)
    },

    codeHash: {
      type: String,
      required: true,
    },

    // IMPORTANT: no index: true here
    expiresAt: {
      type: Date,
      required: true,
    },

    attempts: {
      type: Number,
      default: 0,
    },

    resendCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    collection: "emailverifications", // force plural collection name
  },
);

// TTL index (ONLY place expiresAt is indexed)
EmailVerificationSchema.index(
  { expiresAt: 1 },
  {
    expireAfterSeconds: 0,
    name: "expiresAt_ttl",
  },
);

export default mongoose.model("EmailVerification", EmailVerificationSchema);
