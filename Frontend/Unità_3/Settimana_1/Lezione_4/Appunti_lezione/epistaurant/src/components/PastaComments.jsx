import { Row, Col, ListGroup } from "react-bootstrap";

function PastaComments(props) {
  return (
    <>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <ListGroup className="text-center">
            {props.pasta.comments.map((r) => {
              return <ListGroup.Item key={r.id}>{r.comment}</ListGroup.Item>;
            })}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}

export default PastaComments;
