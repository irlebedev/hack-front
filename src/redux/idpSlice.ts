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
    getData: ({activeCard, completedСards}) => {
      activeCard = createMockCards(1);
      completedСards = createMockCards(6, true);
    },
    deleteActiveCard: ({activeCard}) => {
      activeCard = [];
    },
  },
});

export const activeCard = (
  {idp: {activeCard}}: RootState
) => activeCard;

export const completedСards = (
  {idp: {completedСards}}: RootState
) => completedСards;

export const { getData, deleteActiveCard } = idpSlice.actions;

export const { reducer: idpReducer } = idpSlice;
