// Navbar with links to:
// Home
// About us
// About natural wine
// Wine producers <ProducersPage />
// My page
// login <PopoverLogin /> // logout <Logout />

import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// import { users } from '../reducers/users'

import { PopoverLogin } from './PopoverLogin'
import { NavbarContainer } from './lib/Containers'
import { NavbarLinkText } from './lib/Text'
import { Logout } from './Logout'

export const NavbarMain = () => {
  const accessToken = useSelector((store) => store.users.accessToken)
  const userId = useSelector((store) => store.users.userId)
  const name = useSelector((store) => store.users.name)
  const surName = useSelector((store) => store.users.surName)

  // const dispatch = useDispatch()

  return (
    <NavbarContainer>
      <Link to="/">
        <NavbarLinkText>Home</NavbarLinkText>
        {/* does the NavbarLinkText need a special className when active? */}
      </Link>
      <span>|</span>
      {/* <Link to="/about_us">
        <NavbarLinkText>About Us</NavbarLinkText>
      </Link>
      <span>|</span>
      <Link to="/naturalwines_info">
        <NavbarLinkText>About Natural Wines</NavbarLinkText>
      </Link>
      <span>|</span> */}
      <Link to="/producers">
        <NavbarLinkText>Wine Producers</NavbarLinkText>
      </Link>
      <span>|</span>
      {!accessToken &&
        <PopoverLogin />}
      {/* // <Link to="/login">
        //   <NavbarLinkText>Login</NavbarLinkText>
        //* Should be text Logout if user is logged in!
      // </Link>
     */}
      {accessToken &&
        <Link to="/">
          <Logout />
        </Link>}
      <span>|</span>
      <Link to={`/users/${userId}/collection`}>
        <NavbarLinkText>`${name}{''}${surName}`</NavbarLinkText>
      </Link>
    </NavbarContainer>
  )
}

