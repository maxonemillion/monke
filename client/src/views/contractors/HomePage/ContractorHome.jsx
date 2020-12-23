import React from 'react';
import { Button, Card, Container } from "react-bootstrap";
import "./ContractorHome.css"
import axios from "axios";

const ContractorHome = () => {
  function reqBck() {
    console.log("This works")
    let storage = localStorage.getItem("JWTSCRT");
    axios.get("/test?token=" + storage).then (console.log)


  }
  return (
    <div>
      <h2>You have not saved any jobs yet!</h2>
      {/* <Container>
        <Card className="savedJob">
          <a className="hyperCard" href="">
            <Card.Body className="text-lg-left">
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-10 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button>Save</Button>
            </Card.Body>
          </a>
        </Card>
      </Container> */}
      <Button className="center" href="/SearchJobs" className="searchJobs">
        Search for jobs
      </Button>
      <Button className="testing" onClick={reqBck}>
        Test
      </Button>
    </div>
  );
}

export default ContractorHome;