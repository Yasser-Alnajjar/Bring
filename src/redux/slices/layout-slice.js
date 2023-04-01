import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
  name: "layoutSlice",
  initialState: {
    modal: false,
  },
  reducers: {
    openModal: (state) => {
      state.modal = true;
    },
    closeModal: (state) => {
      state.modal = false;
    },
  },
});
export const { openModal, closeModal } = layoutSlice.actions;
export default layoutSlice.reducer;
