// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Click from "./components/Click";
import ShowValue from "./components/ShowValue";
import { Component } from "react";

class App extends Component {
  //const [count, setCount] = useState(0)

  state = {
    clicked: 0,
  };

  changeAppState = (value) => {
    this.setState({ clicked: value });
  };

  render() {
    return (
      <>
        <Click clicking={this.changeAppState} />
        <ShowValue clicked={this.state.clicked} />
        {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
      </p> */}
      </>
    );
  }
}

export default App;
