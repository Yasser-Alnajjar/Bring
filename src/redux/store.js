import { configureStore } from "@reduxjs/toolkit";
import attendanceSlice from "./slices/attendance-slice";
import employeeSlice from "./slices/employee-slice";
import holidaysSlice from "./slices/holidays-slice";
import layoutSlice from "./slices/layout-slice";
import userSlice from "./slices/user-slice";

const store = configureStore({
  reducer: {
    authUser: userSlice,
    layout: layoutSlice,
    employees: employeeSlice,
    holidays: holidaysSlice,
    attend: attendanceSlice,
  },
});
export default store;
