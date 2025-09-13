import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    pizzas: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true, min: 1 },
      }
    ],
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;
