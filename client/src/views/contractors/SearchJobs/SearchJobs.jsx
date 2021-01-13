import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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
    <div className="search-jobs">
      <h2 className="my-5 display-1">Search Jobs</h2>
      <Container>
        <Row className="p-0">
          <Col className="jobParams ">
            <Form className="jobs p-3">
              <Form.Group>
                <Form.Label className="jobType">Type</Form.Label>
                <Form.Control 
                onChange={(e) => setSelectType(e.target.value)}
                className="option" id="type-end" as="select">
                  <option>Frontend</option>
                  <option>Backend</option>
                  <option>Both</option>
                </Form.Control>
              </Form.Group>

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
                <Form.Control className="input-bar" id="keyword" placeholder="e.g. Per Hour, Remote Work, Etc...">
                </Form.Control>
              </Form.Group>
              <Button variant="primary" id="search" className="mb-3" href={"/SearchResults?selectedLang=" + selectArray.toString() + "&jobType=" + selectType}>
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
}

export default SearchJobs;
