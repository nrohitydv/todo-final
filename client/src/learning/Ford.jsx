import { useState } from "react";
import { Button } from "react-bootstrap";
export default function Ford() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const updateColor = () => {
    setCar((previousState) => {
      const newColor = previousState.color === "red" ? "blue" : "yellow";
      return { ...previousState, color: newColor };
    });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <Button type="button" variant="danger" onClick={updateColor}>
        Change Color
      </Button>
    </>
  );
}
