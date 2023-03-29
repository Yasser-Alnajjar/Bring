import axios from "axios";
import { toast } from "react-hot-toast";
import { header, URL_API } from "../../utils";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const addAttend = createAsyncThunk(
  "attendanceSlice/addAttend",
  async (payload, thunnkAPI) => {
    const res = await axios.post(`${URL_API}/attendance`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: header,
      },
    });
    const data = await res.data;
    if (res.status === 200) {
      thunnkAPI.dispatch(toast.success("Attendance Added"));
    }
    return data;
  }
);
export const fetchAttend = createAsyncThunk(
  "attendanceSlice/fetchAttend",
  async (payload) => {
    const res = await axios.get(`${URL_API}/attendance`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: header,
      },
    });
    const data = await res.data;
    return data;
  }
);
export const deleteAttend = createAsyncThunk(
  "attendanceSlice/fetchAttend",
  async (payload, thunnkAPI) => {
    const res = await axios.delete(`${URL_API}/attendance`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: header,
      },
    });
    if (res.status === 200) {
      thunnkAPI.dispatch(toast.success("Attendance is Deleted"));
    }
    const data = await res.data;
    return data;
  }
);

const attendanceSlice = createSlice({
  name: "attendanceSlice",
  initialState: {
    loading: false,
    attend: {},
  },
  extraReducers: (builder) => {
    // * Add Attend
    builder.addCase(addAttend.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addAttend.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(addAttend.rejected, (state, action) => {
      state.loading = true;
    });
    // * Fetch Attend
    builder.addCase(fetchAttend.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAttend.fulfilled, (state, action) => {
      state.loading = false;
      state.attend = action.payload;
    });
    builder.addCase(fetchAttend.rejected, (state, action) => {
      state.loading = true;
    });
  },
});

export default attendanceSlice.reducer;
