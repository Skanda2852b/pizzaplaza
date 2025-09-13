import connectionToDatabase from "../../lib/db";
import User from "../models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectionToDatabase();

    const { email, password } = await request.json();

    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "No account found, please signup" },
        { status: 404 }
      );
    }

    // check if password matches (plain text for now)
    if (user.password !== password) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 }
      );
    }

    // login success
    return NextResponse.json(
      { message: "Signin successful", user },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error is from signin/route", error);
    return NextResponse.json(
      { message: "Error signing in", error: error.message },
      { status: 500 }
    );
  }
}
