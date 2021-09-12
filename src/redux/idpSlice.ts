import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { ICard, createMockCards } from './../api';

export interface AuthState {
  activeCard: ICard[];
  completedСards: ICard[];
}

const initialState: AuthState = {
  activeCard: [] as ICard[],
  completedСards: [] as ICard[]
};

export const idpSlice = createSlice({
  name: "idp",
  initialState,
  reducers: {
    getData: (state) => {
      state.activeCard = createMockCards(1);
      state.completedСards = createMockCards(6, true);
    },
    deleteActiveCard: (state) => {
      state.activeCard = [];
    },
  },
});

export const activeCard = (state: RootState) => state.idp.activeCard;

export const completedСards = (state: RootState) => state.idp.completedСards;

export const { getData, deleteActiveCard } = idpSlice.actions;

export const { reducer: idpReducer } = idpSlice;
