import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-brand">
      <Link to="/">Home Page</Link>
      </div>

      <ul className="Navbar-links">
        
        <li className="Navbar-link">
          <Link to="/SignupPage">Signup</Link>
        </li>

        <li className="Navbar-link">
          <Link to="/LoginPage">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
