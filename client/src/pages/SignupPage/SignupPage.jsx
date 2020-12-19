import React from "react";
import { Button, Container, Form, Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignupPage.css";

function SignupPage() {
  return (
    <div className="signupForm">
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="tabs">
        <Tab eventKey="home" title="Contractor" className="tabs">
          <br/>
          <Container className="signup">
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
        <Tab eventKey="profile" title="Client" className="tabs">
          <br/>
          <Container className="signup">
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
