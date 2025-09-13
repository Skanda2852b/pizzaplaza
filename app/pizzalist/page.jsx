"use client";

import React, {
  useState,
  useEffect,
} from "react";
import Image from "next/image";
import {
  ShoppingCart,
  ChefHat,
  Star,
  Truck,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  ToastContainer,
  toast,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../../components/navbar";

// Image imports
import pepperoni from "../../assets/pepperoni-artisan-pizza.jpg";
import PN_Classic from "../../assets/PN_Classic_SprGourmet_1920x1440-1024x768.jpg";
import margherita from "../../assets/margherita-pizza.jpg";
import italianen from "../../assets/italianen-bakken-langste-pizza-wereld.jpg";
import hawaiin from "../../assets/hawaiin-style-1.jpg";
import chicago from "../../assets/Chicago-Deep-Dish-Pizza.jpg.webp";
import detroit from "../../assets/Detroit-Pizza.jpg.webp";
import meatball from "../../assets/Meatball-Pizza.jpg.webp";
import newyork from "../../assets/New-York-Style-Pizza.jpg.webp";
import roman from "../../assets/Roman-Style-Pizza.jpg.webp";
import sicilian from "../../assets/Sicilian-Pizza.jpg.webp";
import stlouis from "../../assets/St.-Louis-Pizza.jpg.webp";
import strom from "../../assets/Stromboli.jpg.webp";

const CART_KEY =
  "pizzaplaza_cart";

const pizzas = [
  {
    id: 1,
    src: pepperoni,
    alt: "Pepperoni Pizza",
    price: "₹299",
    category: "nonveg",
    description:
      "Classic pepperoni with mozzarella and tomato sauce",
    rating: 4.8,
  },
  {
    id: 2,
    src: PN_Classic,
    alt: "PN Classic Pizza",
    price: "₹349",
    category: "nonveg",
    description:
      "Our signature pizza with special herbs and cheese blend",
    rating: 4.9,
  },
  {
    id: 3,
    src: margherita,
    alt: "Margherita Pizza",
    price: "₹199",
    category: "veg",
    description:
      "Simple yet delicious with fresh basil and buffalo mozzarella",
    rating: 4.7,
  },
  {
    id: 4,
    src: italianen,
    alt: "Italianen Pizza",
    price: "₹399",
    category: "veg",
    description:
      "Authentic Italian style with fresh vegetables and olive oil",
    rating: 4.6,
  },
  {
    id: 5,
    src: hawaiin,
    alt: "Hawaiian Pizza",
    price: "₹279",
    category: "nonveg",
    description:
      "Sweet pineapple and ham combination with creamy cheese",
    rating: 4.5,
  },
  {
    id: 6,
    src: chicago,
    alt: "Chicago Deep Dish Pizza",
    price: "₹459",
    category: "nonveg",
    description:
      "Deep pan pizza with layers of cheese, meat and chunky tomato sauce",
    rating: 4.9,
  },
  {
    id: 7,
    src: detroit,
    alt: "Detroit Pizza",
    price: "₹429",
    category: "nonveg",
    description:
      "Rectangular pizza with crispy edges and rich tomato sauce",
    rating: 4.7,
  },
  {
    id: 8,
    src: meatball,
    alt: "Meatball Pizza",
    price: "₹389",
    category: "nonveg",
    description:
      "Homemade meatballs with marinara sauce and melted cheese",
    rating: 4.8,
  },
  {
    id: 9,
    src: newyork,
    alt: "New York Style Pizza",
    price: "₹499",
    category: "nonveg",
    description:
      "Large, foldable slices with a thin crispy crust",
    rating: 4.9,
  },
  {
    id: 10,
    src: roman,
    alt: "Roman Style Pizza",
    price: "₹379",
    category: "veg",
    description:
      "Thin, crispy crust with light toppings and fresh ingredients",
    rating: 4.6,
  },
  {
    id: 11,
    src: sicilian,
    alt: "Sicilian Pizza",
    price: "₹359",
    category: "veg",
    description:
      "Thick, rectangular pizza with a fluffy crust and rich tomato sauce",
    rating: 4.5,
  },
  {
    id: 12,
    src: stlouis,
    alt: "St. Louis Pizza",
    price: "₹299",
    category: "nonveg",
    description:
      "Thin crust with Provel cheese and cut into squares",
    rating: 4.4,
  },
  {
    id: 13,
    src: strom,
    alt: "Stromboli",
    price: "₹419",
    category: "nonveg",
    description:
      "Rolled pizza dough filled with cheese, meat and vegetables",
    rating: 4.7,
  },
];

const Page = () => {
  const [filter, setFilter] =
    useState("all");
  const [
    isMounted,
    setIsMounted,
  ] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredPizzas =
    filter === "all"
      ? pizzas
      : pizzas.filter(
          (p) =>
            p.category ===
            filter
        );

  const addToCart = (
    pizza
  ) => {
    // Get current cart from localStorage
    const currentCart =
      JSON.parse(
        localStorage.getItem(
          CART_KEY
        ) || "[]"
      );

    // Check if pizza already exists in cart
    const existingItemIndex =
      currentCart.findIndex(
        (item) =>
          item.id === pizza.id
      );

    let newCart;
    if (
      existingItemIndex >= 0
    ) {
      // If exists, increase quantity
      newCart = [
        ...currentCart,
      ];
      newCart[
        existingItemIndex
      ].quantity += 1;
    } else {
      // If new, add to cart with quantity 1
      newCart = [
        ...currentCart,
        {
          id: pizza.id,
          name: pizza.alt,
          price: parseInt(
            pizza.price.replace(
              "₹",
              ""
            )
          ), // Convert price to number
          quantity: 1,
          description:
            pizza.description,
        },
      ];
    }

    // Save updated cart to localStorage
    localStorage.setItem(
      CART_KEY,
      JSON.stringify(newCart)
    );

    toast.success(
      `${pizza.alt} added to cart!`
    );
  };

  // Predefined pizza positions and sizes to avoid hydration mismatch
  const floatingPizzas = [
    {
      id: 1,
      left: "10%",
      top: "15%",
      size: "28px",
    },
    {
      id: 2,
      left: "85%",
      top: "20%",
      size: "22px",
    },
    {
      id: 3,
      left: "75%",
      top: "75%",
      size: "35px",
    },
    {
      id: 4,
      left: "15%",
      top: "65%",
      size: "25px",
    },
    {
      id: 5,
      left: "60%",
      top: "42%",
      size: "32px",
    },
    {
      id: 6,
      left: "25%",
      top: "10%",
      size: "19px",
    },
    {
      id: 7,
      left: "90%",
      top: "55%",
      size: "30px",
    },
    {
      id: 8,
      left: "40%",
      top: "85%",
      size: "26px",
    },
    {
      id: 9,
      left: "65%",
      top: "30%",
      size: "24px",
    },
    {
      id: 10,
      left: "30%",
      top: "54%",
      size: "29px",
    },
    {
      id: 11,
      left: "5%",
      top: "40%",
      size: "31px",
    },
    {
      id: 12,
      left: "60%",
      top: "5%",
      size: "18px",
    },
    {
      id: 13,
      left: "80%",
      top: "80%",
      size: "27px",
    },
    {
      id: 14,
      left: "45%",
      top: "25%",
      size: "23px",
    },
    {
      id: 15,
      left: "20%",
      top: "90%",
      size: "33px",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-yellow-50 pb-10 overflow-hidden">
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={2000}
      />

      {/* Floating pizza emojis in background - only render after mount to avoid hydration issues */}
      {isMounted &&
        floatingPizzas.map(
          (pizza) => (
            <motion.div
              key={pizza.id}
              className="absolute pointer-events-none z-0 opacity-50"
              style={{
                left: pizza.left,
                top: pizza.top,
              }}
              animate={{
                y: [
                  0, -20, 0,
                ],
                rotate: [
                  0, 5, 0,
                ],
              }}
              transition={{
                duration:
                  5 +
                  (pizza.id %
                    3),
                repeat:
                  Infinity,
                delay:
                  pizza.id *
                  0.5,
                ease: "easeInOut",
              }}
            >
              <span
                style={{
                  fontSize:
                    pizza.size,
                }}
              >
                🍕
              </span>
            </motion.div>
          )
        )}

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-600/10 -skew-y-3 transform origin-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-red-700"
              initial={{
                opacity: 0,
                y: -30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <motion.span
                animate={{
                  rotate: [
                    0, 10, 0,
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat:
                    Infinity,
                }}
                className="inline-block mr-2"
              >
                🍕
              </motion.span>
              Our Artisan
              Pizza Menu
              <motion.span
                animate={{
                  rotate: [
                    0, -10, 0,
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat:
                    Infinity,
                  delay: 1,
                }}
                className="inline-block ml-2"
              >
                🍕
              </motion.span>
            </motion.h1>
            <p className="text-xl drop-shadow-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Handcrafted
              pizzas made with
              love, premium
              ingredients, and
              traditional
              techniques for
              an unforgettable
              taste
              experience.
            </p>

            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-10"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
                duration: 0.5,
              }}
            >
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                <ChefHat
                  className="text-red-600 mr-2"
                  size={20}
                />
                <span className="text-gray-700">
                  Master Chefs
                </span>
              </div>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                <Star
                  className="text-yellow-500 mr-2"
                  size={20}
                />
                <span className="text-gray-700">
                  Premium
                  Ingredients
                </span>
              </div>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                <Truck
                  className="text-red-600 mr-2"
                  size={20}
                />
                <span className="text-gray-700">
                  Free
                  Delivery
                </span>
              </div>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                <Clock
                  className="text-red-600 mr-2"
                  size={20}
                />
                <span className="text-gray-700">
                  30 Min
                  Guarantee
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white/80 backdrop-blur-sm sticky top-16 z-20 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Filter by
              Category
            </h2>
            <div className="flex justify-center gap-4 flex-wrap">
              {[
                "all",
                "veg",
                "nonveg",
              ].map((cat) => (
                <motion.button
                  key={cat}
                  whileTap={{
                    scale: 0.9,
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                  onClick={() =>
                    setFilter(
                      cat
                    )
                  }
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md ${
                    filter ===
                    cat
                      ? cat ===
                        "veg"
                        ? "bg-green-600 text-white shadow-lg scale-105"
                        : cat ===
                          "nonveg"
                        ? "bg-red-800 text-white shadow-lg scale-105"
                        : "bg-red-600 text-white shadow-lg scale-105"
                      : cat ===
                        "veg"
                      ? "bg-white text-green-600 border border-green-600 hover:bg-green-50"
                      : cat ===
                        "nonveg"
                      ? "bg-white text-red-800 border border-red-800 hover:bg-red-50"
                      : "bg-white text-red-600 border border-red-600 hover:bg-red-50"
                  }`}
                >
                  {cat ===
                  "all"
                    ? "All Pizzas"
                    : cat ===
                      "veg"
                    ? "Vegetarian"
                    : "Non-Vegetarian"}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pizza Grid Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
            }}
          >
            {filter === "all"
              ? "Our Complete Menu"
              : filter ===
                "veg"
              ? "Vegetarian Specialties"
              : "Non-Vegetarian Delights"}
          </motion.h2>

          {filteredPizzas.length ===
          0 ? (
            <div className="text-center py-12">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 2,
                  repeat:
                    Infinity,
                  ease: "linear",
                }}
                className="text-6xl mb-4"
              >
                🍕
              </motion.div>
              <p className="text-xl text-gray-700">
                No pizzas
                found in this
                category. Try
                another
                filter!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredPizzas.map(
                (
                  pizza,
                  index
                ) => (
                  <motion.div
                    key={
                      pizza.id
                    }
                    className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col relative transition-all duration-300 hover:shadow-2xl"
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay:
                        index *
                        0.05,
                    }}
                    whileHover={{
                      scale: 1.03,
                    }}
                  >
                    {/* Veg/Non-Veg Badge */}
                    <div
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white z-10 shadow-md ${
                        pizza.category ===
                        "veg"
                          ? "bg-green-600"
                          : "bg-red-800"
                      }`}
                    >
                      {pizza.category.toUpperCase()}
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-yellow-100 px-2 py-1 rounded-full flex items-center text-xs font-semibold text-yellow-800 z-10 shadow-md">
                      <Star className="w-3 h-3 fill-yellow-500 text-yellow-500 mr-1" />
                      {
                        pizza.rating
                      }
                    </div>

                    {/* Image */}
                    <div className="relative w-full h-60 overflow-hidden">
                      <Image
                        src={
                          pizza.src
                        }
                        alt={
                          pizza.alt
                        }
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                        priority={
                          index <
                          4
                        }
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="mb-4 flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {
                            pizza.alt
                          }
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {
                            pizza.description
                          }
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-auto">
                        <span className="text-red-600 text-xl font-bold">
                          {
                            pizza.price
                          }
                        </span>
                        <motion.button
                          whileHover={{
                            scale: 1.1,
                          }}
                          whileTap={{
                            scale: 0.95,
                          }}
                          onClick={() =>
                            addToCart(
                              pizza
                            )
                          }
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full shadow-md flex items-center gap-2 transition"
                        >
                          <ShoppingCart className="h-4 w-4" />
                          Add
                          to
                          Cart
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          )}
        </div>
      </section>

      {/* Special Offers Banner */}
      <motion.section
        className="py-10 bg-gradient-to-r from-red-600 to-orange-500 text-white my-12 rounded-2xl mx-4 shadow-xl"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        viewport={{
          once: true,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            🍕 Today's Special
            Offer 🍕
          </h2>
          <p className="text-xl mb-6">
            Get 20% off on any
            two large pizzas!
            Use code:
            PIZZALOVER
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="bg-white text-red-600 px-6 py-3 rounded-full font-bold shadow-md"
          >
            Claim Offer Now
          </motion.button>
        </div>
      </motion.section>

      {/* Footer CTA */}
      <footer className="text-center py-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Craving more
          delicious pizzas?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Follow us on social
          media for exclusive
          deals, new pizza
          launches, and
          behind-the-scenes
          content from our
          kitchen!
        </p>
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-md"
        >
          Follow Us
          @PizzaParadise
        </motion.button>
      </footer>
    </div>
  );
};

export default Page;
