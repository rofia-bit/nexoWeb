import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PromoCards = () => {
  return (
    <div className="px-4 py-6">
      <div className="max-w-7xl mx-auto relative">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
          p-2 rounded-full bg-white shadow-lg hover:shadow-xl text-orange-500 
          transition-transform duration-200 hover:scale-110"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
          p-2 rounded-full bg-white shadow-lg hover:shadow-xl text-orange-500 
          transition-transform duration-200 hover:scale-110"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* cards */}
        <div className="flex space-x-6 px-12 overflow-x-auto scrollbar-hide">
          {/* example card */}
          <div
            className="min-w-80 bg-white rounded-2xl overflow-hidden 
            shadow-md hover:shadow-xl transition duration-300 
            transform hover:-translate-y-1 hover:scale-[1.02] p-6 cursor-pointer"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">WIN COINS</h3>
            <p className="text-gray-500 mb-1">
              Play, Eat, Earn and gain points with every order.
            </p>
            <p className="text-gray-800 font-semibold">Read More</p>
          </div>

          <div
            className="min-w-80 bg-white rounded-2xl overflow-hidden 
            shadow-md hover:shadow-xl transition duration-300 
            transform hover:-translate-y-1 hover:scale-[1.02] p-6 cursor-pointer"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Our Latest Deals
            </h3>
            <p className="text-gray-500">new pizza deal !.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCards;
