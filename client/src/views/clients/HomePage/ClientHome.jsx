import React, { useContext, useState, useEffect } from "react";
import { Button, Card, Row, Container, Form } from "react-bootstrap";
import ClientNavBar from "../../../components/ClientNavBar"
import API from "../../../util/API";
import "./ClientHome.css";
import { AuthContext } from "../../../util/context";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap"

const ClientHome = () => {
  const [data, setData] = useState([]);
  const [editView, setEditView] = useState(false);
  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [description, setDescription] = useState("")
  const [type, setType] = useState("")
  const [pay, setPay] = useState("")
  const [contact, setContact] = useState("")
  const [language, setLanguage] = useState([])

  useEffect(() => {
    console.log("yowdy")
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

  const updateJob = (index) => {
    API.editJob(data[index]._id, {
      title: title,
      company: company,
      description: description,
      language: language,
      contact: contact,
      pay: pay
    })
      .then(res => {
        console.log(res.data, "editJob")
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
                      : <h1 className="editsTitle"> Title
                      <Form.Control className="input-bar2" id="keyword" placeholder={cardData.title} onChange={(e) => setTitle(e.target.value)}>
                    </Form.Control>
                      </h1>
                    }

                    
                    { !editView ?
                      <Card
                        className="mb-2 text-muted editPay">{cardData.pay}
                      </Card>
                      : <h1 className="edits"> Pay
                        <Form.Control className="paybar" id="keyword" placeholder={cardData.pay} onChange={(e) => setPay(e.target.value)}>
                    </Form.Control> </h1>}
                    
                  </Row>

                  { !editView ?
                    <Card.Subtitle
                      className="mb-2 text-muted">{cardData.company}
                    </Card.Subtitle>
                    : <h1 className="edits"> Company
                    <Form.Control className="input-bar2" id="keyword" placeholder={cardData.company} onChange={(e) => setCompany(e.target.value)}>
                  </Form.Control>
                    </h1>
                  }
                  
                  { !editView ? 
                  <Card.Text> 
                    {cardData.description}
                  </Card.Text>
                    : <h1 className="edits"> Description
                    <Form.Control className="input-bar2" id="keyword" placeholder={cardData.description} onClick={(e) => console.log(e.target.value)} onChange={(e) => setDescription(e.target.value)}>
                    </Form.Control>
                    </h1> 
                  }

                  { !editView ? 
                  <Card.Text className="mb-2 text-muted">
                    {cardData.language.join(", ")}
                  </Card.Text>
                    : <h1 className="edits"> Languages
                       <DropdownMultiselect
                      handleOnChange={(s) => setLanguage(s)}
                      id="lang"
                      options={[
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
                      ]}
                      name="lang"
                    />
                    
                    </h1> 
                  }
  
                  { !editView ? 
                  <Card.Text>
                    {cardData.contact}
                  </Card.Text>
                    : <h1 className="edits"> Contact
                    <Form.Control className="input-bar2" id="keyword" placeholder={cardData.contact} onChange={(e) => setContact(e.target.value)}>
                    </Form.Control>
                    </h1> 
                  }
                  
                  { !editView ? 
                  
                  <Button variant="primary" onClick={() => handleRemove(index)}>Remove</Button>
                  : ""}
                  
                  { !editView ?
                    <Button variant="primary" onClick={() => setEditView(!editView)}>Edit</Button>
                    : 
                    <Button variant="primary" onClick={() => { updateJob(index); setEditView(!editView) }}>Done</Button>
                  }

                  { !editView ?
                    ""
                    : 
                    <Button variant="primary" onClick={() => setEditView(!editView)}>Cancel</Button>
                  }
                
                  
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
