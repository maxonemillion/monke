import React from 'react';
import { Button, Card } from "react-bootstrap";
import "./ContractorHome.css"

const ContractorHome = () => {
  return (
    <div>
      <h2>You have not saved any jobs yet!</h2>
      <Button href="/SearchJobs" className="searchJobs">Search for jobs</Button>
      {/* <Card className="savedJob">
        <a className="hyperCard" href="">
          <Card.Body className="text-lg-left">
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-10 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button>Save</Button>
          </Card.Body>
        </a>
      </Card> */}
    </div>
  );
}

export default ContractorHome;