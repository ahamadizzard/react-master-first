// Movies related server actions
"use server";

import { db } from "@/lib/mongodb";

export const getAllUsers = async () => {
  try {
    // Fetch all movies
    const users = await db.collection("user").find({}).toArray();
    return users; // Return the fetched movies
  } catch (error) {
    // Handle error
    console.log("An error occurred while fetching Users: ", error);
    return [];
  }
};
