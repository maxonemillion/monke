import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignupPage() {
  return (
    <div>
      <Container>
        <Form>
          <Form.Group controlId="formBasicSignup">
            <Form.Label>Create User Name</Form.Label>
            <Form.Control id="user-email" type="email" placeholder="Name" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Create Password</Form.Label>
            <Form.Control
              id="user-password"
              type="password"
              placeholder="Password"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button
            className="mb-5"
            disabled
            id="create-user-account"
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
