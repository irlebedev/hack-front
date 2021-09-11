import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { idpReducer } from "./idpSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    idp: idpReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
