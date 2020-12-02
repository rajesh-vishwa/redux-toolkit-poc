import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AlertState = {
  type: string;
  message: string;
};

const initialState: AlertState = {
  type: "",
  message: "",
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    alertSuccess: (state, action: PayloadAction<string>) => {
      state.type = "alert-success";
      state.message = action.payload;
    },
    alertError: (state, action: PayloadAction<string>) => {
      state.type = "alert-danger";
      state.message = action.payload;
    },
    alertClear: (state, action: PayloadAction<void>) => {
      state.type = "";
      state.message = "";
    },
  },
});

export const { alertSuccess, alertError, alertClear } = alertSlice.actions;

export default alertSlice.reducer;
