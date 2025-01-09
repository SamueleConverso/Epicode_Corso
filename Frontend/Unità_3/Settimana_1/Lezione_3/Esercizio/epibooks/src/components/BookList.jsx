import SingleBook from "./SingleBook";
import books from "../data/fantasy.json";
import { Container } from "react-bootstrap";

function BookList() {
  return (
    <>
      <Container className="d-flex flex-wrap justify-content-center gap-3">
        {books.map((book) => {
          return <SingleBook key={book.asin} book={book} />;
        })}
      </Container>
    </>
  );
}

export default BookList;
