import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./components/Title";
import ButtonComponent from "./components/Button";
import Home from "./components/Nav";
import Garage from "./learning/Garage";
import FavoriteColor from "./learning/FavoriteColor";
import Ford from "./learning/Ford";
function App() {
  return (
    <>
      <Home />
      <Title />
      <ButtonComponent />
      <Garage />
      <FavoriteColor />
      <Ford />
    </>
  );
}

export default App;
