import mongoose from "mongoose";

const TestimonyPrayerSchema = new mongoose.Schema(
  {
    // The testimony this prayer belongs to
    testimonyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Testimony",
      required: true,
      index: true,
    },

    // The verified user who submitted the prayer
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    // Optional snapshot of display name at time of submission
    posterDisplayName: {
      type: String,
      trim: true,
      default: "",
    },

    // Prayer content
    text: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1200,
    },

    // Moderation status
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
      index: true,
    },

    // Admin review tracking
    reviewedByAdminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AdminUser",
      default: null,
    },

    reviewedAt: {
      type: Date,
      default: null,
    },

    // Reason for rejection (if applicable)
    rejectReason: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { timestamps: true },
);

// Useful indexes
TestimonyPrayerSchema.index({ status: 1, createdAt: -1 });
TestimonyPrayerSchema.index({ testimonyId: 1, status: 1 });

export default mongoose.model("TestimonyPrayer", TestimonyPrayerSchema);
