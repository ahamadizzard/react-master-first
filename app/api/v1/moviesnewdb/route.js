import { NextResponse } from "next/server";
import { db } from "@/lib/mongodb";

export const GET = async (req) => {
  // Get Movies from the MongoDB
  try {
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
