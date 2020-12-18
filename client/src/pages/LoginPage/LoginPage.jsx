import React from 'react'

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginPage() {
    return (
      <div>
        <Container>
          <Form>
            <Form.Group controlId="formBasicLogin">
              <Form.Label>User Name</Form.Label>
              <Form.Control id="login-email" type="login" placeholder="Name" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>User Password</Form.Label>
              <Form.Control id="login-password" type="password" placeholder="Password" />
            </Form.Group>
            <Button className="mb-5" disabled id="login" variant="primary" type="login">
              Login
            </Button>
          </Form>
        </Container>
      </div>
    );
}

export default LoginPage;