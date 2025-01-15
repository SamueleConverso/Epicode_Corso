import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
//import "bootstrap-icons/font/bootstrap-icons.min.css";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import MyGallery from "./components/MyGallery";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MyHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={"/my-gallery"}
          element={
            <>
              <MyGallery
                query={
                  "http://www.omdbapi.com/?apikey=57fb0e95&s=Harry%20Potter"
                }
                carousel={0}
                galleryName={"Harry Potter"}
              />
              <MyGallery
                query={
                  "http://www.omdbapi.com/?apikey=57fb0e95&s=The%20Lord%20Of%20The%20Rings"
                }
                carousel={1}
                galleryName={"The Lord Of The Rings"}
              />
              <MyGallery
                query={"http://www.omdbapi.com/?apikey=57fb0e95&s=Twilight"}
                carousel={2}
                galleryName={"Twilight"}
              />
            </>
          }
        />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
