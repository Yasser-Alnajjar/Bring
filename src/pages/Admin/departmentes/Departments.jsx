import { Col, Container, Row } from "react-bootstrap";
import DepartCard from "../../../components/departmentes/DepartCard";

export default function Departments() {
  let departs = [
    { id: 1, name: "Markting" },
    { id: 2, name: "Tecnical" },
    { id: 3, name: "Support" },
    { id: 4, name: "Anything" },
    { id: 5, name: "Anything" },
    { id: 6, name: "Anything" },
  ];
  return (
    <div className="mt-4">
      <Container>
        <Row>
          {departs.map((item) => (
            <Col key={item.id} sm="12" md="3" className="mb-4">
              <DepartCard name={item.name} id={item.id} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
