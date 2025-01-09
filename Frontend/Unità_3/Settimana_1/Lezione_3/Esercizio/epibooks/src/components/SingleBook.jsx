/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function SingleBook(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.book.img} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>{props.book.price}€</Card.Text>
        <Button
          variant="warning"
          className="mt-auto mx-auto"
          style={{ width: "fit-content" }}
        >
          Click
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
