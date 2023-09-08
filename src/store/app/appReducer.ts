import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { buildSubStateSelector } from "./../subSelector";

const initialState: AppStoreState = {
  user: null,
  isLoggedIn: false,
};

export type AppState = typeof initialState;

export const appSlice = createSlice<
  AppState,
  {
    setUser: CaseReducer<AppState, PayloadAction<any>>;
    login: CaseReducer<AppState>;
    logout: CaseReducer<AppState>;
  }
>({
  name: "app",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      return {
        ...state,
        user: payload,
      };
    },
    login: (state) => {
      return {
        ...state,
        isLoggedIn: true,
      };
    },
    logout: (state) => {
      return {
        ...state,
        isLoggedIn: false,
      };
    },
  },
});

export const useAppSelector = buildSubStateSelector<AppState>(
  (state) => state.app
);

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
