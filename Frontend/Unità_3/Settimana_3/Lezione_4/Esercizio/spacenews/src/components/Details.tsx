/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ResultElement } from "../types/Result";

function Details() {
  const params = useParams();
  const [article, setArticle] = useState<ResultElement>();
  const getSingleArticle = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles/" + params.articleId
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setArticle(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleArticle();
  }, []);
  return (
    <>
      <h1 className="text-center">Dettagli articolo</h1>
      <div className="d-flex justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={article?.image_url} />
          <Card.Body>
            <Card.Title>{article?.title}</Card.Title>
            <Card.Text>{article?.summary}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Details;
