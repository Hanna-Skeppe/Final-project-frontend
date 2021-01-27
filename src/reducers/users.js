import { createSlice } from '@reduxjs/toolkit'

import { USERS_URL, SESSIONS_URL } from '../urls'

const initialState = {
  login: {
    name: localStorage.name || '',
    surName: localStorage.surName || '',
    accessToken: localStorage.accessToken || null,
    userId: localStorage.userId || 0, // Where is this userId from? Confused where it comes from.
    errorMessage: ''
  }
}

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (store, action) => {
      const { name } = action.payload
      store.login.name = name
      // localStorage.setItem('name', name) // Will I use Localstorage??
    },
    setSurName: (store, action) => {
      const { surName } = action.payload
      store.login.surName = surName
      // localStorage.setItem('surName', surName)
    },
    setUserId: (store, action) => {
      const { userId } = action.payload
      store.login.userId = userId
      // localStorage.setItem('userId', userId)
    },
    setAccessToken: (store, action) => {
      const { accessToken } = action.payload
      store.login.accessToken = accessToken
      // localStorage.setItem('accessToken', accessToken)
    },
    setErrorMessage: (store, action) => {
      const { errorMessage } = action.payload
      store.login.errorMessage = errorMessage
    }
  }
})

// // THUNKS // //

// LOGIN
export const login = (email, password) => {
  return (dispatch) => {
    fetch(SESSIONS_URL, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-type': 'application/json' }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error(
          'Unable to sign in. Please check that e-mail and password are correct'
        )
      })
      .then((json) => {
        dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }))
        dispatch(user.actions.setUserId({ userId: json.userId }))
        dispatch(user.actions.setName({ name: json.name }))
        dispatch(user.actions.setSurName({ surName: json.surName }))
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err.toString }))
      })
  }
}

// SIGNUP
export const signUp = (name, surName, email, password) => {
  return (dispatch) => {
    fetch(USERS_URL, {
      method: 'POST',
      body: JSON.stringify({ name, surName, email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error('Could not create new user')
      })
      .then((json) => {
        dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }))
        dispatch(user.actions.setName({ name: json.name }))
        dispatch(user.actions.setSurName({ surName: json.surName }))
        dispatch(user.actions.setErrorMessage({ errorMessage: '' }))
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err.toString() }))
      })
  }
}

// LOGOUT
export const logout = () => {
  return (dispatch, getStore) => {
    const { accessToken } = getStore().user.login.accessToken
    fetch(`${USERS_URL}/logout`, {
      method: 'POST',
      headers: { Authorization: accessToken }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error('Failed to log out')
      })
      .catch((err) => {
        dispatch(
          user.actions.setErrorMessage({ errorMessage: err.toString() })
        )
      })
    dispatch(user.actions.setName({ name: '' }))
    dispatch(user.actions.setSurName({ surName: '' }))
    dispatch(user.actions.setUserId({ userId: null })) // Should this be 0 or null or '' ?
    dispatch(user.actions.setErrorMessage({ errorMessage: '' }))
    dispatch(user.actions.setAccessToken({ accessToken: null })) // // Should this be 0 or null or '' ?
    // localStorage.removeItem('accessToken')
    // localStorage.removeItem('name')
    // localStorage.removeItem('surName')
    // localStorage.removeItem('userId')
  }
}