import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  isLoggedIn: boolean;
  user: {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    password: string;
    id: string;
  };
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: {
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    password: "",
    id: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN: (state: any, action: PayloadAction<AuthState>) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    LOGOUT: (state) => {
      state.isLoggedIn = false;
      state.user = initialState.user;
    },
  },
});

export const { LOGIN, LOGOUT } = authSlice.actions;
export default authSlice.reducer;
