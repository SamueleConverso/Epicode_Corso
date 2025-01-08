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
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.price}€</Card.Text>
                  <Button
                    variant="primary"
                    className="mt-auto mx-auto"
                    style={{ width: "fit-content" }}
                  >
                    Go somewhere
                  </Button>
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
