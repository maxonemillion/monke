import React from "react";
import { Jumbotron, Container, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Binary from "../../components/video/BinaryRainFHDLoop.webm";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page" id="homePage">
      <div id="viewContent">
        {/* <video autoPlay loop muted>
          <source src={Binary} type="video/webm" />
        </video> */}
        <Jumbotron>
          <h1 className="display-1">Welcome, Coders!</h1>
          <Row>
            <Col>
              <Button size="lg" id="getStarted" variant="danger">
                Get Started!
              </Button>

              <Button size="lg" id="loginHome" variant="secondary">
                Login Here!
              </Button>
            </Col>
          </Row>
        </Jumbotron>

        <Container>
          <Row>
            <Col>
              <Card className="listing">
                <Card.Body>
                  <Card.Title>
                    <h2>Card Title</h2>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="listing">
                <Card.Body>
                  <Card.Title>
                    <h2>Card Title</h2>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
