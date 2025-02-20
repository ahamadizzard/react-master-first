// import { betterAuth } from "better-auth";

// import { mongodbAdapter } from "better-auth/adapters/mongodb";
// import { db } from "./mongodb";
// // import { client } from "@/db"; // your mongodb client
// // import { MongoClient } from "mongodb";

// // const client = new MongoClient(process.env.DATABASE_URI);
// // const db = client.db("sample_mflix");

// export const auth = betterAuth({
//   database: mongodbAdapter(db),
//   emailAndPassword: {
//     enabled: true,
//   },
// });
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { db } from "./mongodb";

if (!db) {
  throw new Error("MongoDB connection failed.");
}

export const auth = betterAuth({
  database: mongodbAdapter(db),
  emailAndPassword: { enabled: true },
});
