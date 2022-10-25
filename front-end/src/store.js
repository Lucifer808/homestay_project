import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import axiosClient from "./api/axiosClient";
import adminSlice from "./features/adminSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    admin: adminSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axiosClient,
      },
      serializableCheck: false,
    }),
});
