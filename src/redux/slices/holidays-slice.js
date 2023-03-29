import axios from "axios";
import { toast } from "react-hot-toast";
import { header, URL_API } from "../../utils";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const addHolidy = createAsyncThunk(
  "holidaysSlice/addHolidy",
  async (payload, thunkAPI) => {
    const res = await axios.post(`${URL_API}/holidays`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: header,
      },
    });
    const data = await res.data;
    if (res.status === 200) {
      thunkAPI.dispatch(toast.success("Add Holidy Successfully"));
    }
    return data;
  }
);
export const fetchHolidays = createAsyncThunk(
  "holidaysSlice/fetchHolidays",
  async () => {
    const res = await axios.get(`${URL_API}/holidays`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: header,
      },
    });
    const data = await res.data;
    return data;
  }
);
export const singleHoliday = createAsyncThunk(
  "holidaysSlice/singleHoliday",
  async (id) => {
    const res = await axios.get(`${URL_API}/holidays/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: header,
      },
    });
    const data = await res.data;
    return data;
  }
);
export const deleteholidays = createAsyncThunk(
  "holidaysSlice/deleteholidays",
  async (id, thunkAPI) => {
    const res = await axios.delete(`${URL_API}/holidays/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: header,
      },
    });
    if (res.status === 200) {
      thunkAPI.dispatch(toast.success("Holidy is Deleted"));
    }
    const data = await res.data;
    return data;
  }
);
export const updateHoliday = createAsyncThunk(
  "employeeSlice/updateHoliday",
  async (payload, thunkAPI) => {
    const res = await axios.put(
      `${URL_API}/holidays/${payload[0]}`,
      payload[1]
    );
    const data = await res.data;
    if (res.status === 200) {
      thunkAPI.dispatch(toast.success("Changes is Saved"));
    }
    return data;
  }
);
const holidaysSlice = createSlice({
  name: "holidaysSlice",
  initialState: {
    loading: false,
    holidays: [],
    singleHoliday: {},
  },
  extraReducers: (builder) => {
    // * Add holidays
    builder.addCase(addHolidy.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addHolidy.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(addHolidy.rejected, (state, action) => {
      state.loading = true;
    });
    // * Delete holidays
    builder.addCase(deleteholidays.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteholidays.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(deleteholidays.rejected, (state, action) => {
      state.loading = true;
    });
    // * Fetch holidays
    builder.addCase(fetchHolidays.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchHolidays.fulfilled, (state, action) => {
      state.loading = false;
      state.holidays = action.payload;
    });
    builder.addCase(fetchHolidays.rejected, (state, action) => {
      state.loading = true;
    });
    // * Single Holiday
    builder.addCase(singleHoliday.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(singleHoliday.fulfilled, (state, action) => {
      state.loading = false;
      state.singleHoliday = action.payload;
    });
    builder.addCase(singleHoliday.rejected, (state, action) => {
      state.loading = true;
    });
    // * Update Holiday
    builder.addCase(updateHoliday.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateHoliday.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(updateHoliday.rejected, (state, action) => {
      state.loading = true;
    });
  },
});

export default holidaysSlice.reducer;
