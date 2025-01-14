import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useState } from "react";

function BookList(props) {
  // state = {
  //   searchQuery: "",
  //   selected: null,
  // };

  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const changeState = (asin) => {
    if (selected !== asin) {
      setSelected(asin);
    } else {
      setSelected(null);
    }
  };

  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={4} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="g-2 mt-3">
        <Col xs={6}>
          <Row>
            {props.books
              .filter((b) => b.title.toLowerCase().includes(searchQuery))
              .map((b) => (
                <Col xs={6} key={b.asin}>
                  <SingleBook
                    book={b}
                    selected={selected === b.asin ? true : false}
                    changeState={changeState}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col xs={6}>
          <h1>SEZIONE COMMENTI</h1>
          {selected && <CommentArea asin={selected}></CommentArea>}
        </Col>
      </Row>
    </>
  );
}

export default BookList;
