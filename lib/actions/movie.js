// Movies related server actions
"use server";

import { db } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
export const createMovie = async (movie) => {
  try {
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
      return { success: false, error: "Failed to update this movie" };
    }
  } catch (error) {
    // handle error
    console.log("An error occurred while updating a movie ", error);
    return { success: false, error };
  }
};
//update movie server action
export const deleteMovie = async (id) => {
  try {
    const result = await db
      .collection("movies_n")
      .deleteOne({ _id: ObjectId.createFromHexString(id) });
    console.log(`Movie was deleted ${result.deletedCount}`);
    if (result.acknowledged) {
      return { success: true };
    } else {
      return { success: false, error: "Failed to delete movie" };
    }
  } catch (error) {
    // handle error
    console.log("An error occurred while deleting this movie ", error);
    return { success: false, error };
  }
};

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
