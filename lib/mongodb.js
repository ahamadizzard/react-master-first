import { MongoClient } from "mongodb";

const options = {};
const MONGODB_URI = process.env.MONGODB_URI;

const client = new MongoClient(MONGODB_URI, options);

//databsase instance
export const db = client.db("sample_mflix");

//Mongodb client
const clientPromise = () => {
  if (!MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "DATABASE_URI"');
  }

  const client = new MongoClient(MONGODB_URI, options);
  return client.connect();
};
