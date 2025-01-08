import { Carousel, Container, Row, Col, ListGroup } from "react-bootstrap";
import pastasciutte from "../data/menu.json";
import { Component } from "react";

class HomeContent extends Component {
  state = {
    activePasta: pastasciutte[0],
  };

  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-center">
            <Col className="col-12 col-md-6">
              <Carousel
                onSlide={(i) => {
                  console.log("SLIDE CAMBIATA!", i);
                  this.setState({
                    activePasta: pastasciutte[i],
                  });
                }}
              >
                {pastasciutte.map((pasta) => {
                  return (
                    <Carousel.Item key={pasta.id}>
                      <img src={pasta.image} className="w-100" />
                      <Carousel.Caption>
                        <h3>{pasta.name}</h3>
                        <p>{pasta.description}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <ListGroup className="text-center">
                {this.state.activePasta.comments.map((r) => {
                  return (
                    <ListGroup.Item key={r.id}>{r.comment}</ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default HomeContent;
