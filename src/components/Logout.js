import React from 'react'
import { useDispatch } from 'react-redux'
//import { useHistory } from 'react-router-dom'

import { logout } from '../reducers/user'
import { NavbarLinkText } from './lib/Text'
import { SignoutButton } from './lib/Buttons'

//This has to be redone. I have the function for logout in the reducer & not here
export const Logout = () => {
  const dispatch = useDispatch()
// const history = useHistory()

  return (
    <SignoutButton
      type="button"
      onClick={() => dispatch(logout())}>
      <NavbarLinkText>Logout</NavbarLinkText>
    </SignoutButton>
  )
}
