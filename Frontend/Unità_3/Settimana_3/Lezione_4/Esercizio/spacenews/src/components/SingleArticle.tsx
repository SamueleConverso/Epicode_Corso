import { Card, Col } from "react-bootstrap";
import { ResultElement } from "../types/Result";
import { Link } from "react-router-dom";
interface Article {
  article: ResultElement;
}

function SingleArticle(props: Article) {
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={props.article.image_url} />
        <Card.Body>
          <Card.Title>{props.article.title}</Card.Title>
          <Card.Text>{props.article.summary}</Card.Text>
          <Link to={"/details/" + props.article.id}>
            <span className="btn btn-info">Details</span>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleArticle;
