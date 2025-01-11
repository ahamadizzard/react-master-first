import { MongoClient } from "mongodb";

// Create a new function that returns a promise

const clientPromise = () => {
  const MONGODB_URI = process.env.DATABASE_URI;
  const options = {
    // serverApi: {
    //   version: ServerApiVersion.v1, // Use API version 1
    //   strict: true, // Enable strict mode
    //   deprecationErrors: true, // Enable error codes for deprecations
    // },
  };

  if (!MONGODB_URI) {
    // Check if the MONGO_URI env variable is defined
    throw new Error(
      "Invalid/Missing environment variable : NEXT_PUBLIC_DATABASE_URI"
    );
  }
  const client = new MongoClient(MONGODB_URI, options); // Create a new client
  return client.connect(); // Establish a connection to the client
};

export default clientPromise; // Export the client
