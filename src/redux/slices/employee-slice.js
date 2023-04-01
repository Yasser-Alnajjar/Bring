import axios from "axios";
import { URL_API, header } from "../../utils";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const addEmployee = createAsyncThunk(
  "employeeSlice/addEmployee",
  async (payload) => {
    const res = await axios.post(`${URL_API}/employees`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: header,
      },
    });
    const data = await res.data;
    return data;
  }
);

export const filterByEmail = createAsyncThunk(
  "employeeSlice/filterByEmail",
  async (payload) => {
    const res = await axios.post(`${URL_API}/employees`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: header,
      },
    });
    const data = await res.data;
    return data;
  }
);
export const filterByCode = createAsyncThunk(
  "employeeSlice/filterByCode",
  async (payload) => {
    const res = await axios.post(`${URL_API}/employees`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: header,
      },
    });
    const data = await res.data;
    return data;
  }
);
export const filterByName = createAsyncThunk(
  "employeeSlice/filterByName",
  async (payload) => {
    const res = await axios.post(`${URL_API}/employees`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: header,
      },
    });
    const data = await res.data;
    return data;
  }
);

// export const fetchEmployees = createAsyncThunk(
//   "employeeSlice/fetchEmployees",
//   async () => {
//     const res = await axios.get(`${URL_API}/employees`, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: header,
//       },
//     });
//     const data = await res.data;
//     console.log(data);
//     return data;
//   }
// );
export const fetchEmployees = createAsyncThunk(
  "employeeSlice/fetchEmployees",
  async () => {
    const res = await axios.get(`${URL_API}/employees`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: header,
      },
    });
    const data = await res.data;
    return data;
  }
);
export const deleteEmployee = createAsyncThunk(
  "employeeSlice/deleteEmployee",
  async (id) => {
    const res = await axios.post(`${URL_API}/employees/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: header,
      },
    });
    const data = await res.data;
    return data;
  }
);
export const updateProfile = createAsyncThunk(
  "employeeSlice/updateProfile",
  async (id) => {
    const res = await axios.patch(`${URL_API}/employees/${id}`);
    const data = await res.data;
    return data;
  }
);

const initialState = {
  loading: false,
  employees: [],
  filterByEmail: [],
  filterByCode: [],
  filterByName: [],
};
const employeeSlice = createSlice({
  name: "employeeSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // * Add Employee
    builder.addCase(addEmployee.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addEmployee.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(addEmployee.rejected, (state, action) => {
      state.loading = true;
    });
    // * Fetch Employee
    builder.addCase(fetchEmployees.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.loading = false;
      state.employees = action.payload;
    });
    builder.addCase(fetchEmployees.rejected, (state, action) => {
      state.loading = true;
    });
    // * delete Employee
    builder.addCase(deleteEmployee.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteEmployee.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(deleteEmployee.rejected, (state, action) => {
      state.loading = true;
    });
    // ? update profile
    builder.addCase(updateProfile.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.loading = true;
    });
  },
});

export default employeeSlice.reducer;
