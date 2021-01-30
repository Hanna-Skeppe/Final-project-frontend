import React from 'react'
import { useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom'

import { logoutUser } from '../reducers/user'
import { LogInOutButton } from './lib/Buttons'

export const Logout = () => {
  const dispatch = useDispatch()

  return (
    <LogInOutButton
      type="button"
      onClick={() => dispatch(logoutUser())}>
      Logout
    </LogInOutButton>
  )
}
