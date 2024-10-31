import { createSlice } from '@reduxjs/toolkit';

// Definiera initialt tillstånd
const initialState = {
  isLoginFailed: false,
};

// Skapa slice för UI
export const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoginFailed: (state, action) => {
      return { ...state, isLoginFailed: action.payload }; // Skapa ett nytt state-objekt
    },
  },
});

// Exportera actions
export const { setLoginFailed } = ui.actions;

// Exportera reducer
export const uiReducer = ui.reducer;
