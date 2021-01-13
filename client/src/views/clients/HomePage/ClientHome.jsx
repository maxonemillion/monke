import React, { useContext, useState, useEffect } from "react";
import { Button, Card, Row, Container, Form } from "react-bootstrap";
import ClientNavBar from "../../../components/ClientNavBar"
import API from "../../../util/API";
import "./ClientHome.css";
import { AuthContext } from "../../../util/context";

const ClientHome = () => {
  const [data, setData] = useState([]);
  const [editView, setEditView] = useState(false);

  useEffect(() => {
    API.myListings()
      .then(res => {
        console.log(res)
        setData(res.data)
        console.log(res.data)
      })
  }, [])

  const handleRemove = (index) => {
    API.unlistJob(data[index]._id)
      .then(res => {
        console.log(res.data)
        window.location.reload()
      })
      .catch(error => {
        console.log(error);
      })
  }

  const authorized = useContext(AuthContext);
  console.log(authorized);

  return (
    <div>
      <ClientNavBar />
      <div className="search-results">
        <h2>My Listings</h2>
        <Container>
          {data.map((cardData, index) => {
            return (
              <Card className="resultsListing">
                <Card.Body className="text-lg-left">
                  <Row>
                    
                    { !editView ? 
                    <Card.Title>{cardData.title}</Card.Title>
                      : <h1 className="edits"> Title
                      <Form.Control className="input-bar" id="keyword" placeholder={cardData.title}>
                    </Form.Control>
                      </h1>
                    }

                    
                    { !editView ?
                      <Card
                        className="mb-2 text-muted editPay">{cardData.pay}
                      </Card>
                      : <h1 className="edits"> Pay
                        <Form.Control className="paybar" id="keyword" placeholder={cardData.pay}>
                    </Form.Control> </h1>}
                    
                  </Row>

                  { !editView ?
                    <Card.Subtitle
                      className="mb-2 text-muted">{cardData.company}
                    </Card.Subtitle>
                    : <h1 className="edits"> Company
                    <Form.Control className="input-bar" id="keyword" placeholder={cardData.company}>
                  </Form.Control>
                    </h1>
                  }
                  
                  { !editView ? 
                  <Card.Text>
                    {cardData.description}
                  </Card.Text>
                    : <h1 className="edits"> Description
                    <Form.Control className="input-bar" id="keyword" placeholder={cardData.description}>
                    </Form.Control>
                    </h1> 
                  }
                  
                  { !editView ? 
                  
                  <Button variant="primary" onClick={() => handleRemove(index)}>Remove</Button>
                  : ""}
                  
                  
                  
                  <Button variant="primary" className="edit-btn" onClick={() => setEditView(!editView)}>{ editView ? "Done" : "Edit" }</Button>
                  
                </Card.Body>
              </Card>
            )
          })}
          <br></br>
        </Container>
      </div>
    </div>

  );
}

export default ClientHome;
