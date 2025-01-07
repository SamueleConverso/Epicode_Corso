import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import SayHello from "./components/SayHello";

function App() {
  const [count, setCount] = useState(0);

  return (
    //react FRAGMENT
    // un fragment è un contenitore "fittizio" che serve
    //a fornire un unico "padre" a diversi elementi JSX (perché
    //non è possibile ritornare multipli figli da un componente React)
    <>
      <FunctionalComponent />
      <ClassComponent title="Ciaone" />

      <SayHello personName="Samuele" />
      <SayHello personName="Giuseppe" />
      <SayHello personName="Francesco" />

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Primo progetto REACT!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
