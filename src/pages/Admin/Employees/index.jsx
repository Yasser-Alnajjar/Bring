import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Dropdown, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import AddEmployee from "../../../components/Forms/Employee/AddEmployee.jsx";
import Filters from "../../../components/Forms/Filters";
import Modals from "../../../components/Modals";
import {
  deleteEmployee,
  fetchEmployees,
} from "../../../redux/slices/employee-slice";
import { openModal } from "../../../redux/slices/layout-slice";
import {
  AiOutlineDelete,
  AiOutlineUserDelete,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import TRowEmployee from "../../../components/Forms/Employee/TRowEmployee";
export default function Employees() {
  const { employees, filterByName, filterByEmail, filterByCode } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);
  console.log(
    "filterByName",
    employees.filterByName.length,
    "filterByEmail",
    employees.filterByEmail.length
  );
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
        dispatch(deleteEmployee(id));
        setTimeout(() => {
          dispatch(fetchEmployees());
        }, 100);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <>
      <Modals size="lg" title={"Add Employee"}>
        <AddEmployee />
      </Modals>
      <div className="d-flex justify-content-between my-3 ">
        <div className="fs-3 fw-bold text-regal">Employee</div>
        <Button className="btn-regal" onClick={() => dispatch(openModal())}>
          Add Employee
        </Button>
      </div>
      {/* Start Filters */}
      <Filters />
      {/* End Filters */}
      <Table responsive hover>
        <thead>
          <tr>
            <th className="text-regal">#</th>
            <th className="text-regal">Name</th>
            <th className="text-regal">Email</th>
            <th className="text-regal">Role</th>
            <th className="text-regal">Code</th>
            <th className="text-center text-regal">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.filterByName.length !== 0
            ? employees.filterByName.map((employee, index) => (
                <tr key={employee.id}>
                  <TRowEmployee employee={employee} index={index}>
                    <Dropdown.Item
                      as={Link}
                      to={`/dashboard/employees/${employee.id}`}
                      className="d-flex align-items-center gap-2"
                    >
                      <BiEdit size={20} /> <span>Edit</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleDelete(employee.id)}
                      className="d-flex align-items-center gap-2"
                    >
                      <AiOutlineDelete size={20} /> <span>Delete</span>
                    </Dropdown.Item>
                  </TRowEmployee>
                </tr>
              ))
            : employees.filterByEmail.length !== 0
            ? employees.filterByEmail.map((employee, index) => (
                <tr key={employee.id}>
                  <TRowEmployee employee={employee} index={index}>
                    <Dropdown.Item
                      as={Link}
                      to={`/dashboard/employees/${employee.id}`}
                      className="d-flex align-items-center gap-2"
                    >
                      <BiEdit size={20} /> <span>Edit</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleDelete(employee.id)}
                      className="d-flex align-items-center gap-2"
                    >
                      <AiOutlineDelete size={20} /> <span>Delete</span>
                    </Dropdown.Item>
                  </TRowEmployee>
                </tr>
              ))
            : employees.filterByCode.length !== 0
            ? employees.filterByCode.map((employee, index) => (
                <tr key={employee.id}>
                  <TRowEmployee employee={employee} index={index}>
                    <Dropdown.Item
                      as={Link}
                      to={`/dashboard/employees/${employee.id}`}
                      className="d-flex align-items-center gap-2"
                    >
                      <BiEdit size={20} /> <span>Edit</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleDelete(employee.id)}
                      className="d-flex align-items-center gap-2"
                    >
                      <AiOutlineDelete size={20} /> <span>Delete</span>
                    </Dropdown.Item>
                  </TRowEmployee>
                </tr>
              ))
            : employees.employees.map((employee, index) => (
                <tr key={employee.id}>
                  <TRowEmployee employee={employee} index={index}>
                    <Dropdown.Item
                      as={Link}
                      to={`/dashboard/employees/${employee.id}`}
                      className="d-flex align-items-center gap-2"
                    >
                      <BiEdit size={20} /> <span>Edit</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleDelete(employee.id)}
                      className="d-flex align-items-center gap-2"
                    >
                      <AiOutlineDelete size={20} /> <span>Delete</span>
                    </Dropdown.Item>
                  </TRowEmployee>
                </tr>
              ))}
        </tbody>
      </Table>
    </>
  );
}
