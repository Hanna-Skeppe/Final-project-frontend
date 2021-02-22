import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import { NavbarContainer } from './lib/Containers'
import { NavSpan } from './lib/Text'
import { NavbarLink } from './lib/Links'
import { PopoverLogin } from './PopoverLogin'
import { Logout } from './Logout'
import { Hamburger } from './Hamburger'

export const NavbarMain = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userId = useSelector((store) => store.user.login.userId)
  const name = useSelector((store) => store.user.login.name)
  const surname = useSelector((store) => store.user.login.surname)

  console.log('accessToken:', accessToken) // REMOVE THESE LATER
  console.log('name:', name)
  console.log('surname:', surname)
  console.log('userId:', userId)

  return (
    <NavbarContainer>
      <Nav>
        <>
          <Hamburger />
          <NavbarLink to="/" exact={true} activeStyle={{ color: '#C9C4C4', textDecoration: 'underline' }}>
            Home
          </NavbarLink>
          <NavSpan>|</NavSpan>
          <NavbarLink to="/producers" exact={true} activeStyle={{ color: '#C9C4C4', textDecoration: 'underline' }}>
            Wine Producers
          </NavbarLink>
        </>
        {!accessToken &&
          <>
            <NavSpan>|</NavSpan>
            <PopoverLogin />
          </>}
        {accessToken &&
          <>
            <NavSpan>|</NavSpan>
            <Logout />
            <NavSpan>|</NavSpan>
            <NavbarLink to={`/users/${userId}/collection`} activeStyle={{ color: '#C9C4C4', textDecoration: 'underline' }}>
              {name}'s Page
            </NavbarLink>
          </>}
      </Nav>
    </NavbarContainer>
  )
}

const Nav = styled.nav`
  top: 0px;
  margin: 0px;
  overflow: hidden;
`


