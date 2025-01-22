import { betterAuth } from "better-auth";

import { mongodbAdapter } from "better-auth/adapters/mongodb";
// import { client } from "@/db"; // your mongodb client
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DATABASE_URI);
const db = client.db("sample_mflix");

export const auth = betterAuth({
  database: mongodbAdapter(db),
  emailAndPassword: {
    enabled: true,
  },
});
