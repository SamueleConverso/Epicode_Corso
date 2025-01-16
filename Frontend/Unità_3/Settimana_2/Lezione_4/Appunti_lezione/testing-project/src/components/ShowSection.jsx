/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Col, Container, Row, Button, Card } from "react-bootstrap";

function ShowSection() {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow((currentShow) => {
      return !currentShow;
    });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <h2>Esempio componente ShowSection</h2>
          <div>
            <Button variant="info" onClick={toggleShow}>
              {show ? "NASCONDI" : "MOSTRA"}
            </Button>
          </div>
          {show && (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default ShowSection;
