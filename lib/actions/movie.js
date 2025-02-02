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

//update movie
export async function updateMovie(id, data) {
  const res = await fetch(`/api/movies/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

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
