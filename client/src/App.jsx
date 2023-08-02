import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./components/Title";
import ButtonComponent from "./components/Button";
import Home from "./components/Nav";
import Goal from "./components/Goal";
import Garage from "./components/Garage";
function App() {
  return (
    <>
      <Home />
      <ButtonComponent />
      <Garage cars={["audi", "bmw"]} />
    </>
  );
}

export default App;
