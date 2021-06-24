import {
  Form,
  Row,
  InputGroup,
  FormControl,
  Col,
  Button,
} from "react-bootstrap";

export default function AddExpenseForm() {
  return (
    <Form>
      <Row>
        <Col sm>
          <InputGroup className="mb-3">
            <FormControl id="cost" placeholder="name" aria-label="name" />
          </InputGroup>
        </Col>
        <Col sm>
          <InputGroup className="mb-3">
            <FormControl id="cost" placeholder="cost" aria-label="cost" />
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
