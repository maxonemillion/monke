import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col, Form, Card, Button } from "react-bootstrap/";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../SearchJobs/SearchJobs.css"
import ContractorNavBar from "../../../components/ContractorNavBar"
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";


const SearchJobs = () => {
  const [selectArray, setSelectArray] = useState([]);
  console.log(selectArray.toString());
  const [selectType, setSelectType] = useState("");

  return (
    <div>
      <ContractorNavBar />
      <div>
        <h2>Search Jobs</h2>
        <Container>
          <Card className="jobs">
            <Row className="p-0">
              <Col>
                <Form className="results p-3">
                  <Form.Group>
                    <Form.Label>Code Language</Form.Label>
                    <DropdownMultiselect
                      handleOnChange={(s) => setSelectArray(s)}
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
                    <Form.Label>Keywords</Form.Label>
                    <Form.Control className="input-bar" id="keyword" placeholder="e.g. react, frontend... ">
                    </Form.Control>
                  </Form.Group>
                  <Button variant="primary" id="search" className="mb-3" href={"/SearchResults?selectedLang=" + selectArray.toString() + "&jobType=" + selectType}>
                    Search
                  </Button>
                </Form>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    </div>
  );
}

export default SearchJobs;
