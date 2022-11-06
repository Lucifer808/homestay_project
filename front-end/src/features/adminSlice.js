import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminApi from "../api/adminApi";
import { toast } from "react-toastify";
const initialState = {
  rental: [],
  services: [],
  service: {},
  typeOfServices: [],
  typeOfAccommodations: [],
  typeOfAccommodationsHeader: [],
  typeOfService: {},
  typeOfAccommodation: {},
  activeMenu: true,
  isLoading: false,
  success: false,
  errorMessage: {},
};

export const getAllRetalRegistration = createAsyncThunk(
  "admin/rental",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const respone = await adminApi.allRentalRegistration();
      return fulfillWithValue(respone.data);
    } catch (error) {
      return rejectWithValue(error.respone.data);
    }
  }
);

export const getAllService = createAsyncThunk(
  "admin/services",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const respone = await adminApi.allService();
      return fulfillWithValue(respone.data);
    } catch (error) {
      return rejectWithValue(error.respone.data);
    }
  }
);

export const createService = createAsyncThunk(
  "admin/create_service",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const respone = await adminApi.createService(params);
      return fulfillWithValue(respone.data);
    } catch (error) {
      return rejectWithValue(error.respone.data);
    }
  }
);

export const updateService = createAsyncThunk(
  "admin/update_service",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const respone = await adminApi.updateService(params);
      return fulfillWithValue(respone.data);
    } catch (error) {
      return rejectWithValue(error.respone.data);
    }
  }
);

export const getAllTypeOfService = createAsyncThunk(
  "admin/type_services",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const respone = await adminApi.allTypeOfService();
      return fulfillWithValue(respone.data);
    } catch (error) {
      return rejectWithValue(error.respone.data);
    }
  }
);

export const createTypeOfService = createAsyncThunk(
  "admin/create_type_service",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const respone = await adminApi.createTypeOfService(params);
      return fulfillWithValue(respone.data);
    } catch (error) {
      return rejectWithValue(error.respone.data);
    }
  }
);

export const updateTypeOfService = createAsyncThunk(
  "admin/update_type_service",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const respone = await adminApi.updateTypeOfService(params);
      return fulfillWithValue(respone.data);
    } catch (error) {
      return rejectWithValue(error.respone.data);
    }
  }
);

export const deleteTypeOfService = createAsyncThunk(
  "admin/delete_type_service",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const respone = await adminApi.deleteTypeOfService(params);
      return fulfillWithValue(respone.data);
    } catch (error) {
      return rejectWithValue(error.respone.data);
    }
  }
);

export const getAllTypeOfAccommodation = createAsyncThunk(
  "admin/all-type-of-accommodation",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const respone = await adminApi.allTypeOfAccommodation();
      return fulfillWithValue(respone.data);
    } catch (error) {
      return rejectWithValue(error.respone.data);
    }
  }
);

export const createTypeOfAccommodation = createAsyncThunk(
  "admin/create_type_accommodation",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const respone = await adminApi.createTypeOfAccommodation(params);
      return fulfillWithValue(respone.data);
    } catch (error) {
      return rejectWithValue(error.respone.data);
    }
  }
);

export const updateTypeOfAccommodation = createAsyncThunk(
  "admin/update_type_accommodation",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const respone = await adminApi.updateTypeOfAccommodation(params);
      return fulfillWithValue(respone.data);
    } catch (error) {
      return rejectWithValue(error.respone.data);
    }
  }
);

export const getAllTypeOfAccommodationHeader = createAsyncThunk(
  "admin/all-type-of-accommodation-header",
  async (params, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const respone = await adminApi.allTypeOfAccommodationHeader();
      return fulfillWithValue(respone.data);
    } catch (error) {
      return rejectWithValue(error.respone.data);
    }
  }
);

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    activeMenu: (state) => {
      state.activeMenu = !state.activeMenu;
    },
    createTypeOfServicesReset: (state) => {
      return {
        ...state,
        success: false,
      };
    },
    createServiceReset: (state) => {
      return {
        ...state,
        success: false,
      };
    },
  },
  extraReducers: {
    [getAllRetalRegistration.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllRetalRegistration.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.rental = action.payload;
    },
    [getAllRetalRegistration.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action.payload;
    },
    [getAllService.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllService.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.services = action.payload;
    },
    [getAllService.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action.payload;
    },
    [getAllTypeOfService.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllTypeOfService.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.typeOfServices = action.payload;
    },
    [getAllTypeOfService.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action.payload;
    },
    [createTypeOfService.pending]: (state) => {
      state.isLoading = true;
    },
    [createTypeOfService.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.typeOfService = action.payload;
      toast.success("Thêm loại dịch vụ thành công!");
    },
    [createTypeOfService.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action.payload;
    },
    [updateTypeOfService.pending]: (state) => {
      state.isLoading = true;
    },
    [updateTypeOfService.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = true;
      toast.success("Thay đổi thành công!");
    },
    [updateTypeOfService.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action.payload;
    },
    [deleteTypeOfService.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteTypeOfService.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = true;
      toast.error("Xóa loại dịch vụ thành công!");
    },
    [deleteTypeOfService.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action.payload;
    },
    [createService.pending]: (state) => {
      state.isLoading = true;
    },
    [createService.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.service = action.payload;
      toast.success("Thêm dịch vụ thành công!");
    },
    [createService.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action.payload;
    },
    [updateService.pending]: (state) => {
      state.isLoading = true;
    },
    [updateService.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.service = action.payload;
      toast.success("Thay đổi dịch vụ thành công!");
    },
    [updateService.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action.payload;
    },
    [getAllTypeOfAccommodation.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllTypeOfAccommodation.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.typeOfAccommodations = action.payload;
    },
    [getAllTypeOfAccommodation.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action.payload;
    },
    [createTypeOfAccommodation.pending]: (state) => {
      state.isLoading = true;
    },
    [createTypeOfAccommodation.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.typeOfAccommodation = action.payload;
      toast.success("Thêm loại dịch vụ thành công!");
    },
    [createTypeOfAccommodation.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action.payload;
    },

    [updateTypeOfAccommodation.pending]: (state) => {
      state.isLoading = true;
    },
    [updateTypeOfAccommodation.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = true;
      toast.success("Thay đổi thành công!");
    },
    [updateTypeOfAccommodation.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action.payload;
    },
    [getAllTypeOfAccommodationHeader.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllTypeOfAccommodationHeader.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.typeOfAccommodationsHeader = action.payload;
    },
    [getAllTypeOfAccommodationHeader.rejected]: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.errorMessage = action.payload;
    },
  },
});

export const { activeMenu, createTypeOfServicesReset, createServiceReset } =
  adminSlice.actions;

export const selectSuccess = (state) => state.admin.success;
export const selectIsLoading = (state) => state.admin.isLoading;
export const selectRetal = (state) => state.admin.rental;
export const selectServices = (state) => state.admin.services;
export const selectService = (state) => state.admin.service;
export const selectTypeOfServices = (state) => state.admin.typeOfServices;
export const selectActiveMenu = (state) => state.admin.activeMenu;
export const selectTypeOfAccommodations = (state) =>
  state.admin.typeOfAccommodations;
export const selectTypeOfAccommodationsHeader = (state) =>
  state.admin.typeOfAccommodationsHeader;
export default adminSlice.reducer;
