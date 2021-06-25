import { Alert } from "react-bootstrap";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Remaining() {
  const { expenses, budget } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";
  return (
    <Alert variant={`alert ${alertType}`}>
      <span>Budget: {budget - totalExpenses}</span>
    </Alert>
  );
}
