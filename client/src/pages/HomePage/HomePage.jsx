import React from "react";
import { Jumbotron, Container, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../../components/HomeNavBar/HomeNavBar"
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <NavBar />
    <div className="home-page" id="homePage">
      <div id="viewContent">
        <Jumbotron>
          <Row>
            <Col>
              <br></br>
              <Button size="lg" id="getStarted" variant="danger" href="/LoginPage">
                Login
              </Button>
              <Button size="lg" id="getStarted" variant="danger" href="/SignupPage">
                Signup
              </Button>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
