import React, { useState, useEffect }from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { AuthContext } from "./util/context";
import axios from "axios";

function App() {
  const [newUser, setNewUser] = useState(null);
  useEffect(() => {
    let storage = localStorage.getItem("JWTSCRT");
    axios.get("/verified?token=" + storage).then ((resp) => {
      console.log("Sanity", resp);
      setNewUser(resp.data);
    })
  },[])
  return (
    <AuthContext.Provider value={newUser}>
    <Router>
      <BackgroundVideo />
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/SignupPage" component={SignupPage} />
          <Route exact path="/LoginPage" component={LoginPage} />
          <Route exact path="/ContractorHome" component={ContractorHome} />
          <Route exact path="/SearchJobs" component={SearchJobs} />
          <Route exact path="/SearchResults" component={SearchResults} />
          <Route exact path="/ClientHome" component={ClientHome} />
          <Route exact path="/ListingEdit" component={ListingEdit} />
          <Route exact path="/PostPage" component={PostPage} />

        </Switch>

        <Footer />
      </div>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
