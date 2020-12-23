import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../SearchJobs/SearchJobs.css"
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

const SearchJobs = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="jobParams border mx-3">
            <div>
              <Form.Group>
                <Form.Label className="jobType">Type</Form.Label>
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
              <Button id="search" className="mb-3" href="/SearchResults">
                Search
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SearchJobs;
