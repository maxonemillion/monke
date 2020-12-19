import React from "react";
import { Button, Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const ConfirmRemove = (props) => {

        return (
          <>
            <Alert variant="light">
              <Alert.Heading>Are you sure you want to delete this listing?</Alert.Heading>
              <hr />
              <div className="d-flex justify-content-end">
                <Button onClick={() => props.closeDisplay()} variant="outline-success">
                  I'm sure!
                </Button>
                <Button onClick={() => props.closeDisplay()} variant="outline-danger">
                  Cancel
                </Button>
              </div>
            </Alert>
          </>
        );
}
  
export default ConfirmRemove;