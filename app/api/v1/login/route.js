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
  //login logic
  return NextResponse.json({
    success: true,
    username: "izzardahamad",
  });
};
