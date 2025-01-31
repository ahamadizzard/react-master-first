import { NextResponse } from "next/server";
import clientPromise from "lib/mongodb";

export const GET = async (req) => {
  // Get Movies from the MongoDB
  try {
    const client = await clientPromise();

    // sample_mflix is the database name
    const db = client.db("sample_mflix");

    // fetch movies from the database
    const moviesnewdb = await db
      .collection("movies_n")
      .find({})
      .sort({ metacritic: -1 })
      .limit(0)
      .toArray();

    return NextResponse.json(moviesnewdb);
  } catch (error) {
    console.log("MONGODB ERROR", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
