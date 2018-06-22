import React from "react";
import "../styles/Navbar.css";


// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Navbar = () => (
  <nav className="navbar">
    <a href="https://github.com/JohnRThurlby/Villister"  rel="noopener noreferrer" target="_blank">Villister</a>
  </nav>
);

export default Navbar;
