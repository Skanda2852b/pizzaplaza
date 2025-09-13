"use client";

import React, {
  useState,
  useEffect,
} from "react";
import Image from "next/image";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowLeft,
  ChefHat,
} from "lucide-react";
import Link from "next/link";

// Import images directly
import pepperoni from "../../assets/pepperoni-artisan-pizza.jpg";
import margherita from "../../assets/margherita-pizza.jpg";
import hawaiin from "../../assets/hawaiin-style-1.jpg";
import italianen from "../../assets/italianen-bakken-langste-pizza-wereld.jpg";
import chicago from "../../assets/Chicago-Deep-Dish-Pizza.jpg.webp";
import detroit from "../../assets/Detroit-Pizza.jpg.webp";
import meatball from "../../assets/Meatball-Pizza.jpg.webp";
import newyork from "../../assets/New-York-Style-Pizza.jpg.webp";
import roman from "../../assets/Roman-Style-Pizza.jpg.webp";
import sicilian from "../../assets/Sicilian-Pizza.jpg.webp";
import stlouis from "../../assets/St.-Louis-Pizza.jpg.webp";
import strom from "../../assets/Stromboli.jpg.webp";
import pnClassic from "../../assets/PN_Classic_SprGourmet_1920x1440-1024x768.jpg";

const CART_KEY =
  "pizzaplaza_cart";

// Map pizza IDs to imported images
const pizzaImageMap = {
  1: pepperoni,
  2: margherita,
  3: hawaiin,
  4: italianen,
  5: chicago,
  6: detroit,
  7: meatball,
  8: newyork,
  9: roman,
  10: sicilian,
  11: stlouis,
  12: strom,
  13: pnClassic,
};

