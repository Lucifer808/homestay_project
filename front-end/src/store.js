import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import axiosClient from "./api/axiosClient";
export const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axiosClient,
      },
      serializableCheck: false,
    }),
});
