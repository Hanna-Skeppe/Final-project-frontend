import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoginFailed: false,
};

export const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoginFailed: (state, action) => {
      return { ...state, isLoginFailed: action.payload };
    },
  },
});

export const { setLoginFailed } = ui.actions;

export const uiReducer = ui.reducer;
