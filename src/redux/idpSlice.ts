import { IEmployees } from './../api/interfaces';
import { createSlice } from "@reduxjs/toolkit";
import { createMockEmployees } from "../api/mockData/mockEmployees";
import { RootState } from "../redux/store";
import { ICard, createMockCards } from './../api';

export interface AuthState {
  clientInfo: IEmployees[],
  activeCard: ICard[];
  completedСards: ICard[];
}

const initialState: AuthState = {
  clientInfo: [] as IEmployees[],
  activeCard: [] as ICard[],
  completedСards: [] as ICard[]
};

export const idpSlice = createSlice({
  name: "idp",
  initialState,
  reducers: {
    getData: (state) => {
      state.clientInfo = createMockEmployees(1);
      state.activeCard = createMockCards(1);
      state.completedСards = createMockCards(6, true);
    },
    deleteActiveCard: (state) => {
      state.activeCard = [];
    },
  },
});


export const clientInfo = (state: RootState) => state.idp.clientInfo;
export const activeCard = (state: RootState) => state.idp.activeCard;
export const completedСards = (state: RootState) => state.idp.completedСards;

export const { getData, deleteActiveCard } = idpSlice.actions;

export const { reducer: idpReducer } = idpSlice;
