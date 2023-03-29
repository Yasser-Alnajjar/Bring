import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";
import { header, URL_API } from "../../utils";

// * Login
export const login = createAsyncThunk(
  "user-slice/login",
  async (payload, thunnkAPI) => {
    const res = await axios.post(`${URL_API}/login`, payload);
    const data = await res.data;
    localStorage.setItem("user", JSON.stringify(data));
    if (res.status === 200) {
      thunnkAPI.dispatch(toast.success("Log-in Successfully"));
    }
    return data;
  }
);
// * Logout
export const logout = createAsyncThunk("user-slice/logout", async (payload) => {
  const res = await axios.post(`${URL_API}/logout`, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: header,
    },
  });
  const data = await res.data;
  localStorage.removeItem("user");
  return data;
});
const userSlice = createSlice({
  name: "user-slice",
  initialState: {
    loading: false,
    logedin: false,
    user: {},
  },
  extraReducers: (builder) => {
    // * Login
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.logedin = true;
      state.loading = false;
    });
    builder.addCase(login.pending, (state, action) => {
      state.user = action.payload;
      state.logedin = false;
      state.loading = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.user = action.payload;
      state.logedin = false;
      state.loading = true;
    });
    // * Logout
    builder.addCase(logout.fulfilled, (state, action) => {
      state.user = action.payload;
      state.logedin = true;
      state.loading = false;
    });
    builder.addCase(logout.pending, (state, action) => {
      state.user = action.payload;
      state.logedin = false;
      state.loading = true;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.user = action.payload;
      state.logedin = false;
      state.loading = true;
    });
  },
});

export default userSlice.reducer;
