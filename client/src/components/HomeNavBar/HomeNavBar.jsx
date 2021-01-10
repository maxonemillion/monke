import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "./HomeNavBar.css";

const Navbars = () => {
  return (
    <Navbar variant="dark" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand className="brand"  href="/">
          monkë
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navbars;
