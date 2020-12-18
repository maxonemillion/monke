import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/SignupPage" component={SignupPage} />
          <Route exact path="/LoginPage" component={LoginPage} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
