import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import TrAdminAttend from "../../../components/Attendance/TrAdminAttend";
import TakeAttend from "../../../components/Forms/Attendance/TakeAttend";
import AddLeave from "../../../components/Forms/Leave/AddLeave";
import Modals from "../../../components/Modals";
import { openModal } from "../../../redux/slices/layout-slice";

export default function Leave() {
  const { employees } = useSelector((state) => state);
  const dispatch = useDispatch();

  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  return (
    <>
      <div className="d-flex justify-content-center my-3 ">
        <div className="fs-3 fw-bold text-regal">Leave</div>
      </div>
      <Modals title={"Add Leave"}>
        <AddLeave />
      </Modals>
      <div className="d-flex justify-content-end my-3 ">
        <Button className="btn-regal " onClick={() => dispatch(openModal())}>
          Add Leave
        </Button>
      </div>
      <Table striped responsive>
        <thead>
          <tr>
            <th className="table-th-custom">
              <div style={{ width: 150 }}>Employee</div>
            </th>
            {arr.map((item) => (
              <th className="table-th-custom">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.filterByName.length !== 0
            ? employees.filterByName.map((employee, index) => (
                <TrAdminAttend employee={employee} />
              ))
            : employees.filterByEmail.length !== 0
            ? employees.filterByEmail.map((employee, index) => (
                <TrAdminAttend employee={employee} />
              ))
            : employees.filterByCode.length !== 0
            ? employees.filterByCode.map((employee, index) => (
                <TrAdminAttend employee={employee} />
              ))
            : employees.employees.map((employee) => (
                <>
                  <TrAdminAttend employee={employee} />
                </>
              ))}
        </tbody>
      </Table>
    </>
  );
}
/*

*/
