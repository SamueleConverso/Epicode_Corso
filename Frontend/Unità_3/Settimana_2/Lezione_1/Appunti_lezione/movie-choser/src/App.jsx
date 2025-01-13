import "bootstrap/dist/css/bootstrap.min.css";
import MovieNavbar from "./components/MovieNavbar";
import { Form, Container, Row, Col } from "react-bootstrap";
import { Component } from "react";
import MovieCard from "./components/MovieCard";

class App extends Component {
  state = {
    movieTitle: "Iron Man",
  };

  render() {
    return (
      <>
        <MovieNavbar className="mb-5" />
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <h1 className="text-center mb-3">Scegli il film!</h1>

              <Form.Select
                className="text-center"
                aria-label="Default select example"
                value={this.state.movieTitle}
                onChange={(e) => this.setState({ movieTitle: e.target.value })}
              >
                <option>Iron Man</option>
                <option>Doctor Strange</option>
                <option>Captain America</option>
                <option>Thor</option>
                <option>Black Widow</option>
                <option>Avengers</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <MovieCard movieTitle={this.state.movieTitle} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
