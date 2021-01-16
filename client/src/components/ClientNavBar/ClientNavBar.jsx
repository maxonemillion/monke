import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "./ClientNavBar.css";

const Navbars = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("JWTSCRT");
    history.push('/');
  };

  return (
    <Navbar variant="dark" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand className="brand" href="/">
          monkë
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Button variant="danger" size="md">
            <Link to="/PostPage">
              New Job
              </Link>
            </Button>
            <Button variant="danger" size="md" >
            <Link to="/ClientHome">
              My Listings
              </Link>
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
