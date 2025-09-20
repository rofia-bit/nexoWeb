import React from "react";
import vegPizza from "../../assets/veg-pizza.webp";

// Example menu (replace later with API)
const menuItems = [
  {
    id: 1,
    name: "Végétarienne",
    description:
      "Mozzarella, tomates en dés, poivron, oignon rouge, Herbes italiennes",
    category: "Classic",
    image: vegPizza,
  },
  {
    id: 2,
    name: "3 fromages",
    description: "Mozzarella, cheddar, bleu cheese",
    category: "Classic",
    image: vegPizza,
  },
  {
    id: 3,
    name: "Cheese Cake",
    description: "Creamy cheesecake with a cracker crust.",
    category: "Desert",
    image: vegPizza,
  },
];

export default function MenuGrid({ selectedCategory }) {
  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Our Menu</h2>
        <p className="text-sm text-gray-500">Choose your Pizza</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
          >
            {/* image on top */}
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
            )}

            {/* text under image */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
