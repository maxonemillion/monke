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
import axios from "axios"
import API from "../../../util/API"
const PostPage = () => {
  const [showConfirm, setShowConfirm] = useState(false);
 const [options, setOptions] = useState([
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
])
  const [formData, setFormData] = useState({
    company:"",
    jobTitle:"",
    workType:"",
    language:"",
    payRate:""
  })
  const displayConfirm= () => {
    setShowConfirm(!showConfirm);
  }
  
  const handleInput = (event) => {
     const {name, value } = event.target
     setFormData({
       ...formData, [name]:value
     })

     console.log(value)
     
  }
  const addJob = () => {
    API.newJobs(formData).then(results => {
      alert("new job added")
    })
  }
  return (
    <div>
      <Container>
        <Row>
          <Col className="form-group">
            <div>
              
            <Form.Group>
                <Form.Label>Company Name</Form.Label>
                 <Form.Control type="text" placeholder="Enter Company Name" name="company" onChange={handleInput} />
                 </Form.Group>

                 <Form.Group>
                <Form.Label>Job Title</Form.Label>
                 <Form.Control type="text" placeholder="Job Title" name = "jobTitle" onChange={handleInput} />
                 </Form.Group>

              <Form.Group>
                <Form.Label className="postType">Type</Form.Label>
                <Form.Control id="type-end" as="select" name = "workType" onChange={handleInput}>
                  <option>Frontend</option>
                  <option>Backend</option>
                  <option>Both</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Code Language</Form.Label>
                <Form.Control id="type-end" as="select" name = "language" onChange={handleInput}>
                  <option>JavaScript</option>
                  <option>HTML</option>
                  <option>React</option>
                </Form.Control>
                {/* <DropdownMultiselect name = "language" value={options} onChange={handleInput}
                  id="lang"
                  options={options}
                  
                /> */}
              </Form.Group>
              <Form.Group>
                <Form.Label>Pay</Form.Label>
                <Form.Control id="pay" as="select" name ="payRate" onChange={handleInput}>
                  <option>Flat</option>
                  <option>Hourly</option>
                </Form.Control>
              </Form.Group>
              <Button id="addJob" className="mb-3" onClick = {addJob}>
                Post Job
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PostPage;
