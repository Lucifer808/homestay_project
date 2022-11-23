import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customerApi from "../api/customerApi";
const initialState = {
  selectPosition: localStorage.getItem("selectPosition")
    ? JSON.parse(localStorage.getItem("selectPosition"))
    : null,
};

export const customerSearch = createAsyncThunk(
  "customers/search",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const respone = await customerApi.customerSearch(params);
      return fulfillWithValue(respone.data);
    } catch (error) {
      return rejectWithValue(error.respone.data);
    }
  }
);
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
