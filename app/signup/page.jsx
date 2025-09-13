"use client";

import axios from "axios";
import React, {
  useState,
} from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
} from "lucide-react";

const SignUpPage = () => {
  const [
    username,
    setUsername,
  ] = useState("");
  const [email, setEmail] =
    useState("");
  const [
    password,
    setPassword,
  ] = useState("");
  const [
    showPassword,
    setShowPassword,
  ] = useState(false);
  const router = useRouter();

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();
    try {
      const response =
        await axios.post(
          "/api/users",
          {
            username,
            email,
            password,
          }
        );

      router.push("/home");
      toast.success(
        response.data.message
      );
      // Handle successful signup
    } catch (error) {
      if (error.response) {
        console.log(
          "Server Error:",
          error.response.data
        );
        toast.error(
          error.response.data
            .message
        );
      } else {
        console.log(
          "Error:",
          error.message
        );
        toast.error(
          "Something went wrong"
        );
      }
    }
  };

  const togglePasswordVisibility =
    () => {
      setShowPassword(
        !showPassword
      );
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-yellow-50 to-yellow-100 p-6 relative overflow-hidden">
      {/* Enhanced floating pizza elements */}
      {/* Background Pizza Emojis */}
      <div className="absolute top-10 left-10 text-4xl opacity-10 animate-pulse">
        🍕
      </div>
      <div className="absolute top-20 right-20 text-3xl opacity-15 animate-pulse">
        🍕
      </div>
      <div className="absolute top-1/3 left-1/4 text-5xl opacity-10 animate-pulse">
        🍕
      </div>
      <div className="absolute bottom-1/4 right-10 text-3xl opacity-10 animate-pulse">
        🍕
      </div>
      <div className="absolute bottom-20 left-20 text-4xl opacity-15 animate-pulse">
        🍕
      </div>
      <div className="absolute top-40 right-1/4 text-3xl opacity-10 animate-pulse">
        🍕
      </div>
      <div className="absolute bottom-40 left-1/3 text-5xl opacity-10 animate-pulse">
        🍕
      </div>
      <div className="absolute top-1/2 right-1/3 text-4xl opacity-15 animate-pulse">
        🍕
      </div>

      {/* Extra scattered ones */}
      <div className="absolute top-5 right-5 text-2xl opacity-10 animate-pulse">
        🍕
      </div>
      <div className="absolute bottom-5 left-5 text-2xl opacity-15 animate-pulse">
        🍕
      </div>
      <div className="absolute top-1/4 right-1/5 text-5xl opacity-10 animate-pulse">
        🍕
      </div>
      <div className="absolute bottom-1/3 left-1/5 text-4xl opacity-15 animate-pulse">
        🍕
      </div>
      <div className="absolute top-2/3 right-1/6 text-3xl opacity-10 animate-pulse">
        🍕
      </div>
      <div className="absolute bottom-2/3 left-1/6 text-5xl opacity-15 animate-pulse">
        🍕
      </div>
      <div className="absolute top-3/4 left-1/2 text-4xl opacity-10 animate-pulse">
        🍕
      </div>
      <div className="absolute bottom-3/4 right-1/2 text-3xl opacity-15 animate-pulse">
        🍕
      </div>
      <div className="absolute top-1/6 left-1/3 text-4xl opacity-10 animate-pulse">
        🍕
      </div>
      <div className="absolute bottom-1/6 right-1/3 text-5xl opacity-15 animate-pulse">
        🍕
      </div>
      <div className="absolute top-1/8 left-1/8 text-3xl opacity-10 animate-pulse">
        🍕
      </div>
      <div className="absolute bottom-1/8 right-1/8 text-4xl opacity-15 animate-pulse">
        🍕
      </div>

      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md border border-red-100 transform transition-all duration-300 hover:shadow-2xl z-10">
        <div className="text-center mb-8 relative">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-red-600">
              🍕
            </span>
          </div>
          <h1 className="text-3xl font-bold text-red-700 mb-2 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text">
            Pizza Plaza
          </h1>
          <p className="text-gray-600 font-medium">
            Create your
            account to start
            ordering
          </p>
        </div>

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-6"
        >
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-red-800 mb-1"
            >
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your name"
                value={
                  username
                }
                onChange={(
                  e
                ) =>
                  setUsername(
                    e.target
                      .value
                  )
                }
                required
                className="w-full text-red-500 px-4 py-3 border border-red-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-200 bg-red-50 placeholder-red-300"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3"></div>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-red-800 mb-1"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(
                  e
                ) =>
                  setEmail(
                    e.target
                      .value
                  )
                }
                required
                className="w-full text-red-500 px-4 py-3 border border-red-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-200 bg-red-50 placeholder-red-300"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3"></div>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-red-800 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Create a password"
                value={
                  password
                }
                onChange={(
                  e
                ) =>
                  setPassword(
                    e.target
                      .value
                  )
                }
                required
                className="w-full text-red-500 px-4 py-3 border border-red-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-200 bg-red-50 placeholder-red-300 pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-red-400 hover:text-red-600 transition-colors"
                onClick={
                  togglePasswordVisibility
                }
              >
                {showPassword ? (
                  <Eye
                    size={20}
                  />
                ) : (
                  <EyeOff
                    size={20}
                  />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3.5 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <span>
              Create Account
            </span>
            <span className="text-lg">
              →
            </span>
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-red-100">
          <p className="text-center text-gray-600 text-sm">
            Already have an
            account?{" "}
            <a
              href="/signin"
              className="text-red-600 font-semibold hover:text-red-800 transition-colors duration-200 underline underline-offset-2"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
