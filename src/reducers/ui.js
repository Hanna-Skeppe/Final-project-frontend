import { createSlice } from '@reduxjs/toolkit'

export const ui = createSlice({
  name: 'ui',
  initialState: {
    isLoginFailed: false,
    isLoading: false // For the loading-spinner not implemented yet
  },
  reducers: {
    setLoginFailed: (store, action) => {
      store.isLoginFailed = action.payload
    },
    setLoading: (store, action) => {
      store.isLoading = action.payload
    }
  }
})