import { useEffect, useState } from "react";
import { ResultElement } from "../types/Result";
import SingleArticle from "./SingleArticle";
import { Container, Row } from "react-bootstrap";

function Homepage() {
  const [articles, setArticles] = useState<ResultElement[]>([]);

  const getArticles = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data.results);
        setArticles(data.results);
      } else {
        throw new Error("ERRORE");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div>
      <h1 className="text-center">Benvenuto nell'app Spacenews!</h1>
      <Container>
        <Row>
          {articles &&
            articles.map((article) => {
              return <SingleArticle key={article.id} article={article} />;
            })}
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
