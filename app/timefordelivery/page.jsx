"use client";

import React, {
  useState,
  useEffect,
} from "react";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";

const Page = () => {
  // 30 minutes in seconds
  const [
    timeLeft,
    setTimeLeft,
  ] = useState(30 * 60);

  // Predefined pizza positions and sizes to avoid hydration mismatch
  const floatingPizzas = [
    {
      id: 1,
      left: "5%",
      top: "15%",
      size: "28px",
      delay: 0,
      duration: 5,
    },
    {
      id: 2,
      left: "90%",
      top: "20%",
      size: "22px",
      delay: 0.5,
      duration: 6,
    },
    {
      id: 3,
      left: "75%",
      top: "80%",
      size: "35px",
      delay: 1,
      duration: 7,
    },
    {
      id: 4,
      left: "10%",
      top: "70%",
      size: "25px",
      delay: 1.5,
      duration: 5.5,
    },
    {
      id: 5,
      left: "50%",
      top: "50%",
      size: "32px",
      delay: 2,
      duration: 6.5,
    },
    {
      id: 6,
      left: "25%",
      top: "35%",
      size: "26px",
      delay: 2.5,
      duration: 5.8,
    },
    {
      id: 7,
      left: "80%",
      top: "45%",
      size: "30px",
      delay: 3,
      duration: 6.2,
    },
    {
      id: 8,
      left: "15%",
      top: "85%",
      size: "24px",
      delay: 3.5,
      duration: 5.7,
    },
    {
      id: 9,
      left: "65%",
      top: "25%",
      size: "29px",
      delay: 4,
      duration: 6.8,
    },
    {
      id: 10,
      left: "40%",
      top: "15%",
      size: "27px",
      delay: 4.5,
      duration: 5.9,
    },
    {
      id: 11,
      left: "30%",
      top: "55%",
      size: "31px",
      delay: 5,
      duration: 6.3,
    },
    {
      id: 12,
      left: "85%",
      top: "65%",
      size: "23px",
      delay: 5.5,
      duration: 5.6,
    },
    {
      id: 13,
      left: "20%",
      top: "40%",
      size: "33px",
      delay: 6,
      duration: 6.7,
    },
    {
      id: 14,
      left: "70%",
      top: "90%",
      size: "26px",
      delay: 6.5,
      duration: 5.4,
    },
    {
      id: 15,
      left: "45%",
      top: "75%",
      size: "28px",
      delay: 7,
      duration: 6.1,
    },
    {
      id: 16,
      left: "60%",
      top: "35%",
      size: "30px",
      delay: 7.5,
      duration: 5.8,
    },
    {
      id: 17,
      left: "35%",
      top: "90%",
      size: "25px",
      delay: 8,
      duration: 6.4,
    },
    {
      id: 18,
      left: "55%",
      top: "20%",
      size: "29px",
      delay: 8.5,
      duration: 5.7,
    },
    {
      id: 19,
      left: "25%",
      top: "60%",
      size: "27px",
      delay: 9,
      duration: 6.2,
    },
    {
      id: 20,
      left: "75%",
      top: "50%",
      size: "32px",
      delay: 9.5,
      duration: 5.9,
    },
  ];

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval =
      setInterval(() => {
        setTimeLeft(
          (prev) => prev - 1
        );
      }, 1000);

    return () =>
      clearInterval(interval);
  }, [timeLeft]);

  // Convert seconds to mm:ss
  const formatTime = (
    seconds
  ) => {
    const mins = Math.floor(
      seconds / 60
    );
    const secs = seconds % 60;
    return `${mins
      .toString()
      .padStart(
        2,
        "0"
      )}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-red-50 to-yellow-50 relative overflow-hidden">
        {/* Floating pizza elements */}
        {floatingPizzas.map(
          (pizza) => (
            <motion.div
              key={pizza.id}
              className="absolute pointer-events-none z-0 opacity-20"
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

        <motion.h1
          className="text-4xl font-bold text-red-700 mb-6 text-center"
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          ⏳ Your delicious
          pizza will arrive
          in:
        </motion.h1>

        <motion.div
          className="text-5xl font-extrabold text-gray-800 bg-white p-8 rounded-3xl shadow-xl mb-6"
          initial={{
            scale: 0.8,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          {formatTime(
            timeLeft
          )}
        </motion.div>

        {timeLeft === 0 && (
          <motion.p
            className="mt-6 text-xl text-red-600 font-semibold"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            Time's up! Your
            pizza should be
            here any moment!
            🍕
          </motion.p>
        )}

        <motion.div
          className="mt-8 text-center text-gray-600 max-w-md"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
        >
          <p className="mb-2">
            While you wait,
            why not explore
            our menu for your
            next order?
          </p>
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full shadow-md transition"
            onClick={() =>
              (window.location.href =
                "/pizzalist")
            }
          >
            Browse Menu
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default Page;
