"use client";

import React, {
  useEffect,
} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChefHat,
  Star,
  Truck,
  Clock,
  Pizza,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Image imports - using the same images from your menu page
import pepperoni from "../../assets/pepperoni-artisan-pizza.jpg";
import margherita from "../../assets/margherita-pizza.jpg";
import hawaiin from "../../assets/hawaiin-style-1.jpg";

const featuredPizzas = [
  {
    id: 1,
    src: pepperoni,
    alt: "Pepperoni Pizza",
    price: "₹299",
    description:
      "Classic pepperoni with mozzarella and tomato sauce",
  },
  {
    id: 2,
    src: margherita,
    alt: "Margherita Pizza",
    price: "₹199",
    description:
      "Simple yet delicious with fresh basil and buffalo mozzarella",
  },
  {
    id: 3,
    src: hawaiin,
    alt: "Hawaiian Pizza",
    price: "₹279",
    description:
      "Sweet pineapple and ham combination with creamy cheese",
  },
];

const HomePage = () => {
  const router = useRouter();

  // Predefined pizza positions and sizes to avoid hydration mismatch - 48 pizzas!
  const floatingPizzas = [
    {
      id: 1,
      left: "5%",
      top: "10%",
      size: "28px",
      delay: 0,
      duration: 5,
    },
    {
      id: 2,
      left: "90%",
      top: "15%",
      size: "22px",
      delay: 0.5,
      duration: 6,
    },
    {
      id: 3,
      left: "75%",
      top: "75%",
      size: "35px",
      delay: 1,
      duration: 7,
    },
    {
      id: 4,
      left: "10%",
      top: "65%",
      size: "25px",
      delay: 1.5,
      duration: 5.5,
    },
    {
      id: 5,
      left: "50%",
      top: "45%",
      size: "32px",
      delay: 2,
      duration: 6.5,
    },
    {
      id: 6,
      left: "25%",
      top: "30%",
      size: "26px",
      delay: 2.5,
      duration: 5.8,
    },
    {
      id: 7,
      left: "80%",
      top: "40%",
      size: "30px",
      delay: 3,
      duration: 6.2,
    },
    {
      id: 8,
      left: "15%",
      top: "80%",
      size: "24px",
      delay: 3.5,
      duration: 5.7,
    },
    {
      id: 9,
      left: "65%",
      top: "20%",
      size: "29px",
      delay: 4,
      duration: 6.8,
    },
    {
      id: 10,
      left: "40%",
      top: "11%",
      size: "27px",
      delay: 4.5,
      duration: 5.9,
    },
    {
      id: 11,
      left: "30%",
      top: "50%",
      size: "31px",
      delay: 5,
      duration: 6.3,
    },
    {
      id: 12,
      left: "85%",
      top: "60%",
      size: "23px",
      delay: 5.5,
      duration: 5.6,
    },
    {
      id: 13,
      left: "20%",
      top: "35%",
      size: "33px",
      delay: 6,
      duration: 6.7,
    },
    {
      id: 14,
      left: "70%",
      top: "85%",
      size: "26px",
      delay: 6.5,
      duration: 5.4,
    },
    {
      id: 15,
      left: "45%",
      top: "70%",
      size: "28px",
      delay: 7,
      duration: 6.1,
    },
    {
      id: 16,
      left: "60%",
      top: "30%",
      size: "30px",
      delay: 7.5,
      duration: 5.8,
    },
    {
      id: 17,
      left: "35%",
      top: "85%",
      size: "25px",
      delay: 8,
      duration: 6.4,
    },
    {
      id: 18,
      left: "55%",
      top: "15%",
      size: "29px",
      delay: 8.5,
      duration: 5.7,
    },
    {
      id: 19,
      left: "25%",
      top: "55%",
      size: "27px",
      delay: 9,
      duration: 6.2,
    },
    {
      id: 20,
      left: "75%",
      top: "45%",
      size: "32px",
      delay: 9.5,
      duration: 5.9,
    },
    {
      id: 21,
      left: "15%",
      top: "25%",
      size: "24px",
      delay: 10,
      duration: 6.5,
    },
    {
      id: 22,
      left: "85%",
      top: "75%",
      size: "31px",
      delay: 10.5,
      duration: 5.8,
    },
    {
      id: 23,
      left: "40%",
      top: "40%",
      size: "26px",
      delay: 11,
      duration: 6.3,
    },
    {
      id: 24,
      left: "65%",
      top: "65%",
      size: "29px",
      delay: 11.5,
      duration: 5.7,
    },
    // Additional 24 pizzas for a total of 48
    {
      id: 25,
      left: "8%",
      top: "5%",
      size: "20px",
      delay: 0.2,
      duration: 4.5,
    },
    {
      id: 26,
      left: "95%",
      top: "8%",
      size: "23px",
      delay: 0.7,
      duration: 5.5,
    },
    {
      id: 27,
      left: "82%",
      top: "82%",
      size: "30px",
      delay: 1.2,
      duration: 6.5,
    },
    {
      id: 28,
      left: "5%",
      top: "72%",
      size: "26px",
      delay: 1.7,
      duration: 5.2,
    },
    {
      id: 29,
      left: "55%",
      top: "52%",
      size: "34px",
      delay: 2.2,
      duration: 6.8,
    },
    {
      id: 30,
      left: "30%",
      top: "22%",
      size: "28px",
      delay: 2.7,
      duration: 5.9,
    },
    {
      id: 31,
      left: "88%",
      top: "35%",
      size: "32px",
      delay: 3.2,
      duration: 6.3,
    },
    {
      id: 32,
      left: "12%",
      top: "88%",
      size: "22px",
      delay: 3.7,
      duration: 5.6,
    },
    {
      id: 33,
      left: "72%",
      top: "12%",
      size: "27px",
      delay: 4.2,
      duration: 6.7,
    },
    {
      id: 34,
      left: "35%",
      top: "3%",
      size: "29px",
      delay: 4.7,
      duration: 5.8,
    },
    {
      id: 35,
      left: "22%",
      top: "60%",
      size: "33px",
      delay: 5.2,
      duration: 6.4,
    },
    {
      id: 36,
      left: "92%",
      top: "68%",
      size: "21px",
      delay: 5.7,
      duration: 5.3,
    },
    {
      id: 37,
      left: "18%",
      top: "42%",
      size: "35px",
      delay: 6.2,
      duration: 6.9,
    },
    {
      id: 38,
      left: "78%",
      top: "92%",
      size: "24px",
      delay: 6.7,
      duration: 5.1,
    },
    {
      id: 39,
      left: "48%",
      top: "78%",
      size: "26px",
      delay: 7.2,
      duration: 6.2,
    },
    {
      id: 40,
      left: "62%",
      top: "25%",
      size: "31px",
      delay: 7.7,
      duration: 5.7,
    },
    {
      id: 41,
      left: "28%",
      top: "90%",
      size: "23px",
      delay: 8.2,
      duration: 6.5,
    },
    {
      id: 42,
      left: "83%",
      top: "3%",
      size: "30px",
      delay: 8.7,
      duration: 5.4,
    },
    {
      id: 43,
      left: "38%",
      top: "62%",
      size: "25px",
      delay: 9.2,
      duration: 6.6,
    },
    {
      id: 44,
      left: "82%",
      top: "52%",
      size: "32px",
      delay: 9.7,
      duration: 5.8,
    },
    {
      id: 45,
      left: "12%",
      top: "32%",
      size: "22px",
      delay: 10.2,
      duration: 6.7,
    },
    {
      id: 46,
      left: "92%",
      top: "82%",
      size: "34px",
      delay: 10.7,
      duration: 5.9,
    },
    {
      id: 47,
      left: "45%",
      top: "48%",
      size: "24px",
      delay: 11.2,
      duration: 6.3,
    },
    {
      id: 48,
      left: "68%",
      top: "72%",
      size: "28px",
      delay: 11.7,
      duration: 5.6,
    },
  ];

  useEffect(() => {
    // Replace the last history entry with the homepage
    window.history.replaceState(
      null,
      "",
      "/home"
    );

    const handleBackButton = (
      event
    ) => {
      event.preventDefault();
      // If they try to go back, just keep them here
      window.history.pushState(
        null,
        "",
        window.location.href
      );
    };

    window.addEventListener(
      "popstate",
      handleBackButton
    );

    return () => {
      window.removeEventListener(
        "popstate",
        handleBackButton
      );
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-yellow-50 overflow-hidden relative">
      {/* Enhanced floating pizza emojis in background - 48 pizzas! */}
      {floatingPizzas.map(
        (pizza) => (
          <motion.div
            key={pizza.id}
            className="absolute pointer-events-none z-0 opacity-100"
            style={{
              left: pizza.left,
              top: pizza.top,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [
                0, 5, 0,
              ],
            }}
            transition={{
              duration:
                pizza.duration,
              repeat:
                Infinity,
              delay:
                pizza.delay,
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
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute  inset-0 bg-gradient-to-r from-red-600/10 to-orange-600/10 -skew-y-3 transform origin-center"></div>
        <div className="container  mx-auto px-4 relative z-10">
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
              className="text-5xl md-text-6xl font-bold mb-6 text-red-700"
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
              Welcome to Pizza
              Plaza
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
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
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

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.6,
                duration: 0.5,
              }}
            >
              <Link href="/pizzalist">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg"
                >
                  Explore Our
                  Menu
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Pizzas Section */}
      <section className="py-16">
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
            Our Featured
            Pizzas
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPizzas.map(
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
                      0.1,
                  }}
                  whileHover={{
                    scale: 1.03,
                  }}
                >
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

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
                      <Link href="/signup">
                        <motion.button
                          whileHover={{
                            scale: 1.1,
                          }}
                          whileTap={{
                            scale: 0.95,
                          }}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full shadow-md transition"
                        >
                          Order
                          Now
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <motion.section
        className="py-12 bg-gradient-to-r from-red-600 to-orange-500 text-white my-12 rounded-2xl mx-4 shadow-xl"
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
          <Link href="/signup">
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
          </Link>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Story
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              At Pizza
              Paradise, we've
              been crafting
              delicious,
              authentic pizzas
              since 2010. Our
              secret is in our
              traditional
              methods, premium
              ingredients, and
              the passion we
              put into every
              pizza that comes
              out of our oven.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-6 rounded-2xl">
                <Pizza className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Fresh
                  Ingredients
                </h3>
                <p className="text-gray-700">
                  We source
                  only the
                  freshest
                  ingredients
                  for our
                  pizzas, from
                  our homemade
                  dough to our
                  signature
                  sauce.
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-2xl">
                <ChefHat className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Expert Chefs
                </h3>
                <p className="text-gray-700">
                  Our master
                  chefs bring
                  years of
                  experience
                  and passion
                  to create
                  the perfect
                  pizza every
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="text-center py-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to taste
          paradise?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Order now and
          experience the best
          pizza in town,
          delivered right to
          your door!
        </p>
        <Link href="/signup">
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-md"
          >
            Order Now
          </motion.button>
        </Link>
      </footer>
    </div>
  );
};

export default HomePage;
