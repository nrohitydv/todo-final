import { Button } from "react-bootstrap";
import Home from "./Nav";

function ButtonComponent() {
  return (
    <>
      <Button variant="primary" onClick={<Home />}>
        Primary
      </Button>{" "}
    </>
  );
}

export default ButtonComponent;
