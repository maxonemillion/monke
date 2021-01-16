import React, { useState, useEffect, useContext } from 'react';
import { Button, Card, Container, Row } from "react-bootstrap";
import "./ContractorHome.css"
import API from "../../../util/API";
import axios from "axios";
import ContractorNavBar from "../../../components/ContractorNavBar"
import { AuthContext } from "../../../util/context";

const ContractorHome = () => {
  const [data, setData] = useState([]);
  const [render, setRender] = useState(false)
  const [dataExists, setDataExists] = useState(false);
  const user = useContext(AuthContext)

  useEffect(() => {
    API.mySavedJobs()
      .then(res => {

        setData(res.data)
      })
  }, [])

  const handleUnsave = (index) => {
    API.unsaveJob(data.data[index]._id)
      .then(res => {

        window.location.reload()
      })
  }

  return (
    <div>
      <ContractorNavBar />
      {/* { !dataExists ? */}
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
                    <Card.Text>
                      {cardData.contact}
                    </Card.Text>
                    <Button variant="primary" onClick={() => handleUnsave(index)}>Unsave</Button>
                  </Card.Body>
                </Card>
              )
            })}
            <br></br>
          </Container>
        </div>
        {/* : <h2>You haven't saved any jobs yet!</h2> } */}
    </div>

  );
}

export default ContractorHome;