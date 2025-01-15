/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
//import { Component } from "react";
import { Spinner, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MyGallery(props) {
  // state = {
  //   movies: [],
  //   isLoading: true,
  //   isError: false,
  //   errorMessage: "",
  // };

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  //const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const getMovies = async () => {
    try {
      let response = await fetch(props.query);
      if (response.ok) {
        let data = await response.json();
        console.log(data.Search);
        setMovies(data.Search);
        setIsLoading(false);
        //console.log(this.state.movies);
      } else {
        throw new Error("ERRORE");
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };

  // componentDidMount() {
  //   this.getMovies();
  // }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {isLoading && <Spinner animation="grow" variant="light" />}
      <div className="container-fluid mb-3">
        <h4>{props.galleryName}</h4>
      </div>
      {isError && (
        <Alert variant="danger" className="w-50 text-danger">
          ❌ An error has occurred.
        </Alert>
      )}
      <div className="container-fluid mb-5">
        <div
          id={props.carousel}
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row g-1">
                {movies.length > 6
                  ? movies.slice(0, 6).map((movie) => {
                      return (
                        <img
                          onClick={() => {
                            navigate("/movie-details/" + movie.imdbID);
                          }}
                          key={movie.imdbID}
                          src={movie.Poster}
                          className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                          alt="..."
                        />
                      );
                    })
                  : movies.map((movie) => {
                      return (
                        <img
                          onClick={() => {
                            navigate("/movie-details/" + movie.imdbID);
                          }}
                          key={movie.imdbID}
                          src={movie.Poster}
                          className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                          alt="..."
                        />
                      );
                    })}

                {/* <img
                    src="assets/img/media1.jpg"
                    className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                    alt="..."
                  />
                  <img
                    src="assets/img/media2.webp"
                    className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                    alt="..."
                  />
                  <img
                    src="assets/img/media3.webp"
                    className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                    alt="..."
                  />
                  <img
                    src="assets/img/media4.jpg"
                    className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                    alt="..."
                  />
                  <img
                    src="assets/img/media5.webp"
                    className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                    alt="..."
                  /> */}
              </div>
            </div>
            <div className="carousel-item">
              <div className="row g-1">
                {movies.length > 6
                  ? movies.slice(0, 6).map((movie) => {
                      return (
                        <img
                          onClick={() => {
                            navigate("/movie-details/" + movie.imdbID);
                          }}
                          key={movie.imdbID}
                          src={movie.Poster}
                          className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                          alt="..."
                        />
                      );
                    })
                  : movies}
                {/* <img
                    src="assets/img/media0.webp"
                    className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                    alt="..."
                  />
                  <img
                    src="assets/img/media1.jpg"
                    className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                    alt="..."
                  />
                  <img
                    src="assets/img/media2.webp"
                    className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                    alt="..."
                  />
                  <img
                    src="assets/img/media3.webp"
                    className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                    alt="..."
                  />
                  <img
                    src="assets/img/media4.jpg"
                    className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                    alt="..."
                  />
                  <img
                    src="assets/img/media5.webp"
                    className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                    alt="..."
                  /> */}
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={"#" + props.carousel}
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={"#" + props.carousel}
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default MyGallery;
