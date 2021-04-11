import { createSlice } from '@reduxjs/toolkit'

export const ui = createSlice({
  name: 'ui',
  initialState: {
    isLoginFailed: false
  },
  reducers: {
    setLoginFailed: (store, action) => {
      store.isLoginFailed = action.payload
    }
  }
})