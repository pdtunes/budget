import { Badge, ListGroup } from "react-bootstrap";
import { TiDelete } from "react-icons/ti";

export default function ExpenseItem(props) {
  return (
    <ListGroup.Item
      className="list-group-item d-flex justify-content-between align-items-center"
      key={props.id}
    >
      {props.name}
      <div>
        <span>
          <Badge pill variant="primary" className="mr-3">
            {props.cost},-
          </Badge>
        </span>
        <TiDelete size="1.5em" />
      </div>
    </ListGroup.Item>
  );
}
