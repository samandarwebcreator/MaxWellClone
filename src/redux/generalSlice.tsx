"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface GeneralState {
  isNavbarOpen: boolean;
}

const initialState: GeneralState = {
  isNavbarOpen: false,
};

export const generalSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleNavbar: (state, action) => {
      state.isNavbarOpen = action.payload;
    },
  },
});

export const { toggleNavbar } = generalSlice.actions;

export default generalSlice.reducer;
