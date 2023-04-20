import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    isOpen: false,
    message: null,
  },
  reducers: {
    alertInfo(state, action) {
      return {
        ...state,
        isOpen: action.payload.isOpen,
        message: action.payload.message,
      };
    },
  },
});

export default alertSlice;
