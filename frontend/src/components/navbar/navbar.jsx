import React from "react";
import "./Navbar.css";
import pizzaCursor from "../../assets/pizzacurso.png";

export default function Navbar() {
  return (
    <header className="navbar">
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


     