import App from "../App";
import AdminLayout from "../components/layouts/AdminLayout";
import RootLayout from "../components/layouts/RootLayout";
import Attendance from "../pages/Admin/Attendance";
import Dashboard from "../pages/Admin/Dashboard";
import DeaprtInfo from "../pages/Admin/departmentes/DeaprtInfo";
import Departments from "../pages/Admin/departmentes/Departments";
import Employees from "../pages/Admin/Employees";
import EditEmployee from "../pages/Admin/Employees/EditEmployee";
import Holidays from "../pages/Admin/Holidays";
import Leave from "../pages/Admin/Leave";
import Login from "../pages/Login/Login";

export const routes = [
  {
    path: "/",
    element: <Login />,
  },
  // ? User Layout
  {
    path: "dashboard",
    element: <RootLayout />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "departments", element: <Departments /> },
      { path: "departments/:id", element: <DeaprtInfo /> },
      { path: "employees", element: <Employees /> },
      { path: "employees/:id", element: <EditEmployee /> },
      { path: "attendance", element: <Attendance /> },
      { path: "leave", element: <Leave /> },
      { path: "holidays", element: <Holidays /> },
    ],
  },
  // ? Admin Layout
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "departments", element: <Departments /> },
      { path: "departments/:id", element: <DeaprtInfo /> },
      { path: "employees", element: <Employees /> },
      { path: "employees/:id", element: <EditEmployee /> },
      { path: "attendance", element: <Attendance /> },
      { path: "leave", element: <Leave /> },
      { path: "holidays", element: <Holidays /> },
    ],
  },
];
