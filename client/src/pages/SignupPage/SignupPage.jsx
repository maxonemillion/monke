import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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
          <Button
            className="mb-5"
            id="signup"
            variant="primary"
            type="signup"
          >
            Signup
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default SignupPage;
