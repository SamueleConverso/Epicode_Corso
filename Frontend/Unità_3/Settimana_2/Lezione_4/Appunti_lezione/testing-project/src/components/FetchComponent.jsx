// import { useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

function FetchComponent() {
  //   const [users, setUsers] = useState([]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <ListGroup>
            {/* {users.map((user) => {
              return <ListGroup.Item></ListGroup.Item>;
            })} */}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default FetchComponent;
