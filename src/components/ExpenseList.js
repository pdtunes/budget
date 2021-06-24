import ExpenseItem from "./ExpenseItem";
import { ListGroup } from "react-bootstrap";

export default function ExpenseList() {
  const expenses = [
    { id: 1, name: "shopping", cost: 50 },
    { id: 2, name: "holiday", cost: 500 },
    { id: 3, name: "transport", cost: 30 },
    { id: 4, name: "fuel", cost: 501 },
    { id: 5, name: "incurance", cost: 505 },
  ];

  return (
    <ListGroup>
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ListGroup>
  );
}
