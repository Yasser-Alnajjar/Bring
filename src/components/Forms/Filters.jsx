import { Fragment, useState } from "react";
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
            <Form.Select
              className="selectpicker"
              data-show-subtext="true"
              data-live-search="true"
              {...register("name")}
            >
              <option value="">Select Name</option>
              {employees.employees.map((employee) => (
                <Fragment key={employee.id}>
                  <option value={employee.name}>{employee.name}</option>
                </Fragment>
              ))}
            </Form.Select>
          </Col>
          <Col sm="12" md="6" lg="3" className="mb-3">
            <Form.Control
              className={errors.email && "border-danger"}
              {...register("email")}
              placeholder="Email"
              type="email"
            />
          </Col>
          <Col sm="12" md="6" lg="3" className="mb-3">
            <Form.Control
              className={errors.code && "border-danger"}
              {...register("code")}
              placeholder="Code"
              type="code"
            />
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
