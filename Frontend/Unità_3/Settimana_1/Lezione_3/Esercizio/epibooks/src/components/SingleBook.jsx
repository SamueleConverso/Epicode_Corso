/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  classToAdd() {
    if (this.state.selected) {
      return "border-danger border-5";
    } else {
      return "border-0";
    }
  }

  render() {
    return (
      <Card
        className={this.classToAdd()}
        style={{ width: "18rem" }}
        onClick={() => {
          if (this.state.selected) {
            this.setState({ selected: false });
          } else {
            this.setState({ selected: true });
          }
        }}
      >
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
