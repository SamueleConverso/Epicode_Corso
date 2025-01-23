import { Card, Button } from "react-bootstrap";
import { ResultElement } from "../types/Result";
interface Article {
  article: ResultElement;
}

function SingleArticle(props: Article) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.article.image_url} />
      <Card.Body>
        <Card.Title>{props.article.title}</Card.Title>
        <Card.Text>{props.article.summary}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default SingleArticle;
