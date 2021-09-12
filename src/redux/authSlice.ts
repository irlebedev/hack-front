import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";

export interface AuthState {
  isAuthorized: boolean;
}

const initialState: AuthState = {
  isAuthorized: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthorized = true;
    },
    logout: (state) => {
      state.isAuthorized = false;
    },
  },
});

export const getIsAuthorized = (
  {auth: {isAuthorized}}: RootState
) => isAuthorized;

export const { login, logout } = authSlice.actions;

export const { reducer: authReducer } = authSlice;
