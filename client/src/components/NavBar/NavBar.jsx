import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-brand">
      <Link to="/">Project 3</Link>
      </div>

      <ul className="Navbar-links">  
        
        <li className="Navbar-link">
          <Link to="/LoginPage">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
