"use client";

import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "@/redux/generalSlice";
import counterSlicer from "@/redux/counterSlicer";

export const store = configureStore({
  reducer: {
    general: generalSlice,
    counter: counterSlicer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
