import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "./ClientNavBar.css";

const Navbars = () => {

  const logout = () => {
    localStorage.removeItem("JWTSCRT");
  };
  
  return (
    <Navbar variant="dark" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand className="brand"  href="/">
          monkë
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Button variant="danger" size="md" href="/PostPage">
              New Job
            </Button>
            <Button variant="danger" size="md" href="/ClientHome">
              My Listings
            </Button>
            <Button variant="danger" size="md" href="/" onClick={logout}>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
