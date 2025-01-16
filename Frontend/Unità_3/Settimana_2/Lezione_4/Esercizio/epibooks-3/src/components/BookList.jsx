import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    selected: null,
  };

  changeState = (asin) => {
    if (this.state.selected !== asin) {
      this.setState({ selected: asin });
    } else {
      this.setState({ selected: null });
    }
  };

  render() {
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2 mt-3">
          <Col xs={6}>
            <Row>
              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((b) => (
                  <Col xs={6} key={b.asin} data-testid="book element">
                    <SingleBook
                      book={b}
                      selected={this.state.selected === b.asin ? true : false}
                      changeState={this.changeState}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col xs={6}>
            <h1>SEZIONE COMMENTI</h1>
            {this.state.selected && (
              <CommentArea asin={this.state.selected}></CommentArea>
            )}
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
