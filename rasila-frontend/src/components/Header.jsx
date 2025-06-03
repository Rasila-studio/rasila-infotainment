import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h2>🎧 Rasila Infotainment</h2>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}
