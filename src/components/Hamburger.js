/* eslint-disable */
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { logoutUser } from '../reducers/user'

// import { Logout } from './Logout'

export const HamburgerMenu = ({ open, setOpen }) => {
  const name = useSelector((store) => store.user.login.name)
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userId = useSelector((store) => store.user.login.userId)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogout = (event) => {
    event.preventDefault()
    dispatch(logoutUser(accessToken)) // 'logoutUser' is the thunk-function in user reducer
    history.push(`/`)
  }


  return (
    <>
      <StyledMenu open={open}>
        <Link
          to="/"
          onClick={() => setOpen(!open)}
        >Home
        </Link>
        <Link
          to="/producers"
          onClick={() => setOpen(!open)}
        >Wine Producers
        </Link>
        {!accessToken &&
        <>
          <Link
            to="/login"
            onClick={() => setOpen(!open)}
          >Login
          </Link>
          <Link
            to="/register"
            onClick={() => setOpen(!open)}
          >Register
          </Link>
        </>}
        {accessToken &&
        <>
          <LogoutButton
            type="submit"
            onClick={handleLogout}
          >Logout
          </LogoutButton>
          <Link
            to={`/users/${userId}/collection`}
            onClick={() => setOpen(!open)}
          >
            {name}'s Page
          </Link>
        </>}
      </StyledMenu>
    </>
  )
}

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger
      open={open}
      onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export const Hamburger = () => {
  const [open, setOpen] = useState(false)
  const node = React.useRef()

  return (
    <HamburgerWrap>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <HamburgerMenu open={open} setOpen={setOpen} />
      </div>
    </HamburgerWrap>
  )
}

export const HamburgerWrap = styled.div`
  display: inline-block;
  z-index: 15;
@media(min-width: 769px) {
  display: none;
}
`

export const StyledBurger = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 2rem;
  justify-content: space-around;
  left: 2rem;
  padding: 0;
  position: absolute;
  top: 18px;
  width: 2rem;
  z-index: 16;
  &:focus {
    outline: none;
  }
  div {
    background: ${({ open }) => (open ? '#ffffff' : '#ffffff')};
    border-radius: 10px;
    height: 0.25rem;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 2rem;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

export const StyledMenu = styled.nav`
  background: #44515f;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  padding: 1.5rem;
  position: absolute;
  align-items: flex-start;
  // text-align: left;
  top: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 15;
  width: 75%;
  @media(max-width: 500px) {
    width: 100%;
  }
  a {
    color: #ffffff;
    font-family: 'Montserrat',sans-serif;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    padding: 1.3rem 0;
    text-decoration: underline;
    transition: color 0.3s linear;
    &:hover {
      color: #ce796b;
    }
  }
`
const LogoutButton = styled.button`
  background: #44515f;
  border: none;
  color: #ffffff;
  font-family: 'Montserrat',sans-serif;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
  padding: 1.3rem 0;
  float: left;
  text-decoration: underline;
  transition: color 0.3s linear;
  &:hover {
    color: #ce796b;
  }
}
`
