import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./components/Title";
import ButtonComponent from "./components/Button";
function App() {
  return (
    <>
      {/*<Routes>
        <Route path="/" element={<h1>Home</h1>} />
  </Routes>*/}
      <Title />
      <ButtonComponent />
    </>
  );
}

export default App;
