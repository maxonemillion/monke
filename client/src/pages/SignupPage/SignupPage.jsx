import React, { useState } from "react";
import { Button, Container, Form, Tabs, Tab } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./SignupPage.css";
import HomeNavBar from "../../components/HomeNavBar"

const SignupPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")

  const history = useHistory()

  const signup = async (event) => {
    event.preventDefault();
    try {
      let response = await axios.post(
        "/api/users/signup",
          ({ email: username, password: password, role: role }),
      )

      if (role === "contractor") {
        history.push("/ContractorHome")
      } else {
        history.push("/ClientHome")
      }
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <div>
      <HomeNavBar />
    <div className="signupForm">
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="tabs">
        <Tab eventKey="home" title="Contractor" className="tabs" onSelect={() => setRole("contractor")}>
          <br/>
          <Container className="signup">
            <Form id="first">
              <Form.Label>Create Contractor Account</Form.Label>
              <Form.Group>
                <Form.Control
                  id="contractor-email"
                  type="email"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  id="contractor-password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  id="contractor-repassword"
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
                onClick={signup}
              >
                Signup
              </Button>
              <br></br>
              <Form.Label>
                Already have an account? <Link to="/LoginPage" className="loginNow">Login!</Link>
              </Form.Label>
            </Form>
            <br></br>
          </Container>
        </Tab>
        <Tab eventKey="profile" title="Client" className="tabs" onSelect={() => setRole("client")}>
          <br/>
          <Container className="signup">
            <Form id="link">
              <Form.Label>Create Client Account</Form.Label>
              <Form.Group>
                <Form.Control
                  id="client-email"
                  type="email"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  id="client-password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  id="client-repassword"
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
                onClick={signup}
              >
                Signup
              </Button>
              <br></br>
              <Form.Label className="alreadyHave">
                Already have an account? <Link to="/LoginPage">Login!</Link>
              </Form.Label>
            </Form>
            <br></br>
          </Container>
        </Tab>
      </Tabs>
    </div>
    </div>
  );
}

export default SignupPage;
