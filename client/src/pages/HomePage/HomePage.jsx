import React from "react";
import Button from "react-bootstrap/Button";
import Binary from "../../components/video/BinaryRainFHDLoop.webm";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div id="homePage">
      <div id="viewContent">
      <video autoPlay loop muted>
        <source src={Binary} type="video/webm" />
      </video>
      <h1>Welcome, Coders!</h1>
      <p>
        <Button id="getStarted" variant="danger">
          Get Started!
        </Button>
      </p>
      <p>
        <Button id="loginHome" variant="secondary">
          Login Here!
        </Button>
      </p>
      </div>
    </div>
  );
};

export default HomePage;
