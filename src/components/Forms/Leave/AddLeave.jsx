import { Button, Col, Container, Form, Row } from "react-bootstrap";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
export default function AddLeave() {
  const dispatch = useDispatch();
  let shema = object({
    start: string().required(),
    end: string().required(),
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
    // dispatch(addEmployee(data));
    // setTimeout(() => {
    //   dispatch(fetchEmployees());
    // }, 100);
    // console.log(data);
  };
  const onError = (error) => {
    error.start && toast.error(error.start.message);
    error.end && toast.error(error.end.message);
    error.name && toast.error(error.name.message);
  };
  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <Row>
            <Col sm="12" className="mb-3">
              <Form.FloatingLabel label="Type Leave">
                <Form.Select
                  className={errors.month && "border-danger"}
                  {...register("leaveType")}
                >
                  <option>Select Type Leave</option>
                  <option value="casual">Casual Leave</option>
                  <option value="medical">Medical Leave</option>
                  <option value="loss">Loss of Pay</option>
                </Form.Select>
              </Form.FloatingLabel>
            </Col>
            <Col sm="12" className="mb-3">
              <Form.FloatingLabel label="From">
                <Form.Control
                  className={errors.start && "border-danger"}
                  {...register("startLeave")}
                  placeholder="From"
                  type="date"
                />
              </Form.FloatingLabel>
            </Col>
            <Col sm="12" className="mb-3">
              <Form.FloatingLabel label="To">
                <Form.Control
                  className={errors.end && "border-danger"}
                  {...register("end")}
                  placeholder="To"
                  type="date"
                />
              </Form.FloatingLabel>
            </Col>
            <Col sm="12" className="mb-3">
              <Form.FloatingLabel label="Name" className="p-0">
                <Form.Control
                  className={errors.name && "border-danger"}
                  {...register("name")}
                  placeholder="Name"
                />
              </Form.FloatingLabel>
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
