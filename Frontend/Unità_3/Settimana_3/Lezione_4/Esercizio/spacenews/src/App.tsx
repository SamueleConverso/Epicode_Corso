//import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/Details";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:articleId" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
