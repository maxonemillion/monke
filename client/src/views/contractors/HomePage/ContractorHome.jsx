import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Row } from "react-bootstrap";
import "./ContractorHome.css"
import API from "../../../util/API";
import axios from "axios";

const ContractorHome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.mySavedJobs()
      .then(res => {
        setData(res.data)
        console.log(res.data)
      })
  }, [])

  const handleUnsave = (index) => {
    API.unsaveJob(data.data[index]._id)
      .then(res => {
        console.log(res.data)
        window.location.reload()
    })
  }

  return (
    <div className="search-results">
      <h2>Saved Jobs</h2>
      <Container>
        {data.data?.map((cardData, index) => {
          return (
            <Card className="resultsListing">
              <Card.Body className="text-lg-left">
                <Row>
                  <Card.Title>{cardData.title}</Card.Title>
                  <Card className="mb-2 text-muted editPay">{cardData.pay}</Card>
                </Row>
                <Card.Subtitle className="mb-2 text-muted">{cardData.company}</Card.Subtitle>
                <Card.Text>
                  {cardData.description}
                </Card.Text>
                <Button variant="primary" onClick={() => handleUnsave(index)}>Unsave</Button>
              </Card.Body>
            </Card>
          )
        })}
        <br></br>
      </Container>
    </div>
  );
}

export default ContractorHome;