import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";
import {
  Form,
  Row,
  InputGroup,
  FormControl,
  Col,
  Button,
} from "react-bootstrap";

export default function AddExpenseForm() {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Col sm>
          <InputGroup className="mb-3">
            <FormControl
              id="cost"
              placeholder="name"
              aria-label="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </InputGroup>
        </Col>
        <Col sm>
          <InputGroup className="mb-3">
            <FormControl
              id="cost"
              placeholder="cost"
              aria-label="cost"
              value={cost}
              onChange={(event) => setCost(event.target.value)}
            />
          </InputGroup>
        </Col>
        <Col sm>
          {" "}
          <Button type="submit" variant="primary">
            Save
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
