import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "./NavBar.css";

const Navbars = () => {
  return (
    <Navbar variant="dark" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand className="brand"  href="/">
          monkë
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Button variant="danger" size="lg" href="/LoginPage">
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;

//  <nav className="Navbar">
//       <div className="Navbar-brand">
//         <Link to="/">Project 3</Link>
//       </div>

//       <ul className="Navbar-links">
//         <li className="Navbar-link">
//           <Link to="/LoginPage">Login</Link>
//         </li>
//       </ul>
//     </nav>
