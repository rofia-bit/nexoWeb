import React from "react";
import "./Navbar.css";
import pizzaCursor from "../../assets/pizzacurso.png";

export default function Navbar() {
  return (
    <header className="navbar">
      {/* nexo logo */}
      <div className="logo">nexo</div>

      <nav className="nav-links">
        <a href="#">Menu</a>
        <a href="#">Offers</a>
        <a href="#">Location</a>
      </nav>

      <button
        className="order-btn"
        style={{ cursor: `url(${pizzaCursor}) 16 16, pointer` }}
      >
        Order Now
      </button>
    </header>
  );
}


     {/*
    <header className="navbar">
      <div className="logo">nexo</div>
      <nav className="nav-links">
        <a href="/menu">Menu</a>
        <button onClick={() => setActiveModal("offers")}>Offers</button>
        <button onClick={() => setActiveModal("locations")}>Locations</button>
      </nav>
      <button className="order-btn" onClick={() => setActiveModal("order")}>
        Order Now
      </button>

      locations  
      <SlideModal
        isOpen={activeModal === "locations"}
        onClose={() => setActiveModal(null)}
        title="Our Locations"
      >
      </SlideModal>

      {/* order 
      <SlideModal
        isOpen={activeModal === "order"}
        onClose={() => setActiveModal(null)}
        title="Place Your Order"
      >
        {/* add phone number here, or the check the menu option or anything 
        <p>Choose your favorite pizza from our menu!</p>
        <button onClick={() => setActiveModal("menu")}>Go to Menu</button>
      </SlideModal>*/}