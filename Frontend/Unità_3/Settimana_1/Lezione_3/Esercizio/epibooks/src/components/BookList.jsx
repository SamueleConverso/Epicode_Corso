/* eslint-disable react/prop-types */
import { Component } from "react";
import SingleBook from "./SingleBook";
//import books from "../data/fantasy.json";
import { Container, Form } from "react-bootstrap";

//let isClicked = false;
//let filteredBooks = [];

class BookList extends Component {
  state = {
    query: "",
  };
  render() {
    return (
      <>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            this.setState({ query: "" });
          }}
        >
          <Form.Control
            value={this.state.query}
            onChange={(e) => {
              this.setState({
                query: e.target.value,
              });
            }}
            type="text"
            placeholder="Ricerca..."
          />
          {/* <Button type="submit">Cerca</Button> */}
        </Form>
        <Container className="d-flex flex-wrap justify-content-center gap-3">
          {!this.state.query
            ? this.props.bookList.map((book) => {
                return <SingleBook key={book.asin} book={book} />;
              })
            : this.props.bookList
                .filter((filteredBook) =>
                  filteredBook.title
                    .toLowerCase()
                    .includes(this.state.query.toLowerCase())
                )
                .map((book) => {
                  return <SingleBook key={book.asin} book={book} />;
                })}
        </Container>
      </>
    );
  }
}

export default BookList;

//this.props.bookList.filter((filteredBook) => filteredBook.title.includes(this.state.query)).map((book) => {return <SingleBook key={book.asin} book={book} />;})
