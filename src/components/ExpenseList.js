import { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { ListGroup } from "react-bootstrap";
import { AppContext } from "../context/AppContext";

export default function ExpenseList() {
  const { expenses } = useContext(AppContext);
  return (
    <ListGroup>
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ListGroup>
  );
}
