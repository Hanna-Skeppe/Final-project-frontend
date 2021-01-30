import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'
import { USERS_URL, SESSIONS_URL } from '../urls'

const initialState = {
  login: {
    name: localStorage.name || '',
    surname: localStorage.surname || '',
    accessToken: localStorage.accessToken || null,
    userId: localStorage.userId || '',
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
      localStorage.setItem('name', name)
    },
    setSurname: (store, action) => {
      const { surname } = action.payload
      store.login.surname = surname
      localStorage.setItem('surname', surname)
    },
    setUserId: (store, action) => {
      const { userId } = action.payload
      store.login.userId = userId
      localStorage.setItem('userId', userId)
    },
    setAccessToken: (store, action) => {
      const { accessToken } = action.payload
      store.login.accessToken = accessToken
      localStorage.setItem('accessToken', accessToken)
    },
    setErrorMessage: (store, action) => {
      const { errorMessage } = action.payload
      store.login.errorMessage = errorMessage
    }
  }
})

// // THUNKS // //

// LOGIN
export const loginUser = (email, password) => {
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
        dispatch(user.actions.setSurname({ surname: json.surname }))
        dispatch(user.actions.setErrorMessage({ errorMessage: '' }))
        dispatch(ui.actions.setLoginFailed(false))
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err.toString }))
        dispatch(ui.actions.setLoginFailed(true))
      })
  }
}

// SIGNUP
export const signUp = (name, surname, email, password) => {
  return (dispatch) => {
    fetch(USERS_URL, {
      method: 'POST',
      body: JSON.stringify({ name, surname, email, password }),
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
        dispatch(user.actions.setSurname({ surname: json.surname }))
        dispatch(user.actions.setErrorMessage({ errorMessage: '' }))
        dispatch(user.actions.setUserId({ userId: json.userId }))
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err.toString() }))
      })
  }
}

// LOGOUT
export const logoutUser = () => {
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
    dispatch(user.actions.setSurname({ surname: '' }))
    dispatch(user.actions.setUserId({ userId: null })) // Should this be 0 or null or '' ?
    dispatch(user.actions.setErrorMessage({ errorMessage: '' }))
    dispatch(user.actions.setAccessToken({ accessToken: null })) // Should this be 0 or null or '' ?
    localStorage.removeItem('accessToken')
    localStorage.removeItem('name')
    localStorage.removeItem('surname')
    localStorage.removeItem('userId')
  }
}