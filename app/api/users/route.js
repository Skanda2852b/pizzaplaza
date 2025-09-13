import connectionToDatabase from "../../lib/db";
import User from "../models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await connectionToDatabase()
        const { username, email, password } = await request.json()
        // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
        }
        
        const newUser = new User({ username, email, password })
        await newUser.save()
        console.log('connected to db')
        return NextResponse.json(newUser, { status: 201 })
        
    } catch (error) {
        console.error("Error is from users/route", error);
  return NextResponse.json(
    { message: "Error creating user", error: error.message },
    { status: 500 }
  );
    }
}