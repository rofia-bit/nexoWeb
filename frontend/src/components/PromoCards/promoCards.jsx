import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import offerr from "../../assets/offerr.jpg";
import pizza12 from "../../assets/pizza12.jpg";

//yji m backend api
const promos = [
  {
    title: "WIN COINS",
    description: "Play, Eat, Earn and gain points with every order.",
    link: "Read More",
    image: offerr, //  backend path
  },
  {
    title: "Our Latest Deals",
    description: "new pizza deal !.",
    image: pizza12,
  },
];

const PromoCards = () => {
  return (
    <div className="px-4 py-6">
      <div className="max-w-7xl mx-auto relative">
        {/* navigation buttons */}
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

        <div className="flex space-x-6 px-12 overflow-x-auto scrollbar-hide">
          {promos.map((promo) => (
            <div
              key={promo.title}
              className="min-w-80 bg-white rounded-2xl overflow-hidden 
              shadow-md hover:shadow-xl transition duration-300 
              transform hover:-translate-y-1 hover:scale-[1.02] 
              p-6 cursor-pointer flex items-center justify-between"
            >
              <div className="flex-1 pr-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {promo.title}
                </h3>
                <p className="text-gray-500 mb-1">{promo.description}</p>
                {promo.link && (
                  <p className="text-gray-800 font-semibold">{promo.link}</p>
                )}
              </div>
              {promo.image && (
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-24 h-24 object-cover rounded-xl"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromoCards;
