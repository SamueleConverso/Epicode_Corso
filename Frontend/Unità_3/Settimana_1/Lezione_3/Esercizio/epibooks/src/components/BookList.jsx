import SingleBook from "./SingleBook";
import books from "../data/fantasy.json";
import { Col, Container } from "react-bootstrap";

function BookList() {
  return (
    <>
      <Container className="d-flex flex-wrap justify-content-center gap-3">
        {books.map((book) => {
          return (
            <Col key={book.asin}>
              <SingleBook book={book} />
            </Col>
          );
        })}
      </Container>
    </>
  );
}

export default BookList;
