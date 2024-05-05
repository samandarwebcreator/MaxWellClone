import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  [productId: string]: number;
}

const initialState: CounterState = {};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      if (state[productId] === undefined) {
        state[productId] = 1;
      } else {
        state[productId]++;
      }
    },
    decrement: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      if (state[productId] !== undefined && state[productId] > 0) {
        state[productId]--;
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
