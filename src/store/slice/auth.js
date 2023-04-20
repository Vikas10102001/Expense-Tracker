import { createSlice } from "@reduxjs/toolkit";
import { signup } from "../thunks/signup";
import { login } from "../thunks/login";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearError(state, action) {
      return { ...state, error: null };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
      return { ...state, isLoading: false, data: action.payload };
    });
    builder.addCase(signup.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signup.rejected, (state, action) => {
      return { ...state, isLoading: false, error: action.error };
    });
    builder.addCase(login.fulfilled, (state, action) => {
      return { ...state, isLoading: false, data: action.payload };
    });
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      return { ...state, isLoading: false, error: action.error };
    });
  },
});

export default authSlice;
