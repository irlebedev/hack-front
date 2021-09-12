import { createMockEmployees } from './../api/mockData/mockEmployees';
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { IEmployees } from "../api";

export interface IBasicInfo {
  id: string,
  fullname: string,
}

export interface AdminState {
  employeesList: IEmployees[],
  idp: {},
  basicInfo: IBasicInfo,
}

const initialState: AdminState = {
  employeesList: [] as IEmployees[],
  idp: {},
  basicInfo: {} as IBasicInfo,
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
    getClientInfo: (state) => {
      state.basicInfo
    },
    setClientInfo: (state, {payload}) => {
      state.basicInfo = payload
    }
  },
});

export const getIsEmployeesList = (
  {admin : {employeesList}}: RootState
) => employeesList;

export const getClientInfoData = (
  {admin : {basicInfo}}: RootState
) => basicInfo;

export const { getEmployees, approveIDP, cancelIDP, getClientInfo, setClientInfo } = adminSlice.actions;

export const { reducer: adminReducer } = adminSlice;
