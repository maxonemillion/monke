import React, { useState } from 'react';
import { Button, Card, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ConfirmRemove from "../../../components/Alerts/RemoveListing/RemoveListing"
import "./ListingEdit.css"

const ListingEdit = () => {
    const [showConfirm, setShowConfirm] = useState(false);

    function displayConfirm() {
        setShowConfirm(!showConfirm);
    }

  return (
    <div>
      <h2>Edit Listing</h2>
      <Card className="listing">
          <Card.Body className="text-lg-left listingEdit">
            <Row>
            <Card.Title >React Website Design</Card.Title>
            <Card className="mb-2 text-muted price">$69 / h</Card>
            </Row>
            <Card.Subtitle className="mb-2 text-muted">Code Monkey LLC</Card.Subtitle>
            <Card.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quaerat est consequatur adipisci vitae sit. Modi blanditiis animi voluptas ipsum, eligendi neque enim laborum voluptates assumenda nam, dolor magnam et! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, omnis officia deleniti, dicta at ut quae reprehenderit dolorum harum blanditiis ex fugiat sed iure rerum quasi illo exercitationem veniam ducimus?
             </Card.Text>
            <Button variant="primary">View applicants</Button>
            <Button variant="danger" onClick={displayConfirm}>Remove</Button>
          </Card.Body>
          </Card>
          {showConfirm ? <ConfirmRemove
              closeDisplay={() => displayConfirm()}/> : ""}
      <br></br>
    </div>
  );
}

export default ListingEdit;