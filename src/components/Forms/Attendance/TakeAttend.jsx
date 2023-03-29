import { Button, Col, Container, Form, Row } from "react-bootstrap";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bool, object, string } from "yup";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  addEmployee,
  fetchEmployees,
} from "../../../redux/slices/employee-slice";
import { addAttend } from "../../../redux/slices/attendance-slice";
export default function TakeAttend() {
  const dispatch = useDispatch();
  let shema = object({
    attend: bool().required(),
    day: string().required(),
    name: string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shema),
  });
  const onSubmit = (data) => {
    dispatch(addAttend(data));
    setTimeout(() => {
      dispatch(fetchEmployees());
    }, 100);
  };
  const onError = (error) => {
    error.name && toast.error(error.name.message);
    error.attend && toast.error(error.attend.message);
    error.day && toast.error(error.day.message);
  };
  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <Row>
            <Col sm="12" className="mb-3">
              <Form.FloatingLabel label="Name" className="p-0">
                <Form.Control
                  className={errors.name && "border-danger"}
                  {...register("name")}
                  placeholder="Name"
                />
              </Form.FloatingLabel>
            </Col>
            <Col sm="12" className="mb-3">
              <Form.FloatingLabel label="Attend Date">
                <Form.Control
                  className={errors.day && "border-danger"}
                  {...register("day")}
                  placeholder="Attend Date"
                  type="date"
                />
              </Form.FloatingLabel>
            </Col>
            <Col sm="12" className="mb-3">
              <Form.Group
                {...register("attend")}
                className={errors.name && "border-danger"}
              >
                <Form.Check
                  type="radio"
                  className="text-capitalize"
                  label="leave"
                  name="attendance"
                  id="leave"
                />
                <Form.Check
                  type="radio"
                  className="text-capitalize"
                  label="attend"
                  name="attendance"
                  id="attend"
                />
              </Form.Group>
            </Col>
            <Col sm="12" className="text-center">
              <Button type="submit" variant="" className="btn-regal w-25">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
