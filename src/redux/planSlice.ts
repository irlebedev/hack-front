import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";

interface Goal {
  id: number;
  name: string;
  description: string;
  priority: "Low" | "Medium" | "High" | "Super High";
  done: boolean;
}

export interface PlanState {
  startDate: null | number;
  endDate: null | number;
  data: any;
  supervizorId: null | number;
  goals: Goal[];
}

const initialState: PlanState = {
  startDate: null,
  endDate: null,
  data: null,
  supervizorId: null,
  goals: [
    { id: 0, name: "", description: "", priority: "Medium", done: false },
  ],
};

export const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setStartDate: (state, { payload }) => {
      state.startDate = payload;
    },
    setEndDate: (state, { payload }) => {
      state.endDate = payload;
    },
    setSupervizorId: (state, { payload }) => {
      state.supervizorId = payload;
    },
    setData: (state, { payload }) => {
      state.data = payload;
    },
    setGoals: (
      state,
      {
        payload: { key, id, value },
      }: PayloadAction<{
        id: number;
        key: "name" | "description" | "priority" | "done";
        value: string | boolean;
      }>
    ) => {
      state.goals = state.goals.map((goal) =>
        goal.id === id ? { ...goal, [key]: value } : goal
      );
    },
    addGoal: (state) => {
      const id = state.goals.length;
      state.goals.push({
        id,
        name: "",
        description: "",
        priority: "Medium",
        done: false,
      });
    },
  },
});

export const getStartDate = (state: RootState) => state.plan.startDate;
export const getEndDate = (state: RootState) => state.plan.endDate;
export const getData = (state: RootState) => state.plan.data;
export const getSupervizorId = (state: RootState) => state.plan.supervizorId;
export const getGoals = (state: RootState) => state.plan.goals;

export const {
  setStartDate,
  setEndDate,
  setData,
  setSupervizorId,
  setGoals,
  addGoal,
} = planSlice.actions;

export const { reducer: planReducer } = planSlice;
