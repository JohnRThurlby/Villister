import React from "react";
import "./Header.css";
import logo from '../../villains.jpg';

const Header = () => (
  <div className="container-fluid">
    <header className="header">
      <img src={logo} className="header-logo animated slideInDown" alt="Villister" />
      <h1 className="header-title">Welcome to the Villister!!</h1>
    
    <p className="header-intro">
      Click on an image to earn a point. Get 12 points to win. Click the same image twice and the Villains win!
    </p>
    </header>
  </div>
);

export default Header;
