import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

function PostPage() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="border mx-3">
            <div>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Type</Form.Label>
                <Form.Control id="type-end" as="select">
                  <option>Frontend</option>
                  <option>Backend</option>
                  <option>Both</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Code Language</Form.Label>
                <Form.Control id="lang" as="select">
                  <option>JavaScript</option>
                  <option>Python</option>
                  <option>Swift</option>
                  <option>HTML5</option>
                  <option>SQL</option>
                  <option>PHP</option>
                  <option>Ruby</option>
                  <option>C</option>
                  <option>C++</option>
                  <option>C#</option>
                  <option>Visual Basic</option>
                  <option>Java</option>
                  <option>Objective C</option>
                  <option>Perl</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Pay</Form.Label>
                <Form.Control id="pay" as="select">
                  <option>Flat</option>
                  <option>Hourly</option>
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
