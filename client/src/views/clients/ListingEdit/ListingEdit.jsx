import React, { useState, useContext } from 'react';
import { Button, Card, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ConfirmRemove from "../../../components/Alerts/RemoveListing/RemoveListing"
import ClientNavBar from "../../../components/ClientNavBar"
import "./ListingEdit.css"
import { AuthContext } from "../../../util/context"

const ListingEdit = () => {
    const [showConfirm, setShowConfirm] = useState(false);

    function displayConfirm() {
        setShowConfirm(!showConfirm);
    }
const authorized = useContext(AuthContext);

  return (
    <div>
      <ClientNavBar />
    <div>
      <h2>Edit Listing</h2>
      <Card className="editListing">
          <Card.Body className="text-lg-left listingEdit">
            <Row>
            <Card.Title >React Website Design</Card.Title>
            <Card className="mb-2 text-muted editPay">$69 / h</Card>
            </Row>
            <Card.Subtitle className="mb-2 text-muted">Code Monkey LLC</Card.Subtitle>
            <Card.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quaerat est consequatur adipisci vitae sit. Modi blanditiis animi voluptas ipsum, eligendi neque enim laborum voluptates assumenda nam, dolor magnam et! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, omnis officia deleniti, dicta at ut quae reprehenderit dolorum harum blanditiis ex fugiat sed iure rerum quasi illo exercitationem veniam ducimus?
             </Card.Text>
            <Button variant="danger" onClick={displayConfirm}>Done</Button>
          </Card.Body>
          </Card>
          {showConfirm ? <ConfirmRemove
              closeDisplay={() => displayConfirm()}/> : ""}
      <br></br>
    </div>
    </div>
  );
}

export default ListingEdit;