import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  selectPosition: localStorage.getItem("selectPosition")
    ? JSON.parse(localStorage.getItem("selectPosition"))
    : null,
};
export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addSelectPosition(state, action) {
      localStorage.setItem("selectPosition", JSON.stringify(action.payload));
      state.selectPosition = action.payload;
    },
  },
  extraReducers: {},
});

export const { addSelectPosition } = customerSlice.actions;

export const selectPosition = (state) => state.customer.selectPosition;

export default customerSlice.reducer;
