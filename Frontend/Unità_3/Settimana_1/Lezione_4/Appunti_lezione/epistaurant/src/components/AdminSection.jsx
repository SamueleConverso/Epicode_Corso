import { Component } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const URL = "https://striveschool-api.herokuapp.com/api/reservation";

class AdminSection extends Component {
  state = {
    reservations: [],
  };

  getReservationsThenCatch = () => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella chiamata API");
        }
      })
      .then((data) => {
        console.log("DATA", data);
      })
      .catch((error) => {
        console.log("Errore di connessione o altro", error);
      });
  };

  getReservationsAsyncAwait = async () => {
    try {
      let response = await fetch(URL);
      if (response.ok) {
        let data = await response.json();
        console.log("DATA", data);
        this.setState({
          reservations: data,
        });
      } else {
        throw new Error("Errore nel recupero dati API.");
      }
    } catch (error) {
      console.log("ERRORE", error);
    }
  };

  componentDidMount() {
    this.getReservationsAsyncAwait();
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center my-3">
          <Col xs={12} md={6}>
            <div>
              <h2 className="text-center">Prenotazioni esistenti</h2>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center my-3">
          <Col xs={12} md={6}>
            <ListGroup>
              {this.state.reservations.map((res) => {
                return (
                  <ListGroup.Item key={res._id}>
                    {res.name} per {res.numberOfPeople}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AdminSection;
