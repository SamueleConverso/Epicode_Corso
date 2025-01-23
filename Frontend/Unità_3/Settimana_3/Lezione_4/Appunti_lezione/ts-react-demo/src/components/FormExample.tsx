import { useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
interface Reservation {
  name: string;
  phone: string;
  numberOfPeople: number;
  dateTime: string;
  smoking: boolean;
  specialRequests?: string;
}

const initialReservation: Reservation = {
  name: "",
  phone: "",
  numberOfPeople: 1,
  dateTime: "",
  smoking: false,
  specialRequests: "",
};

function FormExample() {
  const [reservation, setReservation] =
    useState<Reservation>(initialReservation);
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome..."
              value={reservation.name}
              onChange={(e) => {
                setReservation({ ...reservation, name: e.target.value });
              }}
            ></Form.Control>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default FormExample;
