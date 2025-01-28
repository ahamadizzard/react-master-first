// Movies related server actions
"use server";

import clientPromise from "@/lib/mongodb";

export const getAllUsers = async () => {
  try {
    const client = await clientPromise(); // MongoDB client
    const db = client.db("sample_mflix"); // Database instance

    // Fetch all movies
    const users = await db.collection("user").find({}).toArray();
    // console.log("Fetched users: ", users);
    return users; // Return the fetched movies
  } catch (error) {
    // Handle error
    console.log("An error occurred while fetching Users: ", error);
    return [];
  }
};
