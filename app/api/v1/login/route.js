import { NextRequest, NextResponse } from "next/server";

export const POST = async (req) => {
  const request = await req.json();
  console.log("Login Data - ", request);

  //backend validation
  if (!name || !email || !password) {
    return NextResponse.json(
      {
        error: "Please provide all the required fields",
      },
      { status: 400 } // Bad Request
    );
  }
  // Bind Database
  // Find the user in the database
  // Validate email and password
  // Check if user exists in the database
  // Generate a JWT token
  // Return the token to the client

  return NextResponse.json({
    success: true,
    username: "izzardahamad",
  });
};
