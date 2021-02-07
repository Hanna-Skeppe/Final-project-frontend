/* eslint-disable */
import React from 'react'
import { useSelector } from 'react-redux'

import { NavbarContainer } from './lib/Containers'
import { NavSpan } from './lib/Text'
import { NavbarLink } from './lib/Links'
import { PopoverLogin } from './PopoverLogin'
import { Logout } from './Logout'

export const NavbarMain = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userId = useSelector((store) => store.user.login.userId)
  const name = useSelector((store) => store.user.login.name)
  const surname = useSelector((store) => store.user.login.surname)
  
  console.log('accessToken:', accessToken) 
  console.log('name:', name)
  console.log('surname:', surname)
  console.log('userId:', userId)
  
  return (
    <NavbarContainer>
      <>
      <NavbarLink to="/" exact={true} activeStyle={{ color: '#C9C4C4', textDecoration: 'underline' }}> 
        Home
      </NavbarLink>
      <NavSpan>|</NavSpan>
      </>
      {/* <Link to="/about_us">
        <NavbarLinkText>About Us</NavbarLinkText>
      </Link>
      <span>|</span>
      <Link to="/naturalwines_info">
        <NavbarLinkText>About Natural Wines</NavbarLinkText>
      </Link>
      <span>|</span> */}
      <>
      <NavbarLink to="/producers" exact={true} activeStyle={{ color: '#C9C4C4', textDecoration: 'underline' }} >
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
    </NavbarContainer>
  )
}


