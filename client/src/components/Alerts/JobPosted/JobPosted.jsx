import React from "react";
import { Alert } from "react-bootstrap";
import "./JobPosted.css"

function AlertDismissible(props) {
  
      return (
        <Alert className="postedAlert" variant="success" dismissible onClose={() => props.closeDisplay()}>
          <Alert.Heading>Job posted!</Alert.Heading>
        </Alert>
      );
    }
export default AlertDismissible;