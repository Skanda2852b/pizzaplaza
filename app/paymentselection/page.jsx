"use client";

import React, {
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentPage = () => {
  const [
    selected,
    setSelected,
  ] = useState("");
  const [
    username,
    setUsername,
  ] = useState(""); // 👈 take username input
  const [email, setEmail] =
    useState(""); // 👈 take email input
  const router = useRouter();

  const handleConfirm =
    async () => {
      if (!selected) return;

      // fetch cart from localStorage
      let items = [];
      try {
        const saved =
          localStorage.getItem(
            "pizzaplaza_cart"
          );
        items = saved
          ? JSON.parse(saved)
          : [];
      } catch {
        items = [];
      }

      if (
        !items ||
        items.length === 0
      ) {
        toast.error(
          "Your cart is empty. Add items before paying."
        );
        return;
      }

      if (
        !username ||
        !email
      ) {
        toast.error(
          "Please enter your username and email before confirming."
        );
        return;
      }

      // match schema: only name + quantity
      const pizzas =
        items.map((p) => ({
          name: p.name,
          quantity:
            p.quantity,
        }));

      try {
        const res =
          await fetch(
            "/api/orders",
            {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/json",
              },
              body: JSON.stringify(
                {
                  username,
                  email,
                  pizzas,
                }
              ),
            }
          );

        if (!res.ok) {
          let msg =
            "Failed to create order";
          try {
            const data =
              await res.json();
            if (data?.error)
              msg =
                data.error;
          } catch {}
          throw new Error(
            msg
          );
        }

        const respData =
          await res.json();
        const orderId =
          respData?._id || "";

        // clear cart on success
        localStorage.removeItem(
          "pizzaplaza_cart"
        );

        toast.success(
          orderId
            ? `Order placed! #${orderId}`
            : "Order placed successfully!",
          { autoClose: 1500 }
        );

        setTimeout(() => {
          router.push(
            "/timefordelivery"
          );
          toast.success(
            "Your order has been placed!"
          );
        }, 1200);
      } catch (e) {
        const msg =
          e?.message ||
          "Could not place order. Please try again.";
        toast.error(msg);
      }
    };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-yellow-50 to-yellow-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-red-700 text-center mb-12">
        💳 Select Payment
        Method
      </h1>

      {/* User Info */}
      <div className="w-full max-w-md mb-8 bg-white p-6 rounded-2xl shadow-lg border border-red-100">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-red-800 mb-1 ml-1">
              Receiver's Name
            </label>
            <input
              type="text"
              placeholder="Enter receiver's name"
              value={username}
              onChange={(e) =>
                setUsername(
                  e.target
                    .value
                )
              }
              className="w-full text-red-500 p-3 border border-red-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-200 bg-red-50 placeholder-red-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-red-800 mb-1 ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target
                    .value
                )
              }
              className="w-full text-red-500 p-3 border border-red-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-200 bg-red-50 placeholder-red-300"
            />
          </div>
        </div>
      </div>

      {/* Payment Options */}
      <div className="flex flex-col sm:flex-row gap-6 max-w-3xl w-full mb-8">
        {[
          {
            id: "upi",
            label: "UPI",
          },
          {
            id: "cod",
            label:
              "Cash on Delivery",
          },
          {
            id: "credit",
            label:
              "Credit Card",
          },
          {
            id: "debit",
            label:
              "Debit Card",
          },
        ].map((method) => (
          <button
            key={method.id}
            onClick={() =>
              setSelected(
                method.id
              )
            }
            className={`flex-1 border rounded-2xl px-6 py-4 font-semibold text-lg transition ${
              selected ===
              method.id
                ? "bg-red-600 text-white border-red-600 shadow-lg"
                : "bg-white text-red-700 border-red-300 hover:bg-red-50"
            }`}
          >
            {method.label}
          </button>
        ))}
      </div>

      {/* Confirm Payment */}
      <button
        disabled={!selected}
        onClick={
          handleConfirm
        }
        className={`bg-red-600 text-white px-10 py-3 rounded-full font-bold hover:bg-red-700 transition shadow-lg ${
          !selected
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
      >
        Confirm Payment
      </button>
    </div>
  );
};

export default PaymentPage;
