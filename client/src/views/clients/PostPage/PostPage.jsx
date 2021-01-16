import React, { useState } from "react";
import ClientNavBar from "../../../components/ClientNavBar"
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
import axios from "axios"
import API from "../../../util/API"
const PostPage = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [description, setDescription] = useState("")
  const [contact, setContact] = useState("")
  const [type, setType] = useState("")
  const [pay, setPay] = useState("")
  const [language, setLanguage] = useState([])


  const displayConfirm = () => {
    setShowConfirm(!showConfirm);
  }

  const languageString = language.join(", ")

  const addJob = () => {
    API.postJob({
      title: title,
      company: company,
      description: description,
      contact: contact,
      language: language,
      pay: pay,
    })
      .then(res => {
        console.log(res.data)
      })
  }
  
  return (
    <div>
      <ClientNavBar />
      <div>
        <Container>
          <Row>
            <Col className="form-group">
              <div>
                <Form.Group>
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control className="input-bar" type="text" placeholder="Job Title" name="jobTitle" onChange={(event) => setTitle(event.target.value)} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control className="input-bar" type="text" placeholder="Company Name" name="company" onChange={(event) => setCompany(event.target.value)} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Job Description</Form.Label>
                  <Form.Control className="input-bar" type="text" placeholder="Job Description" name="jobDescription" onChange={(event) => setDescription(event.target.value)} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Contact</Form.Label>
                  <Form.Control className="input-bar" type="text" placeholder="Contact Information" name="contact" onChange={(event) => setContact(event.target.value)} />
                </Form.Group>
                
                <Form.Group>
                  <Form.Label>Language</Form.Label>
                  <DropdownMultiselect
                      handleOnChange={(s) => setLanguage(s)}
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
                  {/* <DropdownMultiselect name = "language" value={options} onChange={handleInput}
                    id="lang"
                    options={options}
                    
                  /> */}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Pay</Form.Label>
                  <Form.Control className="input-bar" type="text" placeholder="Hourly or Flat" name="jobDescription" onChange={(event) => setPay(event.target.value)} />
                </Form.Group>
              </div>
            </Col>
            <Col>
              <div>
                <br></br>
                <Card className="mx-3" id="live-copy">
                  <Card.Header id="job-title" as="h5" className="jobTitle">
                    {title}
                  </Card.Header>
                  <Card.Body>
                    <Card.Title id="pay-rate">
                      {pay}
                    </Card.Title>
                    <Card.Title id="company">
                      {company}
                    </Card.Title>
                    <Card.Text id="job-description">
                     {description}
                    </Card.Text>
                    <Card.Text id="job-description">
                      {languageString}
                    </Card.Text>
                    <Card.Text id="contact-info">
                     {contact}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Button id="addJob" className="mb-3" onClick={() => { addJob(); displayConfirm(); }}>
                  Post Job
                </Button>
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
    </div>
    );
}

export default PostPage;
