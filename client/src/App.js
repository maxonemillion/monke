import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PostPage from "./views/clients/PostPage"
import ContractorHome from "./views/contractors/HomePage/ContractorHome";
import ListingEdit from "./views/clients/ListingEdit/ListingEdit";
import ClientHome from "./views/clients/HomePage/ClientHome";
import SearchJobs from "./views/contractors/SearchJobs"
import SearchResults from "./views/contractors/SearchResults"

import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo"

import NavBar from "./components/HomeNavBar";
import Footer from "./components/Footer";


import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { AuthContext } from "./util/context";
import axios from "axios";

const PrivateRoute = ({ component: Component, active, ...rest }) => {
  console.log("COMPONENT", Component.name)
  return (
    <Route {...rest} render={(props) => {
      if (active) {
        return <Component {...rest} {...props} />
      }
      else {
        return <Redirect to="/" />
      }
    }
    } />
  )
}

function App() {
  const [newUser, setNewUser] = useState(null);
  const [JWT, setJWT] = useState("");

  useEffect(() => {
    let storage = localStorage.getItem("JWTSCRT");
    console.log("LOCALSTORAGE", localStorage)
    axios.get("/api/users/verified?token=" + storage).then((res) => {
      console.log(res.data);
      setNewUser(res.data);
      setJWT(localStorage.JWTSCRT)
    }).catch(err => console.log(err))
  }, [])

  console.log("APP USER", newUser)

  return (
    <AuthContext.Provider value={newUser}>
      <div className="App">
        <BackgroundVideo />
        <Router>
          <Switch>
            <Route exact path="/" component={() => {
              if (newUser) {
                if (newUser.role === "contractor") {
                  return <Redirect to="ContractorHome" />
                } else if (newUser.role === "client") {
                  return <Redirect to="ClientHome" />
                }
              } else {
                return <HomePage />
              }
            }} />
            <Route exact path="/SignupPage" component={SignupPage} />
            <Route exact path="/LoginPage" component={LoginPage} />
            <Route exact path="/SearchResults" active={!!newUser} component={SearchResults} />
            <Route exact path="/SearchJobs" active={!!newUser} component={SearchJobs} />
            <Route exact path="/ListingEdit" active={!!newUser} component={ListingEdit} />
            <Route exact path="/PostPage" active={!!newUser} component={PostPage} />
            <Route exact path="/ClientHome" active={!!newUser} component={ClientHome} />
            <Route exact path="/ContractorHome" active={!!newUser} component={ContractorHome} />
            {/* <Redirect from="*" to="/" /> */}
          </Switch>
          <Footer />
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
