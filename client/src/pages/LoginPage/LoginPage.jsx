import React, { useState } from 'react'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useHistory } from "react-router-dom";
import API from "../../util/API";
import axios from "axios";
import "./LoginPage.css"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory()

  const login = async (event) => {
    event.preventDefault();
    try {
      let response = await axios.post(
        "/api/users/login",      
        ({ email: username, password: password }),
        );
      console.log(response);
      if (response.data.auth) {
        if (response.data.role === "contractor") {
          history.push("/ContractorHome")
        } else {
          history.push("/ClientHome")
        }
      } else {
        alert(response.data.message)
      }
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
              <Form.Control  type="email" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
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