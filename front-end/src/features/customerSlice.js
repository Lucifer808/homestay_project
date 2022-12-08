import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customerApi from "../api/customerApi";
const initialState = {
  citiSearch: [],
  selectPosition: localStorage.getItem("selectPosition")
    ? JSON.parse(localStorage.getItem("selectPosition"))
    : null,
  isLoading: false,
  success: false,
  roomDetail: null,
  bookingInfo: {},
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

export const addItemToCart = createAsyncThunk(
  "customers/add_item_to_cart",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const {
        propertyRegistrationId,
        roomTypeId,
        checkIn,
        checkOut,
        numOfDays,
        numOfRoom,
        numOfAudlts,
        numOfChildrens,
      } = params;
      const response = await customerApi.customerAccommodationAndRoomDetail({
        propertyRegistrationId: propertyRegistrationId,
        roomTypeId: roomTypeId,
      });
      const roomDetail = await customerApi.customerRoomDetailById({
        roomTypeId: roomTypeId,
      });
      const result = {
        data: response.data,
        priceBase:
          roomDetail.data[0].trrp_id[0].maxPrice *
          (numOfDays > 1 ? numOfDays - 1 : 1) *
          numOfRoom,
        priceExactly:
          roomDetail.data[0].trrp_id[0].price *
          (numOfDays > 1 ? numOfDays - 1 : 1) *
          numOfRoom,
        priceTotal:
          roomDetail.data[0].trrp_id[0].price *
            (numOfDays > 1 ? numOfDays - 1 : 1) *
            numOfRoom +
          roomDetail.data[0].trrp_id[0].price *
            (numOfDays > 1 ? numOfDays - 1 : 1) *
            numOfRoom *
            0.18,
        checkIn,
        checkOut,
        numOfDays: numOfDays > 1 ? numOfDays - 1 : 1,
        numOfRoom,
        numOfAudlts,
        numOfChildrens,
        propertyRegistrationId,
        roomTypeId,
      };
      return fulfillWithValue(result);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const customerConfirmOrder = createAsyncThunk(
  "customers/confirm_order",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      localStorage.setItem("orderTemp", JSON.stringify(params));
      const response = await customerApi.customerComfirmOrder();
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const customerCreateNewOrder = createAsyncThunk(
  "customers/new_order",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const orderData = JSON.parse(localStorage.getItem("orderTemp"));
      const response = await customerApi.customerNewOrder(orderData);
      // localStorage.removeItem("orderTemp");
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
    [addItemToCart.pending]: (state) => {
      state.isLoading = true;
    },
    [addItemToCart.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.bookingInfo = action.payload;
      state.success = true;
    },
    [addItemToCart.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action;
    },
    [customerCreateNewOrder.pending]: (state) => {
      state.isLoading = true;
    },
    [customerCreateNewOrder.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = true;
      toast.success("Đặt phòng thành công !");
    },
    [customerCreateNewOrder.rejected]: (state, action) => {
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
export const selectBookingInfo = (state) => state.customer.bookingInfo;

export default customerSlice.reducer;
