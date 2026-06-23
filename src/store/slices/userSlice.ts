import { UserData } from "@/types/userTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  user: UserData | null;
};

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state: UserState, action: PayloadAction<UserData | null>) {
      state.user = action.payload;
    },

    logout(state: UserState) {
      state.user = null;
    },
  },
});

export const {setUser, logout} = userSlice.actions; 