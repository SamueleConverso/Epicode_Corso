import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import ClassComponent from "./components/ClassComponent";
import FuncComponent from "./components/FuncComponent";
import FormExample from "./components/FormExample";

function App() {
  return (
    <>
      {/* <ClassComponent title="CIAO" />
      <ClassComponent title="CIAO2" counter={2} /> */}
      <FuncComponent title="TITOLO"></FuncComponent>
      <FormExample />
    </>
  );
}
export default App;
