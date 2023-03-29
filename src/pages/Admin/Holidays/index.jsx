import { useEffect, useState } from "react";
import { Button, Dropdown, Modal, Table } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import AddHolidays from "../../../components/Forms/Attendance/AddHolidays";
import EditHoliday from "../../../components/Forms/Holidays/EditHoliday";
import Modals from "../../../components/Modals";
import { fetchEmployees } from "../../../redux/slices/employee-slice";
import {
  deleteholidays,
  fetchHolidays,
} from "../../../redux/slices/holidays-slice";
import { openModal } from "../../../redux/slices/layout-slice";
export default function Holidays() {
  const { holidays } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#123456",
      cancelButtonColor: "#D33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteholidays(id));
        setTimeout(() => {
          dispatch(fetchHolidays());
        }, 200);
      }
    });
  };
  useEffect(() => {
    dispatch(fetchHolidays());
  }, [dispatch]);
  console.log(holidays);
  const [show, setShow] = useState(false);
  const [holidayId, setHolidayId] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setHolidayId(id);
  };
  return (
    <>
      <div className="d-flex justify-content-center my-3 ">
        <div className="fs-3 fw-bold text-center text-regal">Holidays</div>
      </div>
      <Modals>
        <AddHolidays />
      </Modals>
      <EditHoliday
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        setShow={setShow}
        holidayId={holidayId}
      />
      <div className="d-flex justify-content-end my-3">
        <Button
          variant="success"
          onClick={() => {
            dispatch(openModal());
          }}
        >
          Take Holiday
        </Button>
      </div>
      <Table striped responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {holidays.holidays.map((holiday) => (
            <tr key={holiday.id}>
              <td>{holiday.id}</td>
              <td>{holiday.holidayName}</td>
              <td>{holiday.holidayDate}</td>
              <td className="text-center">
                <Dropdown className="d-flex ">
                  <Dropdown.Toggle
                    className="custom-toggle bg-none"
                    variant=""
                    id="dropdown-basic"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => handleShow(holiday.id)}
                      className="d-flex align-items-center gap-2"
                    >
                      <BiEdit size={20} /> <span>Edit</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleDelete(holiday.id)}
                      className="d-flex align-items-center gap-2"
                    >
                      <AiOutlineDelete size={20} /> <span>Delete</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
/*

*/
