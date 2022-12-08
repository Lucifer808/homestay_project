import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import userApi from "../api/userApi";
const initialState = {
  bedTypeList: [],
  bedConfigurations: [],
  bedDetailConfiguarations: { firstRoom: [], seccondRoom: [] },
  userTypeOfAccommodations: [],
  userAllAccommodation: [],
  userAllTypeRoom: [],
  typeRoom: {},
  serviceList: [],
  userData: {},
  success: false,
  isLoading: false,
  isAutheticated: false,
  errorMessage: {},
  myOrders: [],
  myAccommodationsOrers: [],
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

export const createRegistraionLocation = createAsyncThunk(
  "user/create_registration_location",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.createRegistrationLocation(params);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createRegistraionDesc = createAsyncThunk(
  "user/create_registration_desc",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.createRegistrationDesc(params);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createRegistraionServices = createAsyncThunk(
  "user/create_registration_services",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.createRegistrationServices(params);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createRegistraionPriceSetup = createAsyncThunk(
  "user/create_registration_price_setup",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.createRegistrationPriceSetup(params);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createRegistraionImages = createAsyncThunk(
  "user/create_registration_images",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.createRegistrationImages(params);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createRegistraionFile = createAsyncThunk(
  "user/create_registration_file",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.createRegistrationFile(params);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userGetAllService = createAsyncThunk(
  "user/all_service",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.allServices();
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userGetAllAccommodation = createAsyncThunk(
  "user/all_accommodation",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.getAllAccommodation();
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userCreateRoomInfo = createAsyncThunk(
  "user/create_room_info",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.createRoomInfo(params);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userGetAllTypeRoom = createAsyncThunk(
  "user/all_type_room",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.getAllTypeRoom(params);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userGetTypeRoomById = createAsyncThunk(
  "user/type_room_by_id",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.getTypeRoomById(params);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userGetAllOrder = createAsyncThunk(
  "user/all_order",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.getAllOrderById();
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userGetAllAccommodationOrder = createAsyncThunk(
  "user/all_accomodation_order",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.getAllOrderAccommodationsById(params);
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
    createReset: (state) => {
      return {
        ...state,
        success: false,
      };
    },
    addBedConfig(state, action) {
      const itemIndex = state.bedConfigurations.findIndex(
        (item) => item.optionId === action.payload.optionId
      );
      if (itemIndex >= 0) {
        state.bedConfigurations[itemIndex].nameOfBed = action.payload.nameOfBed;
      } else {
        const tempBedConfig = {
          ...action.payload,
          nameOfBed: action.payload.nameOfBed,
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
    addDetailBedConfig(state, action) {
      const itemIndex = state.bedDetailConfiguarations.firstRoom.findIndex(
        (item) => item.optionId === action.payload.optionId
      );
      if (itemIndex >= 0) {
        state.bedDetailConfiguarations.firstRoom[itemIndex].ro_tb =
          action.payload.ro_tb;
        state.bedDetailConfiguarations.firstRoom[itemIndex].nameOfBed =
          action.payload.nameOfBed;
      } else {
        const tempBedConfig = {
          ...action.payload,
          ro_tb: action.payload.ro_tb,
        };
        state.bedDetailConfiguarations.firstRoom.push(tempBedConfig);
      }
    },
    changeNoOfDetailBedConfig(state, action) {
      const itemIndex = state.bedDetailConfiguarations.firstRoom.findIndex(
        (item) => item.optionId === action.payload.optionId
      );
      if (itemIndex >= 0) {
        state.bedDetailConfiguarations.firstRoom[itemIndex].noOfBed =
          action.payload.noOfBed;
      }
    },
    removeFromDetailBedConfig(state, action) {
      state.bedDetailConfiguarations.firstRoom.map((item) => {
        if (item.optionId === action.payload) {
          const newbedDetailConfiguarations =
            state.bedDetailConfiguarations.firstRoom.filter(
              (item) => item.optionId !== action.payload
            );
          state.bedDetailConfiguarations.firstRoom =
            newbedDetailConfiguarations;
        }
        return state;
      });
    },
    addDetailBedConfigSeccond(state, action) {
      const itemIndex = state.bedDetailConfiguarations.seccondRoom.findIndex(
        (item) => item.optionId === action.payload.optionId
      );
      if (itemIndex >= 0) {
        state.bedDetailConfiguarations.seccondRoom[itemIndex].ro_tb =
          action.payload.ro_tb;
        state.bedDetailConfiguarations.seccondRoom[itemIndex].nameOfBed =
          action.payload.nameOfBed;
      } else {
        const tempBedConfig = {
          ...action.payload,
          ro_tb: action.payload.ro_tb,
        };
        state.bedDetailConfiguarations.seccondRoom.push(tempBedConfig);
      }
    },
    changeNoOfDetailBedConfigSeccond(state, action) {
      const itemIndex = state.bedDetailConfiguarations.seccondRoom.findIndex(
        (item) => item.optionId === action.payload.optionId
      );
      if (itemIndex >= 0) {
        state.bedDetailConfiguarations.seccondRoom[itemIndex].noOfBed =
          action.payload.noOfBed;
      }
    },
    removeFromDetailBedConfigSeccond(state, action) {
      state.bedDetailConfiguarations.seccondRoom.map((item) => {
        if (item.optionId === action.payload) {
          const newbedDetailConfiguarations =
            state.bedDetailConfiguarations.seccondRoom.filter(
              (item) => item.optionId !== action.payload
            );
          state.bedDetailConfiguarations.seccondRoom =
            newbedDetailConfiguarations;
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
    [createRegistraionLocation.pending]: (state) => {
      state.isLoading = true;
    },
    [createRegistraionLocation.fulfilled]: (state) => {
      state.isLoading = false;
      state.success = true;
      state.errorMessage = {};
    },
    [createRegistraionLocation.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    [createRegistraionDesc.pending]: (state) => {
      state.isLoading = true;
    },
    [createRegistraionDesc.fulfilled]: (state) => {
      state.isLoading = false;
      state.success = true;
      state.errorMessage = {};
    },
    [createRegistraionDesc.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    [createRegistraionServices.pending]: (state) => {
      state.isLoading = true;
    },
    [createRegistraionServices.fulfilled]: (state) => {
      state.isLoading = false;
      state.success = true;
      state.errorMessage = {};
    },
    [createRegistraionServices.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    [createRegistraionPriceSetup.pending]: (state) => {
      state.isLoading = true;
    },
    [createRegistraionPriceSetup.fulfilled]: (state) => {
      state.isLoading = false;
      state.success = true;
      state.errorMessage = {};
    },
    [createRegistraionPriceSetup.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    [createRegistraionImages.pending]: (state) => {
      state.isLoading = true;
    },
    [createRegistraionImages.fulfilled]: (state) => {
      state.isLoading = false;
      state.success = true;
      state.errorMessage = {};
    },
    [createRegistraionImages.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    [createRegistraionFile.pending]: (state) => {
      state.isLoading = true;
    },
    [createRegistraionFile.fulfilled]: (state) => {
      state.isLoading = false;
      state.success = true;
      state.errorMessage = {};
    },
    [createRegistraionFile.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    [userGetAllService.pending]: (state) => {
      state.isLoading = true;
    },
    [userGetAllService.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.serviceList = action.payload;
      state.errorMessage = {};
    },
    [userGetAllService.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action.payload;
    },
    [userGetAllAccommodation.pending]: (state) => {
      state.isLoading = true;
    },
    [userGetAllAccommodation.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userAllAccommodation = action.payload;
      state.errorMessage = {};
    },
    [userGetAllAccommodation.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action.payload;
    },
    [userGetAllTypeRoom.pending]: (state) => {
      state.isLoading = true;
    },
    [userGetAllTypeRoom.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userAllTypeRoom = action.payload;
      state.errorMessage = {};
    },
    [userGetAllTypeRoom.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action.payload;
    },
    [userGetTypeRoomById.pending]: (state) => {
      state.isLoading = true;
    },
    [userGetTypeRoomById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.typeRoom = action.payload;
      state.success = true;
      state.errorMessage = {};
    },
    [userGetTypeRoomById.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action.payload;
    },
    [userCreateRoomInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [userCreateRoomInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.errorMessage = {};
      toast.success("Thêm phòng mới thành công !");
    },
    [userCreateRoomInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action.payload;
    },
    [userGetAllOrder.pending]: (state) => {
      state.isLoading = true;
    },
    [userGetAllOrder.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.myOrders = action.payload;
      state.success = true;
      state.errorMessage = {};
    },
    [userGetAllOrder.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action.payload;
    },
    [userGetAllAccommodationOrder.pending]: (state) => {
      state.isLoading = true;
    },
    [userGetAllAccommodationOrder.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.myAccommodationsOrers = action.payload;
      state.success = true;
      state.errorMessage = {};
    },
    [userGetAllAccommodationOrder.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  addBedConfig,
  increaseBedConfig,
  decreaseBedConfig,
  removeFromBedConfig,
  addDetailBedConfig,
  changeNoOfDetailBedConfig,
  removeFromDetailBedConfig,
  addDetailBedConfigSeccond,
  changeNoOfDetailBedConfigSeccond,
  removeFromDetailBedConfigSeccond,
  createReset,
} = userSlice.actions;

export const selectUser = (state) => state.user.userData;
export const selectLoading = (state) => state.user.isLoading;
export const selectSuccess = (state) => state.user.success;
export const selectBedTypeList = (state) => state.user.bedTypeList;
export const selectServiceList = (state) => state.user.serviceList;
export const selectedAllTypeRoom = (state) => state.user.userAllTypeRoom;
export const selectedAllMyOrders = (state) => state.user.myOrders;
export const selectedTypeRoom = (state) => state.user.typeRoom;
export const selectedMyAccommodationsOrers = (state) =>
  state.user.myAccommodationsOrers;
export const selectedBedConfigurations = (state) =>
  state.user.bedConfigurations;
export const selectedBedDetailConfigurations = (state) =>
  state.user.bedDetailConfiguarations;
export const selectUserTypeOfAccommodations = (state) =>
  state.user.userTypeOfAccommodations;
export const selectIsAutheticated = (state) => state.user.isAutheticated;
export const selectUserAllAccommodation = (state) =>
  state.user.userAllAccommodation;
export default userSlice.reducer;
