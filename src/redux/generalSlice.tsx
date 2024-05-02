"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface GeneralState {
  isNavbarOpen: boolean;
  isLoginModalOpen: boolean;
}

const initialState: GeneralState = {
  isNavbarOpen: false,
  isLoginModalOpen: false,
};

export const generalSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleNavbar: (state, action) => {
      state.isNavbarOpen = action.payload;
    },
    openLoginDialog: (state, action) => {
      state.isLoginModalOpen = action.payload;
    },
  },
});

export const { toggleNavbar, openLoginDialog } = generalSlice.actions;

export default generalSlice.reducer;
