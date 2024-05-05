"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface GeneralState {
  isNavbarOpen: boolean;
  isLoginModalOpen: boolean;
  isCardBranchType: boolean;
}

const initialState: GeneralState = {
  isNavbarOpen: false,
  isLoginModalOpen: false,
  isCardBranchType: true,
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
    changeBranchVisual: (state, action) => {
      state.isCardBranchType = action.payload;
    },
  },
});

export const { toggleNavbar, openLoginDialog, changeBranchVisual } =
  generalSlice.actions;

export default generalSlice.reducer;
