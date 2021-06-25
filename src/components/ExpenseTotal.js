import { Alert } from "react-bootstrap";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

export default function ExpenseTotal() {
  const { expenes } = useContext(AppContext);
  return (
    <Alert variant="primary">
      <span>Spent so far: NOK1000</span>
    </Alert>
  );
}
