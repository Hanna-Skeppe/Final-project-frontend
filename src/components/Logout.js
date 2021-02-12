/* eslint-disable */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { logoutUser } from '../reducers/user'
import { LogInOutButton } from './lib/Buttons'

export const Logout = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogout = (event) => { 
    event.preventDefault()
    dispatch(logoutUser(accessToken)) // 'logoutUser' is the thunk-function in user reducer
    history.push(`/`)
  }

  return (
    <LogInOutButton
      type="submit"
      onClick={handleLogout}>
      Logout
    </LogInOutButton>
  )
}
