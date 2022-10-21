import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import userApi from "../api/userApi";
const initialState = {
  userData: {},
  isLoading: false,
  isAutheticated: false,
  errorMessage: "",
};

export const getUsers = createAsyncThunk(
  "users/data",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.users();
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const registerNewUser = createAsyncThunk(
  "user/register",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.register(params);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.login(params);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loadUser = createAsyncThunk(
  "user/loadUser",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.loadUser();
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.logout();
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userData = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    [registerNewUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerNewUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userData = action.payload;
    },
    [registerNewUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.isAutheticated = false;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAutheticated = true;
      state.userData = action.payload;
      toast.success("Đăng nhập thành công!");
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    [loadUser.pending]: (state) => {
      state.isLoading = true;
      state.isAutheticated = false;
    },
    [loadUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAutheticated = true;
      state.userData = action.payload;
    },
    [loadUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isAutheticated = false;
      state.errorMessage = action.payload;
    },
    [logoutUser.fulfilled]: (state) => {
      state.userData = null;
      state.isLoading = false;
      state.isAutheticated = false;
    },
    [logoutUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const selectUsers = (state) => state.user.userData;
export const selectLoading = (state) => state.user.isLoading;
export const selectIsAutheticated = (state) => state.user.isAutheticated;

export default userSlice.reducer;
