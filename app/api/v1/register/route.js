import { NextResponse } from "next/server";
import clientPromise from "../../../libs/mongodb";
import bcrypt from "bcrypt";

export const POST = async (req) => {
  try {
    const { name, email, password } = await req.json();
    // console.log("Login Data arrived at route.js. - ", name, email, password);

    //backend validation
    if (!name || !email || !password) {
      return NextResponse.json(
        {
          error: "Please provide all the required fields",
        },
        { status: 400 } // Bad Request
      );
    }

    //TODO: you can add further validations here

    // Bind Database
    const client = await clientPromise();
    const db = client.db("sample_mflix");

    // Find the user in the database
    const isExistingUser = await db.collection("users").findOne({ email }); // email is the key and value is the email from the request
    // console.log("isExistingUser: ", isExistingUser);

    if (isExistingUser) {
      return NextResponse.json(
        {
          error: "User already exists",
        },
        { status: 409 } // Conflict
      );
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      //   console.log("encrypted password: ", hashedPassword);
      //   Insert the user into the database
      const result = await db.collection("users").insertOne({
        name,
        email,
        password: hashedPassword,
        createdAt: new Date(),
      });
      if (result && result.acknowledged) {
        console.log("User created successfully", result);
        // Return the user data to the client
        return NextResponse.json({
          success: true,
          user: {
            userId: result.insertedId,
            name,
            email,
          },
        });
      } else {
        return NextResponse.json(
          {
            error: "User Registration failed",
          },
          { status: 500 }
        ); // Internal Server Error);
      }
    }
  } catch (error) {
    console.log("Error connecting to database: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
