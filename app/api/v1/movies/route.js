import { NextResponse } from "next/server";
import { db } from "@/lib/mongodb";

export const GET = async (req) => {
  // Get Movies from the MongoDB
  try {
    const movies = await db
      .collection("movies")
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();

    return NextResponse.json(movies);
  } catch (error) {
    console.log("MONGODB ERROR", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
