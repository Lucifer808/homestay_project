import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customerApi from "../api/customerApi";
const initialState = {
  citiSearch: [],
  selectPosition: localStorage.getItem("selectPosition")
    ? JSON.parse(localStorage.getItem("selectPosition"))
    : null,
  isLoading: false,
  success: false,
  roomDetail: null,
};

export const customerSearch = createAsyncThunk(
  "customers/search",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await customerApi.customerSearch(params);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const customerRoomDetail = createAsyncThunk(
  "customers/room_detail",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await customerApi.customerRoomDetail(params);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
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
  extraReducers: {
    [customerSearch.pending]: (state) => {
      state.isLoading = true;
    },
    [customerSearch.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.citiSearch = action.payload;
    },
    [customerSearch.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action;
    },
    [customerRoomDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [customerRoomDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.roomDetail = action.payload;
      state.success = true;
    },
    [customerRoomDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action;
    },
  },
});

export const { addSelectPosition } = customerSlice.actions;

export const selectPosition = (state) => state.customer.selectPosition;
export const selectCitiSearch = (state) => state.customer.citiSearch;
export const selectRoomDetail = (state) => state.customer.roomDetail;
export const selectIsLoading = (state) => state.customer.isLoading;
export const selectIsSuccess = (state) => state.customer.success;

export default customerSlice.reducer;
