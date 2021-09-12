import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { adminReducer } from "./adminSlice";
import { idpReducer } from "./idpSlice";
import { planReducer } from "./planSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    idp: idpReducer,
    plan: planReducer,
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
