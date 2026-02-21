import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      index: true,
    },
    passwordHash: { type: String, required: true },
    displayName: { type: String, trim: true, default: "" },
    emailVerified: { type: Boolean, default: false, index: true },
  },
  { timestamps: true },
);

export default mongoose.model("User", UserSchema);
