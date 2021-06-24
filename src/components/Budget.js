import { Alert } from "react-bootstrap";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

export default function Budget() {
  const { budget } = useContext(AppContext);

  return (
    <Alert variant="secondary">
      <span>Budget: NOK{budget}</span>
    </Alert>
  );
}
