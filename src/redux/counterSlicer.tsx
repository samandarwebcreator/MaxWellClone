import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  [product: string]: {
    quantity: number;
    price: number;
    total: number;
  };
}

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
    increment: (
      state,
      action: PayloadAction<{ productId: string; price: number }>
    ) => {
      const { productId, price } = action.payload;
      if (!state[productId]) {
        state[productId] = {
          quantity: 1,
          price: price,
          total: price,
        };
      } else {
        state[productId].quantity++;
        state[productId].total =
          state[productId].quantity * state[productId].price;
      }
      saveState(state);
    },
    decrement: (
      state,
      action: PayloadAction<{ productId: string; price: number }>
    ) => {
      const { productId, price } = action.payload;
      if (state[productId] && state[productId].quantity > 0) {
        state[productId].quantity--;
        state[productId].total = state[productId].quantity * price;
        if (state[productId].quantity === 0) {
          delete state[productId];
        }
        saveState(state);
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
