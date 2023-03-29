import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  addEmployee,
  fetchEmployees,
} from "../../../redux/slices/employee-slice";
import { addHolidy, fetchHolidays } from "../../../redux/slices/holidays-slice";
export default function AddHolidays() {
  const dispatch = useDispatch();
  let shema = object({
    holidayName: string().required(),
    holidayDate: string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shema),
  });
  const onSubmit = (data) => {
    dispatch(addHolidy(data));
    setTimeout(() => {
      dispatch(fetchHolidays());
    }, 100);
  };
  const onError = (error) => {
    error.holidayDate && toast.error(error.start.message);
    error.holidayName && toast.error(error.holidayName.message);
  };
  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <Row>
            <Col sm="12" className="mb-3">
              <Form.Label className="fw-bold">Holiday Name</Form.Label>
              <Form.Control
                className={errors.holidayName && "border-danger"}
                {...register("holidayName")}
              />
            </Col>
            <Col sm="12" className="mb-3">
              <Form.Label className="fw-bold">Holiday Date</Form.Label>
              <Form.Control
                className={errors.start && "border-danger"}
                {...register("holidayDate")}
                type="date"
              />
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
