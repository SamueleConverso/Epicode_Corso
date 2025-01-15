/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const params = useParams();
  const apiKey = "57fb0e95";

  const URL = `http://www.omdbapi.com/?apikey=${apiKey}&i=${params.movieId}`;

  const [movie, setMovie] = useState({});

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

  useEffect(() => {
    getMovie();
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
    </>
  );
}

export default MovieDetails;
