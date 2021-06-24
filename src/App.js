import "./App.css";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <Container>
        <h1 className="mt-3">My budget planner</h1>
        <Row className="row mt-3">
          <Col sm>
            <Budget />
          </Col>
          <Col sm>
            <Remaining />
          </Col>
          <Col sm>
            <ExpenseTotal />
          </Col>
        </Row>
        <h3 className="mt-3">Expenses</h3>
        <Row className="mt-3">
          <Col sm>
            <ExpenseList />
          </Col>
        </Row>
        <h3 className="mt-3">Add Expenses</h3>
        <Row className="mt-3">
          <Col sm>
            <AddExpenseForm />
          </Col>
        </Row>
      </Container>
    </AppProvider>
  );
}

export default App;
