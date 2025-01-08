import { Carousel, Container, Row, Col } from "react-bootstrap";

function HomeContent() {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-12 col-md-6">
            <Carousel>
              {}

              <Carousel.Item>
                <img src="https://placecats.com/300/300" className="w-100" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomeContent;
