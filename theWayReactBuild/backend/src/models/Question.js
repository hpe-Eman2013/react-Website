import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, required: true },
    question: { type: String, required: true },
    answered: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model("Question", QuestionSchema);
