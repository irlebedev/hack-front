import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";

export interface PlanState {
  dateStart: null | number;
  dateEnd: null | number;
  supervizor: null | { id: number; name: string };
  data: any;
}

const initialState: PlanState = {
  dateStart: null,
  dateEnd: null,
  supervizor: null,
  data: null,
};

export const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setDateStart: ({ dateStart }, { payload }) => {
      dateStart = payload;
    },
    setDateEnd: ({ dateEnd }, { payload }) => {
      dateEnd = payload;
    },
    setData: ({ data }, { payload }) => {
      data = payload;
    },
  },
});

export const getData = (state: RootState) => state.plan.data;

export const { setDateStart, setDateEnd, setData } = planSlice.actions;

export const { reducer: planReducer } = planSlice;
