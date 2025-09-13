"use client";

import axios from "axios";
import React, {
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  Eye,
  EyeOff,
} from "lucide-react";

const SignInPage = () => {
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
          "/api/usersin",
          {
            email,
            password,
          }
        );
      router.replace("/home");
      toast.success(
        response.data.message
      );
      // Handle successful signin
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
      {/* Decorative floating pizza elements */}
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
        {/* Header with logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-red-600">
              🍕
            </span>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-2">
            Pizza Plaza
          </h1>
          <p className="text-gray-600 font-medium">
            Welcome back! Sign
            in to your account
          </p>
        </div>

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-6"
        >
          {/* Email Field */}
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

          {/* Password Field */}
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
                placeholder="Enter your password"
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

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-red-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-red-800"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="/forgot-password"
                className="font-semibold text-red-600 hover:text-red-800 transition-colors duration-200"
              >
                Forgot
                password?
              </a>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3.5 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <span>
              Sign In
            </span>
            <span className="text-lg">
              →
            </span>
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 pt-6 border-t border-red-100">
          <p className="text-center text-gray-600 text-sm">
            Don't have an
            account?{" "}
            <a
              href="/signup"
              className="font-semibold text-red-600 hover:text-red-800 transition-colors duration-200 underline underline-offset-2"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
