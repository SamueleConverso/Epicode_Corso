/* eslint-disable react-hooks/exhaustive-deps */
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import pastasciutte from "../data/menu.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PastaComments from "./PastaComments";

function PastaDetails() {
  const params = useParams();

  const [foundPasta, setFoundPasta] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const result = pastasciutte.find((pasta) => {
      return pasta.id.toString() === params.pastaId;
    });
    if (result) {
      console.log(result);
      setFoundPasta(result);
    } else {
      navigate("/not-found");
    }
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h2 className="text-center">DETTAGLI</h2>

          {
            <Card>
              <Card.Img variant="top" src={foundPasta.image} />
              <Card.Body>
                <Card.Title>{foundPasta.name}</Card.Title>
                <Card.Text>{foundPasta.description}</Card.Text>
                <Card.Text>{foundPasta.price}$</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    navigate("/menu");
                  }}
                >
                  Menu
                </Button>
              </Card.Body>
            </Card>
          }

          {foundPasta.comments && <PastaComments pasta={foundPasta} />}
        </Col>
      </Row>
    </Container>
  );
}

export default PastaDetails;
