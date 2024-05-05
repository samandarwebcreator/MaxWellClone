import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  [productId: string]: number;
}

const initialState: CounterState = {};

const loadState = (): CounterState => {
  try {
    const serializedState = localStorage.getItem("basket");
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return {};
  }
};

const saveState = (state: CounterState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("basket", serializedState);
  } catch (error) {}
};

const counterSlice = createSlice({
  name: "counter",
  initialState: loadState(),
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      if (state[productId] === undefined) {
        state[productId] = 1;
      } else {
        state[productId]++;
      }
      saveState(state);
    },
    decrement: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      if (state[productId] !== undefined && state[productId] > 0) {
        state[productId]--;
        if (state[productId] === 0) {
          delete state[productId];
        }
        saveState(state);
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
