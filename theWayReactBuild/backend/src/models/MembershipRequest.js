import mongoose from "mongoose";

const CloudAssetSchema = new mongoose.Schema(
  {
    publicId: { type: String, required: true },
    secureUrl: { type: String, required: true },
    resourceType: {
      type: String,
      enum: ["image", "raw", "video"],
      required: true,
    },
    bytes: { type: Number },
    format: { type: String },
    originalFilename: { type: String },
  },
  { _id: false },
);

const MembershipRequestSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    cityState: { type: String, trim: true, default: "" },
    howHeard: { type: String, trim: true, default: "" },
    statement: { type: String, required: true },

    signatureName: { type: String, required: true, trim: true },
    signatureConsent: { type: Boolean, required: true },
    signatureAsset: { type: CloudAssetSchema, required: true },

    attachments: { type: [CloudAssetSchema], default: [] },

    status: {
      type: String,
      enum: ["pending", "approved", "denied"],
      default: "pending",
      index: true,
    },

    // ✅ Review tracking (AdminUser)
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AdminUser",
      default: null,
    },
    reviewedAt: { type: Date, default: null },
    reviewNote: { type: String, default: "" },
  },
  { timestamps: true },
);

export default mongoose.model("MembershipRequest", MembershipRequestSchema);
