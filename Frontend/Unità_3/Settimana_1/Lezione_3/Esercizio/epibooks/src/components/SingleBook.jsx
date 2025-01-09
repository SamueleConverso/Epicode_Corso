/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>{this.props.book.price}€</Card.Text>
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
}

export default SingleBook;
