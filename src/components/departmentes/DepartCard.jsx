import { Button, ButtonGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineRightSquare } from "react-icons/ai";
import "./DepartCard.css";
export default function DepartCard({ name, id }) {
  return (
    <div>
      <Card
        className="shadow-sm overflow-hidden card-tool"
        style={{ minHeight: 150 }}
      >
        <Card.Body>
          <Card.Title
            className="py-3 text-center"
            style={{ lineHeight: "150px" }}
          >
            {name}
          </Card.Title>
          <ButtonGroup className="tooltip-btn">
            <Button as={Link} to="" variant="outline-danger" size="sm">
              <AiOutlineClose />
            </Button>
            <Button
              as={Link}
              to={`/admin/departments/${id}`}
              variant=""
              className="btn-outline-regal"
              size="sm"
            >
              <AiOutlineRightSquare />
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </div>
  );
}
