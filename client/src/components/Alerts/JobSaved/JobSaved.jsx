import React from "react";
import { Alert, Button } from "react-bootstrap";
import "./JobSaved.css"

function AlertDismissible(props) {
  
      return (
        <Alert className="postedAlert" variant="success" dismissible onClose={() => props.closeDisplay()}>
          <Alert.Heading>Job saved!</Alert.Heading>
          <a href="/SavedJobs">My saved jobs</a>
        </Alert>
      );
    }
export default AlertDismissible;