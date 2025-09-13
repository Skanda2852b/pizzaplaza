import React from "react";
import Link from "next/link";
import { Pizza, ChevronRight, Clock, Star, Truck, Shield } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-red-50 to-yellow-100 relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
        {/* Animated Pizza Icon */}
        <div className="animate-bounce mb-6">
          <Pizza className="h-20 w-20 text-red-600 mx-auto" />
        </div>
        
        {/* Hero Section */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-red-700 mb-6 text-center drop-shadow-lg">
          Welcome to <span className="text-yellow-500">Pizza Plaza</span>
        </h1>

        <p className="text-xl text-gray-700 mb-10 text-center max-w-2xl mx-auto leading-relaxed">
          Discover mouth-watering pizzas crafted with love. Fresh ingredients, authentic recipes, and a dash of happiness in every bite.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Link href="/signup">
            <div className="bg-red-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-red-700 transition flex items-center justify-center gap-2 font-semibold text-lg transform hover:-translate-y-1 duration-300 cursor-pointer">
              Explore Menu <ChevronRight className="h-5 w-5" />
            </div>
          </Link>
          <Link href="/signup">
            <div className="bg-white text-red-600 border-2 border-red-600 px-8 py-4 rounded-full shadow-lg hover:bg-red-50 transition font-semibold text-lg transform hover:-translate-y-1 duration-300 cursor-pointer">
              Order Now
            </div>
          </Link>
        </div>

        {/* Special Offer Banner */}
        <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-xl rounded-2xl px-8 py-6 max-w-2xl mx-auto mb-16 transform hover:scale-105 transition duration-300">
          <p className="text-2xl font-bold mb-2 text-center">🎉 Special Limited Time Offer!</p>
          <p className="text-lg text-center">Flat 20% Off on Your First Order! Use code: WELCOME20</p>
        </div>

        {/* Features Section */}
        <div className="w-full max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Pizza Plaza?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center transform hover:-translate-y-2 transition duration-300">
              <div className="text-red-600 mb-4 flex justify-center">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Hot pizza delivered in 30 minutes or less</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md text-center transform hover:-translate-y-2 transition duration-300">
              <div className="text-red-600 mb-4 flex justify-center">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Handcrafted with the finest ingredients</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md text-center transform hover:-translate-y-2 transition duration-300">
              <div className="text-red-600 mb-4 flex justify-center">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Free Delivery</h3>
              <p className="text-gray-600">On orders over ₹500</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md text-center transform hover:-translate-y-2 transition duration-300">
              <div className="text-red-600 mb-4 flex justify-center">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">100% Satisfaction</h3>
              <p className="text-gray-600">Money-back guarantee</p>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Customers Say</h2>
          
          <div className="bg-white p-8 rounded-2xl shadow-md transform hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400 mx-1" />
              ))}
            </div>
            <p className="text-xl italic text-gray-700 mb-4">
              "Best pizza I've ever had! The crust was perfectly crispy and the toppings were fresh and flavorful. Will definitely order again!"
            </p>
            <p className="font-semibold text-gray-800">- Rahul Sharma, Mumbai</p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to satisfy your pizza cravings?</h2>
          <Link href="/signup">
            <div className="bg-red-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-red-700 transition inline-flex items-center justify-center gap-2 font-semibold text-lg transform hover:-translate-y-1 duration-300 cursor-pointer">
              Order Now <ChevronRight className="h-5 w-5" />
            </div>
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-gray-500 text-sm">
          © {new Date().getFullYear()} Pizza Plaza. All rights reserved.
        </footer>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-10 animate-pulse">🍕</div>
      <div className="absolute top-1/3 right-16 text-4xl opacity-10 animate-bounce">🍕</div>
      <div className="absolute bottom-40 left-20 text-5xl opacity-10 animate-pulse">🍕</div>
      <div className="absolute bottom-1/4 right-10 text-3xl opacity-10 animate-bounce">🍕</div>
    </div>
  );
};

export default Page;