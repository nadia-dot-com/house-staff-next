import { createSlice } from "@reduxjs/toolkit";

interface CartUiState{
  isCartOpen: boolean;
};

const initialState: CartUiState = {
  isCartOpen: false,
};

export const cartUiSlice = createSlice({
  name: "cartUi",
  initialState,
  reducers: {
    toggleCartUi: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { toggleCartUi } = cartUiSlice.actions;
