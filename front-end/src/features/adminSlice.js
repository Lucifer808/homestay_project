import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  activeMenu: true,
  isLoading: false,
  isAutheticated: false,
  errorMessage: {},
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    activeMenu: (state) => {
      state.activeMenu = !state.activeMenu;
    },
  },
});

export const { activeMenu } = adminSlice.actions;

export const selectActiveMenu = (state) => state.admin.activeMenu;

export default adminSlice.reducer;
