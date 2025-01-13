/* eslint-disable react/prop-types */
import { ListGroup } from "react-bootstrap";

function ShowValue(props) {
  return (
    <ListGroup>
      <ListGroup.Item>{props.clicked || 0}</ListGroup.Item>
    </ListGroup>
  );
}

export default ShowValue;
