import { Fragment } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEmployees,
  filterByCode,
  filterByEmail,
  filterByName,
} from "../../redux/slices/employee-slice";
export default function Filters() {
  const dispatch = useDispatch();
  const { employees } = useSelector((state) => state);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.name !== "") {
      dispatch(filterByName(data.name));
    } else if (data.email !== "") {
      dispatch(filterByEmail(data.email));
    } else if (data.code !== "") {
      dispatch(filterByCode(data.code));
    } else {
      dispatch(fetchEmployees());
    }
    reset();
  };
  console.log(errors);
  return (
    <div className="my-4">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col sm="12" md="6" lg="3" className="mb-3">
            <Form.Select {...register("name")}>
              <option value="">Select Name</option>
              {employees.employees.map((employee) => (
                <Fragment key={employee.id}>
                  <option value={employee.name}>{employee.name}</option>
                </Fragment>
              ))}
            </Form.Select>
          </Col>
          <Col sm="12" md="6" lg="3" className="mb-3">
            <Form.Select
              className={errors.month && "border-danger"}
              {...register("month")}
              placeholder="Email"
              type="email"
            >
              <option>Select Month</option>
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </Form.Select>
          </Col>
          <Col sm="12" md="6" lg="3" className="mb-3">
            <Form.Select
              className={errors.month && "border-danger"}
              {...register("year")}
            >
              <option>Select Year</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </Form.Select>
          </Col>
          <Col sm="12" md="6" lg="3" className="mb-3">
            <Button type="submit" variant="success" className="w-100">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
