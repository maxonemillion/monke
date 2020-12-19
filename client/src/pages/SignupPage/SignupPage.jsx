import React from "react";
import { Button, Container, Form, Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignupPage.css";

function SignupPage() {
  return (
    <div>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Contractor">
          <br/>
          <Container>
            <Form id="first">
              <Form.Label>Create Contractor Account</Form.Label>
              <Form.Group>
                <Form.Control
                  id="user-email"
                  type="email"
                  placeholder="Username"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  id="user-password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  id="user-repassword"
                  type="password"
                  placeholder="Re-enter password"
                />
              </Form.Group>
              <br></br>
              <Button
                className="mb-5"
                id="signup"
                variant="primary"
                type="signup"
              >
                Signup
              </Button>
              <br></br>
              <Form.Label>
                Already have an account? <Link to="/LoginPage">Login!</Link>
              </Form.Label>
            </Form>
            <br></br>
          </Container>
        </Tab>
        <Tab eventKey="profile" title="Client">
          <br/>
          <Container>
            <Form id="link">
              <Form.Label>Create Client Account</Form.Label>
              <Form.Group>
                <Form.Control
                  id="user-email"
                  type="email"
                  placeholder="Username"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  id="user-password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  id="user-repassword"
                  type="password"
                  placeholder="Re-enter password"
                />
              </Form.Group>
              <br></br>
              <Button
                className="mb-5"
                id="signup"
                variant="primary"
                type="signup"
              >
                Signup
              </Button>
              <br></br>
              <Form.Label>
                Already have an account? <Link to="/LoginPage">Login!</Link>
              </Form.Label>
            </Form>
            <br></br>
          </Container>
        </Tab>
      </Tabs>
    </div>
  );
}

export default SignupPage;
