import React from "react";

const menuItems = [
  { id: 1, name: "Margherita Pizza", description: "Classic pizza with mozzarella.", category: "Classic" },
  { id: 2, name: "Pepperoni Pizza", description: "Spicy pepperoni & cheese.", category: "Classic" },
  { id: 3, name: "BBQ Chicken Sandwich", description: "Chicken with BBQ sauce.", category: "Desert" },
  { id: 4, name: "Fried Chicken", description: "Crispy fried chicken.", category: "Drinks" },
  { id: 5, name: "French Fries", description: "Golden crispy fries.", category: "Drinks" },
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
        <p className="text-sm text-gray-500">choose your Pizza</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200 p-4"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                </div>
                <span className="text-lg font-semibold">${item.price}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
