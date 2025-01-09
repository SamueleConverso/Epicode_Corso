/* eslint-disable react/prop-types */
import { Component } from "react";
import SingleBook from "./SingleBook";
//import books from "../data/fantasy.json";
import { Container, Form, Button } from "react-bootstrap";

class BookList extends Component {
  state = {
    query: "",
  };
  render() {
    return (
      <>
        <Form onSubmit="">
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
          <Button type="submit">Cerca</Button>
        </Form>
        <Container className="d-flex flex-wrap justify-content-center gap-3">
          {this.props.bookList.map((book) => {
            return <SingleBook key={book.asin} book={book} />;
          })}
        </Container>
      </>
    );
  }
}

export default BookList;
