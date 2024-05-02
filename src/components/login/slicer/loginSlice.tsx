"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface GeneralState {
  securityCode: string;
  enteredEmail: boolean;
}

const initialState: GeneralState = {
  securityCode: "000000",
  enteredEmail: false,
};

export const loginSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleNavbar: (state, action) => {
      state.securityCode = action.payload;
    },
    isEnteredEmail: (state, action) => {
      state.enteredEmail = action.payload;
    },
  },
});

export const { toggleNavbar, isEnteredEmail } = loginSlice.actions;

export default loginSlice.reducer;
