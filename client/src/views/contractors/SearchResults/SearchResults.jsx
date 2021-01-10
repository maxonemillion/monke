import React, { useState, useEffect } from "react";
import { Button, Card, Row, Container } from "react-bootstrap";
import AlertDismissible from "../../../components/Alerts/JobSaved/JobSaved";
import API from "../../../util/API";
import "./SearchResults.css";
import ContractorNavBar from "../../../components/ContractorNavBar"

const SearchResults = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [data, setData] = useState([]);

  const displayConfirm = () => {
    setShowConfirm(!showConfirm);
  }

  useEffect(() => {
    API.findJobs()
        .then(res => {
            setData(res.data)
            console.log(res.data)
        })
}, [])

  const handleSave = (index) => {
    API.saveJob({
      title: data[index]?.title,
      company: data[index]?.company,
      description: data[index]?.description,
      type: data[index]?.type,
      language: data[index]?.language,
      pay: data[index]?.pay,
    })
      .then(res => {
      console.log(res.data)
    })
  }

  return (
    <div>
      <ContractorNavBar />
    <div className="search-results">
      <h2>Search Results</h2>
      <Container>
        {data.map((cardData, index) => {
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
              <Button variant="primary" onClick={() => handleSave(index)}>Save</Button>
            </Card.Body>
            </Card>
          )
        })}
        <br></br>
        {showConfirm ? (
          <AlertDismissible closeDisplay={() => displayConfirm()} />
        ) : (
          ""
        )}
      </Container>
    </div>
    </div>
  );
};

export default SearchResults;
