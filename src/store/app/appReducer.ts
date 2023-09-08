import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { buildSubStateSelector } from "./../subSelector";

const initialState: AppStoreState = {
  user: null,
  isLoggedIn: false,
  language: "en",
};

export type AppState = typeof initialState;

export const appSlice = createSlice<
  AppState,
  {
    setUser: CaseReducer<AppState, PayloadAction<any>>;
    login: CaseReducer<AppState>;
    logout: CaseReducer<AppState>;
    reset: CaseReducer<AppState>;
    changeLanguage: CaseReducer<AppState, PayloadAction<string>>;
  }
>({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      return {
        ...state,
        user: payload,
      };
    },
    reset: () => initialState,
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
    changeLanguage: (state, { payload }) => {
      return {
        ...state,
        language: payload,
      };
    },
  },
});

export const useAppSelector = buildSubStateSelector<AppState>(
  (state) => state.app
);

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