const CartPage = () => {
  const [cart, setCart] =
    useState([]);
  const [
    isMounted,
    setIsMounted,
  ] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Load cart from localStorage only on client side
    try {
      const saved =
        localStorage.getItem(
          CART_KEY
        );
      if (saved) {
        const parsedCart =
          JSON.parse(saved);
        setCart(parsedCart);
      }
    } catch {
      // Fallback to empty cart if parsing fails
      setCart([]);
    }
  }, []);

  // Persist cart
  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem(
          CART_KEY,
          JSON.stringify(cart)
        );
      } catch {}
    }
  }, [cart, isMounted]);

  // Remove item with confirmation
  const removeItem = (id) => {
    if (
      confirm(
        "Are you sure you want to remove this item?"
      )
    ) {
      setCart(
        cart.filter(
          (item) =>
            item.id !== id
        )
      );
    }
  };

  // Update quantity safely
  const updateQuantity = (
    id,
    value
  ) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                Math.max(
                  1,
                  Math.min(
                    10,
                    value || 1
                  )
                ),
            }
          : item
      )
    );
  };

  // Calculate totals
  const subtotal =
    cart.reduce(
      (sum, item) =>
        sum +
        item.price *
          item.quantity,
      0
    );
  const tax = subtotal * 0.05; // 5% tax
  const deliveryFee =
    subtotal > 0 ? 40 : 0;
  const total =
    subtotal +
    tax +
    deliveryFee;

  // Only render content after component is mounted to avoid hydration issues
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-red-50 via-yellow-50 to-yellow-100 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p>
            Loading your
            cart...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-yellow-50 to-yellow-100 p-6 relative overflow-hidden">
      {/* Floating pizza emojis */}
      <div className="absolute top-10 left-10 text-4xl opacity-10 animate-pulse">
        🍕
      </div>
      <div className="absolute top-1/3 right-16 text-3xl opacity-10 animate-bounce">
        🍕
      </div>
      <div className="absolute bottom-40 left-20 text-5xl opacity-10 animate-pulse">
        🍕
      </div>
      <div className="absolute bottom-1/4 right-10 text-3xl opacity-10 animate-bounce">
        🍕
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <Link
            href="/pizzalist"
            className="inline-flex items-center text-red-600 hover:text-red-800 mb-4 transition"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />{" "}
            Continue Shopping
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-red-700 mb-3">
            🛒 Your Cart
          </h1>
          <p className="text-gray-600">
            {cart.length} item
            {cart.length !== 1
              ? "s"
              : ""}{" "}
            in your cart
          </p>
        </div>

        {cart.length === 0 ? (
          // Empty Cart State
          <div className="text-center bg-white rounded-3xl shadow-lg p-10 max-w-md mx-auto">
            <div className="animate-bounce mb-6">
              <ShoppingBag className="h-16 w-16 text-red-600 mx-auto" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Your cart is
              empty
            </h2>
            <p className="text-gray-600 mb-6">
              Looks like you
              haven't added
              any delicious
              pizzas to your
              cart yet!
            </p>
            <Link
              href="/pizzalist"
              className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition inline-flex items-center justify-center gap-2"
            >
              <ChefHat className="h-5 w-5" />{" "}
              Explore Menu
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Cart Items */}
            {cart.map(
              (item) => (
                <div
                  key={
                    item.id
                  }
                  className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="w-32 h-32 relative flex-shrink-0 mb-4 md:mb-0">
                    <Image
                      src={
                        pizzaImageMap[
                          item
                            .id
                        ] ||
                        pizzaImageMap[1]
                      }
                      alt={
                        item.name
                      }
                      fill
                      className="object-cover rounded-xl"
                      sizes="128px"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 md:ml-8 text-center md:text-left">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {
                        item.name
                      }
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      {
                        item.description
                      }
                    </p>
                    <p className="text-red-600 font-bold text-xl mt-2">
                      ₹
                      {
                        item.price
                      }
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3 mt-4 md:mt-0">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity -
                            1
                        )
                      }
                      className={`w-10 h-10 flex items-center justify-center rounded-full transition ${
                        item.quantity <=
                        1
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-gray-100 text-red-600 hover:bg-red-100"
                      }`}
                      disabled={
                        item.quantity <=
                        1
                      }
                    >
                      <Minus className="h-4 w-4" />
                    </button>

                    <span className="w-12 text-black text-center text-lg font-semibold">
                      {
                        item.quantity
                      }
                    </span>

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity +
                            1
                        )
                      }
                      className={`w-10 h-10 flex items-center justify-center rounded-full transition ${
                        item.quantity >=
                        10
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-red-100 text-red-600 hover:bg-red-200"
                      }`}
                      disabled={
                        item.quantity >=
                        10
                      }
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Item Total and Remove Button */}
                  <div className="flex flex-col items-center md:items-end mt-4 md:mt-0 md:ml-6">
                    <p className="text-xl font-bold text-red-700 mb-2">
                      ₹
                      {(
                        item.price *
                        item.quantity
                      ).toFixed(
                        2
                      )}
                    </p>
                    <button
                      onClick={() =>
                        removeItem(
                          item.id
                        )
                      }
                      className="text-red-600 hover:text-red-800 flex items-center transition"
                    >
                      <Trash2 className="h-5 w-5 mr-1" />{" "}
                      Remove
                    </button>
                  </div>
                </div>
              )
            )}

            {/* Order Summary */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Subtotal
                  </span>
                  <span className="font-semibold">
                    ₹
                    {subtotal.toFixed(
                      2
                    )}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Tax (5%)
                  </span>
                  <span className="font-semibold">
                    ₹
                    {tax.toFixed(
                      2
                    )}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Delivery
                    Fee
                  </span>
                  <span className="font-semibold">
                    {deliveryFee >
                    0
                      ? `₹${deliveryFee.toFixed(
                          2
                        )}`
                      : "Free"}
                  </span>
                </div>

                <div className="flex justify-between text-xl font-bold text-red-700 pt-4 border-t">
                  <span>
                    Total
                  </span>
                  <span>
                    ₹
                    {total.toFixed(
                      2
                    )}
                  </span>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-4 mb-6">
                <p className="text-yellow-800 text-sm flex items-center">
                  <span className="text-lg mr-2">
                    🎉
                  </span>
                  You qualify
                  for free
                  delivery on
                  orders over
                  ₹500!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/pizzalist"
                  className="bg-white text-red-600 border border-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition text-center flex-1"
                >
                  Add More
                  Items
                </Link>

                <Link
                  href="/paymentselection"
                  className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition shadow-lg text-center flex-1 flex items-center justify-center gap-2"
                >
                  Proceed to
                  Checkout{" "}
                  <ShoppingBag className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
