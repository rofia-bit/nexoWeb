import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import MenuGrid from "./components/menuGrid/menuGrid";
import PromoCards from "./components/PromoCards/promoCards";
import CategoryBar from "./components/CategoryBar/categoryBar";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div>
      <Navbar />
      <CategoryBar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <PromoCards />
      <MenuGrid selectedCategory={selectedCategory} />
    </div>
  );
}

