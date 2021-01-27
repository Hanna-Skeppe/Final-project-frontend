// Navbar with links to:
// Home
// About us
// About natural wine
// Wine producers <ProducersPage />
// My page
// login <PopoverLogin /> // logout <Logout />

import React from 'react'
// import { useSelector } from 'react-redux'
// import { Link, NavLink } from 'react-router-dom'

// import { user } from '../reducers/user'

// import { PopoverLogin } from './PopoverLogin'
import { NavbarContainer } from './lib/Containers'
import { NavbarLinkText, NavSpan } from './lib/Text'
import { NavbarLink } from './lib/Links'
// import { Logout } from './Logout'

export const NavbarMain = () => {
  // const accessToken = useSelector((store) => store.user.accessToken)
  // const userId = useSelector((store) => store.user.userId)
  // const name = useSelector((store) => store.user.name)
  // const surname = useSelector((store) => store.user.surname)

  // const dispatch = useDispatch()

  return (
    <NavbarContainer>
      <NavbarLink to="/">
        <NavbarLinkText>Home</NavbarLinkText>
        {/* does the NavbarLinkText need a special className when active? */}
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
      <NavSpan>|</NavSpan>
      {/* {!accessToken &&
        <PopoverLogin />} */}
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
      {/* <span>|</span> */}
      <NavbarLink to="/users/:id/collection">
        <NavbarLinkText>My Page </NavbarLinkText>
        {/* `${name}{''}${surname}` */}
      </NavbarLink>
    </NavbarContainer>
  )
}

