// Movies related server actions
"use server";

import { db } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
export const createMovie = async (movie) => {
  try {
    // const client = await clientPromise(); // mongoDB client
    // const db = client.db("sample_mflix"); // database instance

    // create a movie
    const result = await db.collection("movies_n").insertOne(movie);
    console.log(
      "A movie was created with the following id: ",
      result.insertedId
    );
    if (result.acknowledged) {
      return { success: true };
    } else {
      return { success: false, error: "Failed to add movie" };
    }
  } catch (error) {
    // handle error
    console.log("An error occurred while creating a movie ", error);
    return { success: false, error };
  }
};

//update movie server action
export const updateMovie = async (id, movie) => {
  try {
    const result = await db
      .collection("movies_n")
      // .updateOne({ _id: id }, { $set: movie }, { upsert: true });
      .updateOne(
        { _id: ObjectId.createFromHexString(id) },
        { $set: movie },
        { upsert: true }
      );

    console.log(
      `A movie was updated with the following id: ${result.upsertedId}`
    );
    if (result.acknowledged) {
      return { success: true };
    } else {
      return { success: false, error: "Failed to add movie" };
    }
  } catch (error) {
    // handle error
    console.log("An error occurred while creating a movie ", error);
    return { success: false, error };
  }
};

// export async function updateMovie(id, data) {
//   const res = await fetch(`/api/movies/${id}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   return res.json();
// }

//Delete movie
export async function deleteMovie(id) {
  const res = await fetch(`/api/movies/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
export async function getMovies() {
  // const res = await fetch("movies");
  const res = await fetch(`${process.env.API_BASE_URL}/v1/movies`);
  if (!res.ok) throw new Error("Failed to fetch movies");
  return await res.json();
}
export async function getMoviesNewDB() {
  // const res = await fetch("movies");
  const res_n = await fetch(`${process.env.API_BASE_URL}/v1/moviesnewdb`);
  if (!res_n.ok) throw new Error("Failed to fetch movies");
  return await res_n.json();
}
