/* eslint-disable */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { NavbarContainer } from './lib/Containers'
import { NavbarLinkText, NavSpan } from './lib/Text'
import { NavbarLink } from './lib/Links'
// import { user } from '../reducers/user'
// import { ui } from '../reducers/ui'
import { PopoverLogin } from './PopoverLogin'

export const NavbarMain = () => {
  const accessToken = useSelector((store) => store.user.accessToken)
  // const userId = useSelector((store) => store.user.userId)
  // const name = useSelector((store) => store.user.name)
  // const surname = useSelector((store) => store.user.surname)
  const dispatch = useDispatch()
  console.log(accessToken)
  return (
    <NavbarContainer>
      <NavbarLink to="/">
        <NavbarLinkText>Home</NavbarLinkText>
      </NavbarLink>
      <NavSpan>|</NavSpan>
      {/* <Link to="/about_us">
        <NavbarLinkText>About Us</NavbarLinkText>
      </Link>
      <span>|</span>
      <Link to="/naturalwines_info">
        <NavbarLinkText>About Natural Wines</NavbarLinkText>
      </Link>
      <span>|</span> */}
      <NavbarLink to="/producers">
        <NavbarLinkText>Wine Producers</NavbarLinkText>
      </NavbarLink>
      {/* {!accessToken &&
        <> */}
        <NavSpan>|</NavSpan>
        <PopoverLogin />
        {/* </>} */}
      {/*
      // <Link to="/login">
        //   <NavbarLinkText>Login</NavbarLinkText>
        //* Should be text Logout if user is logged in!
      // </Link>
     */}
      {/* {accessToken &&
        <Link to="/">
          <Logout />
        </Link>} */}
      {/*  */}
      {accessToken &&
        <>
          <span>|</span>
          <NavbarLink to="/users/:id/collection">
            <NavbarLinkText>My Page</NavbarLinkText> 
          </NavbarLink>
        </>}
    </NavbarContainer>
  )
}


