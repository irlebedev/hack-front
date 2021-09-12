import { createMockEmployees } from "./../api/mockData/mockEmployees";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { IEmployees } from "../api";

export interface IBasicInfo {
  id: string;
  fullname: string;
}

export interface AdminState {
  employeesList: IEmployees[];
  idp: {};
}

const initialState: AdminState = {
  employeesList: [] as IEmployees[],
  idp: {},
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    getEmployees: (state) => {
      state.employeesList = createMockEmployees(5);
    },
    approveIDP: (state) => {
      state.idp = {};
    },
    cancelIDP: (state) => {
      state.idp = {};
    },
  },
});

export const getIsEmployeesList = ({ admin: { employeesList } }: any) =>
  employeesList;

export const { getEmployees, approveIDP, cancelIDP } = adminSlice.actions;

export const { reducer: adminReducer } = adminSlice;
