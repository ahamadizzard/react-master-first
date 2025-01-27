// Movies related server actions
"use server";

import clientPromise from "@/lib/mongodb";
export const createMovie = async (movie) => {
  try {
    const client = await clientPromise(); // mongoDB client
    const db = client.db("sample_mflix"); // database instance

    // create a movie
    const result = await db.collection("movies_n").insertOne(movie);
    console.log(
      "A movie was created with the following id: ",
      result.insertedId
    );
  } catch {
    // handle error
    console.log("An error occurred while creating a movie");
  }
};
