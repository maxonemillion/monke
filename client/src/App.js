import React, { useState, useEffect }from "react";
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
      console.log(localStorage.JWTSCRT)
    }).catch(err => console.log(err))
  }, [])
  
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      JWT
        ? <Component {...props} />
        : <Redirect to="/" />
    )} />
  )
  

  return (
    <AuthContext.Provider value={newUser}>
    <Router>
      <BackgroundVideo />
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/SignupPage" component={SignupPage} />
          <Route exact path="/LoginPage" component={LoginPage} />
          <PrivateRoute exact path="/ContractorHome" component={ContractorHome} />
          <PrivateRoute exact path="/SearchJobs" component={SearchJobs} />
          <PrivateRoute exact path="/SearchResults" component={SearchResults} />
          <PrivateRoute exact path="/ClientHome" component={ClientHome} />
          <PrivateRoute exact path="/ListingEdit" component={ListingEdit} />
          <PrivateRoute exact path="/PostPage" component={PostPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
