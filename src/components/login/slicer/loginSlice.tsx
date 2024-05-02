"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface GeneralState {
  securityCode: string;
}

const initialState: GeneralState = {
  securityCode: "000000",
};

export const loginSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleNavbar: (state, action) => {
      state.securityCode = action.payload;
    },
  },
});

export const { toggleNavbar } = loginSlice.actions;

export default loginSlice.reducer;
