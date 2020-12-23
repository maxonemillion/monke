import React, { useState } from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import AlertDismissible from "../../../components/Alerts/JobSaved/JobSaved";
import "./SearchResults.css";

const SearchResults = () => {
  const [showConfirm, setShowConfirm] = useState(false);

  function displayConfirm() {
    setShowConfirm(!showConfirm);
  }

  return (
    <div className="search-results">
      <h1 className="my-5 display-1">Search Results</h1>
      <Container>
        <Card className="listing">
          <Card.Body className="text-lg-left">
            <Row>
              <Card.Title>
                <h1>React Website Design</h1>
              </Card.Title>

              <Card.Subtitle className="mb-2  price">
                <h6>$69 / h</h6>
              </Card.Subtitle>
            </Row>
            <hr />
            <Card.Text className="mb-2 ">Code Monkey LLC</Card.Text>

            <Card.Text className="listingPreview">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus quaerat est consequatur adipisci vitae sit. Modi
              blanditiis animi voluptas ipsum, eligendi neque enim laborum
              voluptates assumenda nam, dolor magnam et! Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Ipsum, omnis officia deleniti,
              dicta at ut quae reprehenderit dolorum harum blanditiis ex fugiat
              sed iure rerum quasi illo exercitationem veniam ducimus?
            </Card.Text>

            <Button variant="primary" onClick={displayConfirm}>
              Save
            </Button>
          </Card.Body>
        </Card>
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
