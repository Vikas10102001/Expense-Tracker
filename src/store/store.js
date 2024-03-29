import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth";
import alertSlice from "./slice/alert";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
