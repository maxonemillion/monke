import "../HomePage/theme.css";
import React from "react";


function HomePage() {
  return (
    <div id="homePage">
      <h2 className="center">Welcome, Coders!</h2>
      <br></br>
      <div className="center, m-5, p-5">
          <h5 variant="danger">
            Whether you are looking for some extra work or you're looking for
            someone to design a web application, you are in the right place! We
            thought it would be great to create a handy application to get you
            in touch with contract jobs near you! You can choose to sign up as
            either a client or a contractor. You can message people if you are
            interested in hiring them, and with one click of a button you can
            apply to work on a job! Click one of the options in the top right to create an account or
            log in to an existing account.
          </h5>
          <br></br>
          <h4>Thank you!</h4>
          <p>
            <br></br>
          </p>
      </div>
    </div>
  );
}

export default HomePage;
