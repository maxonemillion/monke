import React from "react";
import { Button, Card } from "react-bootstrap";
import "./ClientHome.css";

export default function ClientHome() {
  return (
<div>
      <h2>Client Home</h2>
      <Card className="listing">
        <a href="/ListingEdit" className="hyperCard">
          <Card.Body className="text-lg-left">
            <Row>
            <Card.Title>React Website Design</Card.Title>
            <Card className="mb-2 text-muted price">$69 / h</Card>
            </Row>
            <Card.Subtitle className="mb-2 text-muted">Code Monkey LLC</Card.Subtitle>
            <Card.Text className="listingPreview">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quaerat est consequatur adipisci vitae sit. Modi blanditiis animi voluptas ipsum, eligendi neque enim laborum voluptates assumenda nam, dolor magnam et! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, omnis officia deleniti, dicta at ut quae reprehenderit dolorum harum blanditiis ex fugiat sed iure rerum quasi illo exercitationem veniam ducimus?
             </Card.Text>
            <Button variant="primary">View applicants</Button>
            <Button variant="danger" href="/ListingEdit">Edit</Button>
          </Card.Body>
        </a>
      </Card>
      <br></br>
    </div>
  );
}
