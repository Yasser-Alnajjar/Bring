import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchHolidays,
  singleHoliday,
  updateHoliday,
} from "../../../redux/slices/holidays-slice";
import { useEffect } from "react";
export default function EditHoliday({
  handleClose,
  handleShow,
  show,
  setShow,
  holidayId,
}) {
  const dispatch = useDispatch();
  const { holidays } = useSelector((state) => state);
  let shema = object({
    holidayName: string().required(),
    holidayDate: string().required(),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      holidayName: holidays.singleHoliday.holidayName,
      holidayDate: holidays.singleHoliday.holidayDate,
    },
    resolver: yupResolver(shema),
  });
  const onSubmit = (data) => {
    dispatch(updateHoliday([holidayId, data]));
    setTimeout(() => {
      dispatch(fetchHolidays());
    }, 100);
    handleClose();
  };
  const onError = (error) => {
    error.holidayDate && toast.error(error.start.message);
    error.holidayName && toast.error(error.holidayName.message);
  };
  useEffect(() => {
    reset(holidays.singleHoliday);
  }, [reset, holidays.singleHoliday]);
  useEffect(() => {
    dispatch(singleHoliday(holidayId));
  }, [dispatch, holidayId]);
  return (
    <div>
      <Modal
        className="d-flex align-items-center"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-regal">Edit Holiday</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
      </Modal>
    </div>
  );
}
