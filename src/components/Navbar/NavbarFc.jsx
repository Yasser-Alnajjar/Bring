import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function NavbarFc() {
  return (
    <Navbar collapseOnSelect className="border-bottom" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/dashboard" className="text-regal fw-bold">
          Bring
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mt-4 mt-lg-0">
            <Nav.Link
              eventKey={0}
              className={`me-2 text-regal link-animate text-capitalize`}
              as={Link}
              to={"/dashboard"}
            >
              Dashboard
            </Nav.Link>
            <Nav.Link
              eventKey={1}
              className="me-2 text-regal link-animate text-capitalize"
              as={Link}
              to={"/dashboard/departments"}
            >
              Departments
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              className="me-2 text-regal link-animate text-capitalize"
              as={Link}
              to={"/dashboard/employees"}
            >
              Employees
            </Nav.Link>
            <Nav.Link
              eventKey={3}
              className="me-2 text-regal link-animate text-capitalize"
              as={Link}
              to={"/dashboard/attendance"}
            >
              Attendance
            </Nav.Link>
            <Nav.Link
              eventKey={4}
              className="me-2 text-regal link-animate text-capitalize"
              as={Link}
              to={"/dashboard/leave"}
            >
              Leave
            </Nav.Link>
            <Nav.Link
              eventKey={5}
              className="text-regal link-animate text-capitalize"
              as={Link}
              to={"/dashboard/holidays"}
            >
              Holidays
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
