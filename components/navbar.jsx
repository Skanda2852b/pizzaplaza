"use client";

import React, {
  useState,
  useEffect,
} from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Pizza,
  Menu,
  X,
  Phone,
  MapPin,
  User,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

const Navbar = ({
  cartItemsCount = 0,
}) => {
  const [
    mobileMenuOpen,
    setMobileMenuOpen,
  ] = useState(false);
  const [
    scrolled,
    setScrolled,
  ] = useState(false);

  useEffect(() => {
    const handleScroll =
      () => {
        const isScrolled =
          window.scrollY > 10;
        setScrolled(
          isScrolled
        );
      };

    window.addEventListener(
      "scroll",
      handleScroll
    );
    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-yellow-400 text-red-800 text-sm py-2 px-4 text-center font-medium">
        <motion.div
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          🍕 Free delivery on
          orders over ₹500!
          Order now! 🍕
        </motion.div>
      </div>

      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-red-700 shadow-lg"
            : "bg-red-600"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0 flex items-center"
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <Link
                href="/"
                className="flex items-center space-x-2 group"
              >
                <motion.div
                  animate={{
                    rotate: [
                      0, 10,
                      -10, 0,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat:
                      Infinity,
                    repeatDelay: 5,
                  }}
                >
                  <Pizza className="h-8 w-8 text-yellow-300" />
                </motion.div>
                <span className="text-xl font-bold text-white group-hover:text-yellow-200 transition">
                  Pizza{" "}
                  <span className="text-yellow-300">
                    Plaza
                  </span>
                </span>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <div className="flex items-center space-x-6">
                <Link
                  href="/home"
                  className="text-white hover:text-yellow-200 transition font-medium relative group"
                >
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
                </Link>
                <Link
                  href="/pizzalist"
                  className="text-white hover:text-yellow-200 transition font-medium relative group"
                >
                  Menu
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-yellow-200 transition font-medium relative group"
                >
                  About
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-yellow-200 transition font-medium relative group"
                >
                  Contact
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <Link
                    href="/account"
                    className="flex items-center text-white hover:text-yellow-200 transition p-2"
                  >
                    <User className="h-5 w-5" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <Link
                    href="/cart"
                    className="flex items-center bg-yellow-400 text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition relative"
                  >
                    <ShoppingCart className="h-5 w-5 mr-1" />
                    Cart
                    {cartItemsCount >
                      0 && (
                      <motion.span
                        initial={{
                          scale: 0,
                        }}
                        animate={{
                          scale: 1,
                        }}
                        className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                      >
                        {
                          cartItemsCount
                        }
                      </motion.span>
                    )}
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <Link
                  href="/cart"
                  className="flex items-center bg-yellow-400 text-red-700 p-2 rounded-full font-semibold hover:bg-yellow-300 transition relative"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemsCount >
                    0 && (
                    <motion.span
                      initial={{
                        scale: 0,
                      }}
                      animate={{
                        scale: 1,
                      }}
                      className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center"
                    >
                      {
                        cartItemsCount
                      }
                    </motion.span>
                  )}
                </Link>
              </motion.div>

              <button
                onClick={() =>
                  setMobileMenuOpen(
                    !mobileMenuOpen
                  )
                }
                className="text-white hover:text-yellow-200 transition p-2 rounded-md focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height:
                  "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="md:hidden bg-red-700 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-4">
                <Link
                  href="/"
                  className="block text-white hover:text-yellow-200 transition font-medium py-2"
                  onClick={() =>
                    setMobileMenuOpen(
                      false
                    )
                  }
                >
                  Home
                </Link>
                <Link
                  href="/pizzalist"
                  className="block text-white hover:text-yellow-200 transition font-medium py-2"
                  onClick={() =>
                    setMobileMenuOpen(
                      false
                    )
                  }
                >
                  Menu
                </Link>
                <Link
                  href="/about"
                  className="block text-white hover:text-yellow-200 transition font-medium py-2"
                  onClick={() =>
                    setMobileMenuOpen(
                      false
                    )
                  }
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block text-white hover:text-yellow-200 transition font-medium py-2"
                  onClick={() =>
                    setMobileMenuOpen(
                      false
                    )
                  }
                >
                  Contact
                </Link>
                <Link
                  href="/account"
                  className="flex items-center text-white hover:text-yellow-200 transition font-medium py-2"
                  onClick={() =>
                    setMobileMenuOpen(
                      false
                    )
                  }
                >
                  <User className="h-5 w-5 mr-2" />{" "}
                  My Account
                </Link>

                <div className="pt-4 border-t border-red-500">
                  <div className="flex items-center text-white mb-2">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="text-sm">
                      +91
                      1234567890
                    </span>
                  </div>
                  <div className="flex items-center text-white">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">
                      123
                      Pizza
                      Street,
                      Food
                      City
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
