import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function PostPage() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="border mx-3">
            {/* search area for post */}
            <div>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Font End / Back End</Form.Label>
                <Form.Control id="type-end" as="select">
                  <option>HTML5</option>
                  <option>CSS</option>
                  <option>React.js</option>
                  <option>Mongod</option>
                  <option>Express</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Code Language</Form.Label>
                <Form.Control id="lang" as="select">
                  <option>jQuery</option>
                  <option>JavaScript</option>
                  <option>Python</option>
                  <option>Ruby</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Hour Pay / Flat Rate</Form.Label>
                <Form.Control id="pay" as="select">
                  <option>$20 - $30</option>
                  <option>$30 - $60</option>
                  <option>$100 - $120</option>
                </Form.Control>
              </Form.Group>
              <Button id="search" className="mb-3">Search</Button>
            </div>
          </Col>

          <Col>
            <div>
              {/* generated card from post search */}
              <Card className="mx-3">
                <Card.Header id="job-title" as="h5">Job Title</Card.Header>
                <Card.Body>
                  <Card.Title id="pay-rate">Pay Rate</Card.Title>
                  <Card.Text id="job-description">
                    Job Description Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Aliquam?
                  </Card.Text>
                  <Button id="save-job" variant="primary">Save Job</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PostPage;
