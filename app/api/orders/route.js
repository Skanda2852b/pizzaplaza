import connectionToDatabase from "../../lib/db";
import Order from "../models/order";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectionToDatabase();

    const { username, email, pizzas } = await request.json();

    // validation
    if (!username || !email) {
      return NextResponse.json(
        { message: "username and email are required" },
        { status: 400 }
      );
    }

    if (!Array.isArray(pizzas) || pizzas.length === 0) {
      return NextResponse.json(
        { message: "pizzas array is required and cannot be empty" },
        { status: 400 }
      );
    }

    // Normalize each pizza object
    const cleanPizzas = pizzas.map(p => ({
      name: p.name,
      quantity: p.quantity
    }));

    const newOrder = new Order({ username, email, pizzas: cleanPizzas });
    await newOrder.save();

    return NextResponse.json(
      { message: "Order created", orderId: newOrder._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error is from orders/route", error);
    return NextResponse.json(
      { message: "Error creating order", error: error.message },
      { status: 500 }
    );
  }
}
