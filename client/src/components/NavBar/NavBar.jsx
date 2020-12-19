import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-brand">
<<<<<<< HEAD
      <Link to="/">Home Page</Link>
=======
        <Link to="/">Project 3</Link>
>>>>>>> 63c4eec482221475ffb20dd505efc8f293eeedc4
      </div>

      <ul className="Navbar-links">
        <li className="Navbar-link">
          <Link to="/LoginPage">Login</Link>
        </li>

        <li className="Navbar-link">
          <Link to="/PostPage">PostPage</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
