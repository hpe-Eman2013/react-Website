import mongoose from "mongoose";

const AdminUserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true },
    // optional role
    role: { type: String, enum: ["admin"], default: "admin" },
    disabled: { type: Boolean, default: false },
  },
  { timestamps: true },
);
const AdminUser = mongoose.model("AdminUser", AdminUserSchema);
export default AdminUser;
