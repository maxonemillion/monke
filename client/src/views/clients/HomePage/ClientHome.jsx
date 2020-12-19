import React from "react";
import { Button, Container, Form, Tabs, Tab, Card } from "react-bootstrap";
import "./ClientHome.css";

export default function ClientHome() {
  return (
    <div>
      <h2>Client home</h2>
      <Card>
        <a className="hyperCard" href="">
          <Card.Body className="text-lg-left">
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-10 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button>Save</Button>
          </Card.Body>
        </a>
      </Card>
    </div>
  );
}
