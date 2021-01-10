import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "./ContractorNavBar.css";

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
            <Button variant="danger" size="md" href="/ContractorHome">
              My Jobs
            </Button>
            <Button variant="danger" size="md" href="/SearchJobs">
              Search
            </Button>
            <Button variant="danger" size="md" href="/">
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
