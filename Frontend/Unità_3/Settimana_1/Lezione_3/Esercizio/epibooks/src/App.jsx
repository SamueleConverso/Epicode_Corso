//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
//import './App.css'
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
//import AllTheBooks from "./components/AllTheBooks";
import BookList from "./components/BookList";
import MyFooter from "./components/MyFooter";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //  const [count, setCount] = useState(0);

  return (
    <>
      <MyNav />
      <Welcome />
      {/* <AllTheBooks /> */}
      <BookList />
      <MyFooter />
    </>
  );
}

export default App;
