import React, { useState } from 'react'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import API from "../../util/API";
import "./LoginPage.css"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const login = (event) => {
    event.preventDefault();
    try {
      const response = fetch(
        '/api/users',
        {
          body: JSON.stringify({ email: username, password: password }),
          method: 'POST',
        }
      );
     
      setUsername('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  }

    return (
      <div className="loginForm">
        <Container>
          <Form>
          <Form.Label>Welcome Back!</Form.Label>
            <Form.Group controlId="formBasicLogin">
              <Form.Control  type="login" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control  type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <br></br>
            <Button className="mb-5" id="login" variant="primary" type="login" onClick={login}>
              Login
            </Button>
            <br></br>
            <Form.Label>Don't have an account? <Link to="/SignupPage">Sign up!</Link></Form.Label>
          </Form>
          <br></br>
        </Container>
      </div>
    );
}

export default LoginPage;