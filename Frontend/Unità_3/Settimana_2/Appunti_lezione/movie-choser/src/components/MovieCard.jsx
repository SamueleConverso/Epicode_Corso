import { Component } from "react";
import { Card } from "react-bootstrap";

class MovieCard extends Component {
  state = {
    movieData: {},
  };

  getMovieData = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=57fb0e95&s=" + this.props.movieTitle
      );
      if (response.ok) {
        let data = await response.json();
        console.log("Dati arrivati", data.Search[0]);
        this.setState({ movieData: data.Search[0] });
      } else {
        throw new Error("Errore");
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  componentDidMount() {
    this.getMovieData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.movieTitle !== this.props.movieTitle) {
      this.getMovieData();
    }
  }

  render() {
    return (
      <Card>
        <Card.Img variant="top" src={this.state.movieData.Poster} />
        <Card.Body>
          <Card.Title>{this.state.movieData.Title}</Card.Title>
          <Card.Text>
            {this.state.movieData.Type} - {this.state.movieData.Year}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default MovieCard;
