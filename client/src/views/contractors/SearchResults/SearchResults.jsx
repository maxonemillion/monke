import React, { useState, useEffect } from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import AlertDismissible from "../../../components/Alerts/JobSaved/JobSaved";
import API from "../../../util/API";
import "./SearchResults.css";

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

  const findJobs = () => {
    API.findJobs({}).then(res => {
      console.log(res.data)
      setData(res.data)
   })
  }

  return (
    <div className="search-results">
      <h2 className="my-5 display-1">Search Results</h2>
      <Container>
        {data.map((cardData, index) => {
          return (
        <Card className="listing">
          <Card.Body className="text-lg-left">
            <Row>
              <Card.Title id="resultsTitle">
                <h2>{cardData.title}</h2>
              </Card.Title>

              <Card.Subtitle className="mb-2 price" id="resultsPay">
                <h6>{cardData.pay}</h6>
              </Card.Subtitle>
            </Row>
            <hr />
            <Card.Text className="mb-2" id="resultsDescription">{cardData.description}</Card.Text>
            <Card.Text className="listingPreview">
              {cardData.pay}
            </Card.Text>

            <Button variant="primary" onClick={() => { displayConfirm(); findJobs(); }}>
              Save
            </Button>
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
  );
};

export default SearchResults;
