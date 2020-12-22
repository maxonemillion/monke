import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../PostPage/PostPage.css"
import AlertDismissible from "../../../components/Alerts/JobPosted/JobPosted"
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

const PostPage = () => {
  const [showConfirm, setShowConfirm] = useState(false);

  function displayConfirm() {
    setShowConfirm(!showConfirm);
  }
  
  return (
    <div>
      <Container>
        <Row>
          <Col className="postParams border mx-3">
            <div>
              <Form.Group>
                <Form.Label className="postType">Type</Form.Label>
                <Form.Control id="type-end" as="select">
                  <option>Frontend</option>
                  <option>Backend</option>
                  <option>Both</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Code Language</Form.Label>
                <DropdownMultiselect
                  id="lang"
                  options={[
                    "JavaScript",
                    "Python",
                    "Swift",
                    "HTML5",
                    "SQL",
                    "PHP",
                    "Ruby",
                    "C",
                    "C++",
                    "C#",
                    "Visual Basic",
                    "Java",
                    "Objective C",
                    "Perl",
                  ]}
                  name="lang"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Pay</Form.Label>
                <Form.Control id="pay" as="select">
                  <option>Flat</option>
                  <option>Hourly</option>
                </Form.Control>
              </Form.Group>
              <Button id="search" className="mb-3">
                Search
              </Button>
            </div>
          </Col>

          <Col>
            <div className="jobDescription">
              {/* generated card from post search */}
              <Card className="mx-3">
                <Card.Header id="job-title" as="h5" className="jobTitle">
                  Job Title
                </Card.Header>
                <Card.Body className="listingDescription">
                  <Card.Title id="pay-rate">Pay Rate</Card.Title>
                  <Card.Text id="job-description">
                    Job Description Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Aliquam?
                  </Card.Text>
                  <Button
                    className="postJob"
                    id="save-job"
                    variant="primary"
                    onClick={displayConfirm}
                  >
                    Post Job
                  </Button>
                </Card.Body>
              </Card>
              {showConfirm ? (
                <AlertDismissible closeDisplay={() => displayConfirm()} />
              ) : (
                ""
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PostPage;
