import { useState, FormEvent } from "react";
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
  phone: "Prova",
  numberOfPeople: 1,
  dateTime: "2024-03-20T19:30:00.000Z",
  smoking: false,
  specialRequests: "Prova",
};

function FormExample() {
  const [reservation, setReservation] =
    useState<Reservation>(initialReservation);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/reservation",
        {
          method: "POST",
          body: JSON.stringify(reservation),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log(reservation);
        alert("GRAZIE!");
        setReservation(initialReservation);
      } else {
        throw new Error("ERRORE");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome..."
              value={reservation.name}
              onChange={(e) => {
                setReservation({ ...reservation, name: e.target.value });
                console.log(reservation);
              }}
            ></Form.Control>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default FormExample;
