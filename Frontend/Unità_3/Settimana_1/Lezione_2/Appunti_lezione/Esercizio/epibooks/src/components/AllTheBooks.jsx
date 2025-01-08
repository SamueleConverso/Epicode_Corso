import { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fantasyBooks from "../data/fantasy.json";

class AllTheBooks extends Component {
  render() {
    return (
      <>
        <Container className="d-flex flex-wrap justify-content-center gap-3">
          {fantasyBooks.map((book) => {
            return (
              <Card key={book.asin} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.price}€</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            );
          })}
        </Container>
      </>
    );
  }
}

export default AllTheBooks;
