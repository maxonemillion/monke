import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./SignupPage.css";

function SignupPage() {
  return (
    <div>
      <Container>
        <Form>
          <Form.Label>Create Account</Form.Label>
          <Form.Group>
            <Form.Control id="user-email" type="email" placeholder="Username" />
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
          <Form.Label>Already have an account? <Link to="/LoginPage">Login!</Link></Form.Label>
        </Form>
        <br></br>
      </Container>
    </div>
  );
}

export default SignupPage;
