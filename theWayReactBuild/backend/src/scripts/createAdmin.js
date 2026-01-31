import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import AdminUser from "../models/AdminUser.js";

dotenv.config();

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);

  const username = process.argv[2];
  const password = process.argv[3];

  if (!username || !password) {
    console.error("Usage: node scripts/createAdmin.js <username> <password>");
    process.exit(1);
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const result = await AdminUser.updateOne(
    { username },
    {
      $setOnInsert: {
        username,
        passwordHash,
        role: "admin",
        disabled: false,
      },
    },
    { upsert: true },
  );

  console.log("✅ Admin user ensured:", username);
  console.log(result);

  await mongoose.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
