/* eslint-disable */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components/macro'
import { makeStyles } from '@material-ui/core/styles'
import { login } from '../reducers/user'
// https://material-ui.com/api/popover/

// I need to add possibility to close popover or toggle it
// right now I have to reload to close it
// An accesstoken seems to be sent when logging in but nothing happens when clicking loginbutton on popup

// From makeStyles material ui
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2)
  }
}));

export const PopoverLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [accessToken, setAccessToken] = useState(null) // Shall I have accesstoken here?
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState(null)
  const history = useHistory()
  const dispatch = useDispatch()
  const failedLogin = useSelector((store) => store.ui.isLoginFailed)

  const handleLoginClick = (event) => {
    setAnchorEl(event.currentTarget)
  };

  // function for closing the popup??
  const handleClose = () => {
    if (failedLogin) {
      setAnchorEl(null)
    }
  }

  // Not sure what this does? Something with id the popup should be open or not?
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(login({ email, password , accessToken })) // Shall accesstoken be here or not?
    handleClose()
    history.push(`/`)
  }

  const handleKeyPressLogin = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      dispatch(login({ email, password, accessToken })) // Shall accesstoken be here or not?
      handleClose()
      history.push(`/`)
    }
  }

  const goToSignup = () => {
    handleClose()
    setAnchorEl(null)
    history.push(`/register`)
  }
  
  return (
    <>
      <LogInButton onClick={handleLoginClick}>
        Login
      </LogInButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Typography className={classes.typagraphy}>
          <Label>
            Email
            <Input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value.toLowerCase())}
            />
          </Label>
          <Label>
            Password
            <Input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              onKeyPress={handleKeyPressLogin}
            />
          </Label>
          {failedLogin &&
            <ErrorMessage>Login failed. Try again.</ErrorMessage>
          }
          <Button
            type="submit"
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button
            type="button"
            onClick={goToSignup}
          >
            Not a member? Signup here.
          </Button>
        </Typography>
      </Popover>
    </>
  )
}
const activeClassName = 'nav-item-active'

const LogInButton = styled.button.attrs({ activeClassName })`
  background: inherit;
  border: none;
  color: #fff;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin: 2vh 1vw;
  padding: 0;
 
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #C9C4C4;
  }
  &.${activeClassName} {
    color: #C9C4C4;
  }
  // @media(max-width: 600px) {
  //   display: none;
  // }
`

const Label = styled.label`
  color: #666;
  display: block;
  font-size: 13px;
  line-height: 1px;
  padding: 10px;  
`

const Input = styled.input`
  background: transparent;
  border: none;
  border: 1px solid transparent;
  border-bottom: 1px solid black;
  border-radius: 3px;
  color: #333;
  display: block;
  font-size: 15px;
  line-height: 54px;
  margin: 10px 0px;
  padding: 0 10px;
  transition: border-color $standard-transition;
  width: 100%;
  z-index: 2;
  &:focus, &:active {
    border-bottom: 2px solid black;
    border-color: #ededed;
    outline: none;
  }
`

const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
`