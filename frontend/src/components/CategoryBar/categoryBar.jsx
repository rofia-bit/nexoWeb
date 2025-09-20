import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dessertSVG from "../../assets/dessert.svg";
import seadfoodSVG from "../../assets/seafood.svg";
import chickenSVG from "../../assets/chicken.svg";


const categories = [
  { name: "Classic", icon: "/icons/hot.svg" },
  { name: "Chicken World", icon: chickenSVG },
  { name: "Meat Lovers", icon: "../../assets/combo.svg" },
  { name: "SEA Food", icon: seadfoodSVG },
  { name: "Desert", icon: dessertSVG },
  { name: "Drinks", icon: "../../assets/tenders.svg" },
  { name: "Hot Drinks", icon: "../../assets/seafood.svg" },
  { name: "Vennoisserie", icon: "../../assets/family.svg" },
];

const CategoryBar = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="bg-white py-4 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center space-x-8 overflow-x-auto px-12 scrollbar-hide">
        {categories.map((category) => (
          <div
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`flex flex-col items-center min-w-20 cursor-pointer group ${
              activeCategory === category.name ? "opacity-100" : "opacity-60"
            }`}
          >
            {/* Icon */}
            <img
              src={category.icon}
              alt={category.name}
              className="w-10 h-10 mb-2 object-contain"
            />

            {/* Label */}
            <span
              className={`text-sm font-medium text-center whitespace-nowrap ${
                activeCategory === category.name
                  ? "text-gray-900 border-b-2 border-orange-500 pb-1"
                  : "text-gray-500 group-hover:text-gray-800"
              }`}
            >
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;