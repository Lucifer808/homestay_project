import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import axiosClient from "./api/axiosClient";
import adminSlice from "./features/adminSlice";
import customerSlice from "./features/customerSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    admin: adminSlice,
    customer: customerSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axiosClient,
      },
      serializableCheck: false,
    }),
});
