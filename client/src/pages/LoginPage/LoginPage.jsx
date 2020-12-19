import React, { useState } from 'react'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./LoginPage.css"

function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function login(event) {
    event.preventDefault();
    console.log(username, password)

    if (username === "asdf") {
      console.log("logged in")
    } else {
      console.log("error")
    }
  }

    return (
<<<<<<< HEAD
        <div>
            <h1>Login Page</h1>
        </div> 
    )
=======
      <div>
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
>>>>>>> 63c4eec482221475ffb20dd505efc8f293eeedc4
}

export default LoginPage;