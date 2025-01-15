/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const params = useParams();
  const apiKey = "57fb0e95";

  const URL = `http://www.omdbapi.com/?apikey=${apiKey}&i=${params.movieId}`;
  const URL2 =
    "https://striveschool-api.herokuapp.com/api/comments/" + params.movieId;

  const [movie, setMovie] = useState({});
  const [comments, setComments] = useState([]);

  const getMovie = async () => {
    try {
      let response = await fetch(URL);
      if (response.ok) {
        let data = await response.json();
        setMovie(data);
        console.log(data);
        // setMovies(data.Search);
        // setIsLoading(false);
        //console.log(this.state.movies);
      } else {
        throw new Error("ERRORE");
      }
    } catch (error) {
      //   setIsLoading(false);
      //   setIsError(true);
      console.log(error);
    }
  };

  const getComments = async () => {
    try {
      let response = await fetch(URL2, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjcxMWQyMjA3MTAwMTVkZTJmM2MiLCJpYXQiOjE3MzY3NzU0OTIsImV4cCI6MTczNzk4NTA5Mn0.osQ2_e4s_GY6jCxZqAeauysgRNBkXeGKYLGPn7kHr9E",
        },
      });
      if (response.ok) {
        let data = await response.json();
        setComments(data);
        console.log(data);
        // setMovies(data.Search);
        // setIsLoading(false);
        //console.log(this.state.movies);
      } else {
        throw new Error("ERRORE");
      }
    } catch (error) {
      //   setIsLoading(false);
      //   setIsError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
    getComments();
  }, []);

  return (
    <>
      <h1 className="text-center">Movie Details</h1>
      <div className="d-flex justify-content-center">
        <Card className="bg-dark text-center" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={movie.Poster} />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>{movie.Plot}</Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
      <ListGroup className="mt-2">
        {comments.map((comment) => {
          return (
            <ListGroup.Item
              className="text-black text-center"
              key={comment._id}
            >
              {comment.comment}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
}

export default MovieDetails;
