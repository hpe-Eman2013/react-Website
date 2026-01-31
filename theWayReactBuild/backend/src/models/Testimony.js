import mongoose from "mongoose";

const TestimonySchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, default: "Anonymous" },
    message: { type: String, trim: true, required: true },
    approved: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const Testimony = mongoose.model("Testimony", TestimonySchema);

export default Testimony;
