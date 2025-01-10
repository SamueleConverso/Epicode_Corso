import { Carousel, Container, Row, Col } from "react-bootstrap";
import pastasciutte from "../data/menu.json";
import { Component } from "react";
import PastaComments from "./PastaComments";

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

          <PastaComments pasta={this.state.activePasta} />
        </Container>
      </>
    );
  }
}

export default HomeContent;
