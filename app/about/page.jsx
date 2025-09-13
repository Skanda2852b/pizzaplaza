import React from "react";
import Navbar from "@/components/navbar";
const about = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-yellow-50 to-yellow-100 pb-16">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-red-700 text-center mt-12 mb-12">
          🍕 About & Contact
        </h1>

        {/* About Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 hover:shadow-red-200 transition-shadow">
          <h2 className="text-3xl font-bold mb-6 text-red-600">
            About Pizza Plaza
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-red-600">
              Pizza Plaza
            </span>
            ! We are
            passionate about
            bringing you the
            most delicious
            pizzas with fresh
            ingredients and
            authentic flavors.
            From classic
            Margherita to
            gourmet Pepperoni,
            our menu has
            something for
            everyone. Our
            mission is to make
            every bite a
            delight and every
            visit
            unforgettable!
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-start hover:shadow-red-200 transition-shadow">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-red-600">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-3">
              <span className="font-semibold text-red-600">
                Phone:
              </span>{" "}
              +91 98765 43210
            </p>
            <p className="text-gray-700 mb-3">
              <span className="font-semibold text-red-600">
                Email:
              </span>{" "}
              support@pizzaplaza.com
            </p>
            <p className="text-gray-700 mb-3">
              <span className="font-semibold text-red-600">
                Address:
              </span>{" "}
              123 Pizza
              Street,
              Bangalore, India
            </p>
          </div>

          {/* Contact Form */}
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-700"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-700"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-700"
            ></textarea>
            <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition transform hover:-translate-y-0.5 shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default about;
