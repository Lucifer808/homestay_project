import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import userApi from "../api/userApi";
const initialState = {
  bedTypeList: [],
  bedConfigurations: [],
  userTypeOfAccommodations: [],
  userData: {},
  success: false,
  isLoading: false,
  isAutheticated: false,
  errorMessage: {},
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

export const getAllBedTypeList = createAsyncThunk(
  "user/all_bed_type_list",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.allBedType();
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllUserTypeOfAccommodation = createAsyncThunk(
  "user/all-type-of-accommodation",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.allTypeOfAccommodation();
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createRegistraionInfo = createAsyncThunk(
  "user/create_registration_info",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.createRegistrationInfo(params);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addBedConfig(state, action) {
      const itemIndex = state.bedConfigurations.findIndex(
        (item) => item.optionId === action.payload.optionId
      );
      if (itemIndex >= 0) {
        state.bedConfigurations[itemIndex].ro_tb = action.payload.ro_tb;
      } else {
        const tempBedConfig = {
          ...action.payload,
          ro_tb: action.payload.ro_tb,
        };
        state.bedConfigurations.push(tempBedConfig);
      }
    },
    increaseBedConfig(state, action) {
      const itemIndex = state.bedConfigurations.findIndex(
        (item) => item.optionId === action.payload
      );
      if (itemIndex >= 0) {
        state.bedConfigurations[itemIndex].noOfBed += 1;
      }
    },
    decreaseBedConfig(state, action) {
      const itemIndex = state.bedConfigurations.findIndex(
        (item) => item.optionId === action.payload
      );

      if (state.bedConfigurations[itemIndex].noOfBed > 1) {
        state.bedConfigurations[itemIndex].noOfBed -= 1;
      } else if (state.bedConfigurations[itemIndex].noOfBed === 1) {
        state.bedConfigurations[itemIndex].noOfBed = 1;
      }
    },
    removeFromBedConfig(state, action) {
      state.bedConfigurations.map((item) => {
        if (item.optionId === action.payload) {
          const newBedConfigurations = state.bedConfigurations.filter(
            (item) => item.optionId !== action.payload
          );
          state.bedConfigurations = newBedConfigurations;
        }
        return state;
      });
    },
  },
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
      state.errorMessage = {};
      toast.success("Đăng nhập thành công!");
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
      toast.error(state.errorMessage.message);
    },
    [loadUser.pending]: (state) => {
      state.isLoading = true;
      state.isAutheticated = false;
    },
    [loadUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAutheticated = true;
      state.userData = action.payload;
      state.errorMessage = {};
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
      state.errorMessage = {};
    },
    [logoutUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    [getAllBedTypeList.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllBedTypeList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.bedTypeList = action.payload;
      state.errorMessage = {};
    },
    [getAllBedTypeList.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action.payload;
    },
    [getAllUserTypeOfAccommodation.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllUserTypeOfAccommodation.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userTypeOfAccommodations = action.payload;
      state.errorMessage = {};
    },
    [getAllUserTypeOfAccommodation.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action.payload;
    },
    [createRegistraionInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [createRegistraionInfo.fulfilled]: (state) => {
      state.isLoading = false;
      state.success = true;
      state.errorMessage = {};
    },
    [createRegistraionInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  addBedConfig,
  increaseBedConfig,
  decreaseBedConfig,
  removeFromBedConfig,
} = userSlice.actions;

export const selectUser = (state) => state.user.userData;
export const selectLoading = (state) => state.user.isLoading;
export const selectBedTypeList = (state) => state.user.bedTypeList;
export const selectedBedConfigurations = (state) =>
  state.user.bedConfigurations;
export const selectUserTypeOfAccommodations = (state) =>
  state.user.userTypeOfAccommodations;
export const selectIsAutheticated = (state) => state.user.isAutheticated;

export default userSlice.reducer;
