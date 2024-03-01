import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  user: {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    password: string;
  } | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state: any, action: PayloadAction<AuthState>) => {
      state.isLoggedIn = true;
      state.user = { firstName: action.payload.user?.firstName };
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
