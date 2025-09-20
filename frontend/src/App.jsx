import React, { useState } from "react";
import MenuGrid from "./components/menuGrid/menuGrid";
import PromoCards from "./components/PromoCards/promoCards";
import CategoryBar from "./components/categoryBar/categoryBar";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div>
      <CategoryBar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <PromoCards />
      <MenuGrid selectedCategory={selectedCategory} />
    </div>
  );
}

