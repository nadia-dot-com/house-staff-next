import { createSlice } from "@reduxjs/toolkit";

interface UserUiState {
  isLoginOpen: boolean;
}

const initialState: UserUiState = {
  isLoginOpen: false,
};

export const userUiSlice = createSlice({
  name: "userUi",
  initialState,
  reducers: {
    toggleUserUi: (state: UserUiState) => {
      state.isLoginOpen = !state.isLoginOpen;
    },
  },
});

export const { toggleUserUi } = userUiSlice.actions;
