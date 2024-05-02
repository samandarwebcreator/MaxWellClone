"use client";

import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "@/redux/generalSlice";
import loginSlice from "@/components/login/slicer/loginSlice";

export const store = configureStore({
  reducer: {
    general: generalSlice,
    login: loginSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
