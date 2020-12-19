import React from 'react';
import { Button, Card, Row } from "react-bootstrap";
import "./ContractorHome.css"

export default function ContractorHome() {
  return (
    <div>
      <h2>Contractor Home</h2>
      <Card>
        <a href="/SignupPage" className="hyperCard">
          <Card.Body className="text-lg-left">
            <Row>
            <Card.Title >React Website Design</Card.Title>
            <Card className="price">$100/h</Card>
            </Row>
            <Card.Subtitle className="mb-2 text-muted">Code Monkey LLC</Card.Subtitle>
            <Card.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quaerat est consequatur adipisci vitae sit. Modi blanditiis animi voluptas ipsum, eligendi neque enim laborum voluptates assumenda nam, dolor magnam et! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, omnis officia deleniti, dicta at ut quae reprehenderit dolorum harum blanditiis ex fugiat sed iure rerum quasi illo exercitationem veniam ducimus?
             </Card.Text>
            <Button variant="primary">View applicants</Button>
            <Button variant="danger">Edit</Button>
          </Card.Body>
        </a>
      </Card>
      <br></br>
    </div>
  );
}