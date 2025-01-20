import { useSelector } from "react-redux";
import { Button, ListGroup, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function Favourites() {
  const favJobs = useSelector((state) => {
    return state.favourites.jobs;
  });

  const dispatch = useDispatch();

  return (
    <ListGroup>
      {favJobs.map((job, i) => {
        return (
          <Container key={i}>
            <Row className="justify-content-center align-items-center">
              <Col xs={6} className="mt-2">
                <Link to={`/${job}`}>
                  <ListGroup.Item className="text-center">{job}</ListGroup.Item>
                </Link>
              </Col>
              <Col xs={6} className="d-flex justify-content-center">
                <Button
                  style={{ width: "fit-content" }}
                  variant="danger"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_FAVOURITES",
                      payload: job,
                    });
                  }}
                >
                  🗑️
                </Button>
              </Col>
            </Row>
          </Container>
        );
      })}
    </ListGroup>
  );
}

export default Favourites;
