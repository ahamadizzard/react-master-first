// //this is a simple example of an endpoint that returns an empty array of movies
// import { NextResponse } from "next/server";
// import { clientPromise } from "@/lib/mongodb";

// export const GET = async (req) => {
//   //get Movies from the database
//   try {
//     // Connect to the MongoDB cluster
//     console.log("Connecting to MongoDB...");
//     const client = await clientPromise();
//     // Make the appropriate DB calls db name here is sample_mflix
//     const db = client.db("sample_mflix");
//     // Get all the movies from the database
//     const movies = await db
//       .collection("movies") // Use the "movies" collection
//       .find({})
//       .sort({ metacritic: -1 }) // Sort in descending order
//       .limit(20) // Limit the results to 10
//       .toArray(); // Convert the cursor to an array
//     console.log("Movies Output:", movies); // Log the movies
//     return NextResponse.json(movies); // Return the movies
//   } catch (error) {
//     console.error("MONGODB Connection Error:", error); // Log the error
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// };
import { NextResponse } from "next/server";
import clientPromise from "lib/mongodb";

export const GET = async (req) => {
  // Get Movies from the MongoDB
  try {
    const client = await clientPromise();

    // sample_mflix is the database name
    const db = client.db("sample_mflix");

    // fetch movies from the database
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
