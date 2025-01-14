import { Card } from "react-bootstrap";
//import CommentArea from "./CommentArea";

function SingleBook(props) {
  // state = {
  //   selected: false,
  // }

  return (
    <>
      <Card
        onClick={() => props.changeState(props.book.asin)}
        style={{ border: props.selected ? "3px solid red" : "none" }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
      {/* {this.props.selected && <CommentArea asin={this.props.book.asin} />} */}
    </>
  );
}

export default SingleBook;
