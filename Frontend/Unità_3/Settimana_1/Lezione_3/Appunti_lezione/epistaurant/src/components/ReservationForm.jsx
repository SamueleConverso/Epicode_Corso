import { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class ReservationForm extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center my-3">
          <Col xs={12} md={6}>
            <div>
              <h2 className="text-center">Prenota un tavolo ora!</h2>
            </div>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Il tuo nome</Form.Label>
                <Form.Control type="text" placeholder="Nome" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Il tuo telefono</Form.Label>
                <Form.Control type="tel" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>In quanti siete?</Form.Label>
                <Form.Select aria-label="Table size">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Per quando?</Form.Label>
                <Form.Control type="datetime-local" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Tavolo fumatori?" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Altro</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>

              <Button variant="success" type="submit">
                Invia
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ReservationForm;
