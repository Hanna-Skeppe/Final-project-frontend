/* eslint-disable */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components/macro'
import { makeStyles } from '@material-ui/core/styles'
import { loginUser } from '../reducers/user'
import { LogInOutButton } from './lib/Buttons'
// https://material-ui.com/api/popover/
// https://material-ui.com/components/popover/

// From material-ui 
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2)
  },
}));

export const PopoverLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const classes = useStyles() // From material-ui 
  const [anchorEl, setAnchorEl] = useState(null) // From material-ui 
  
  const history = useHistory()
  const dispatch = useDispatch()
  const failed = useSelector((store) => store.ui.isLoginFailed) 
  

  //const errorMessage = useSelector((store) => store.user.login.errorMessage) // use this instead in the return?

  const handlePopupClick = (event) => { // From material-ui 
    setAnchorEl(event.currentTarget)
  };

  //From material-ui (for closing the popup)
  const handleClose = () => { 
    setAnchorEl(null)
  }

  // From material-ui 
  const open = Boolean(anchorEl)
  const id = open ? 'popup-login' : undefined

  const handleSubmit = (event) => { 
    event.preventDefault()
    dispatch(loginUser(email, password)) // 'loginUser' is the thunk-function in user.js 
    handleClose() 
    history.push(`/`)
  }

  const handleKeyPressLogin = (event) => { // Haven't tested to login on keypress yet
    if (event.key === 'Enter') {
      event.preventDefault()
      dispatch(loginUser({ email, password })) 
      history.push(`/`)
    }
  }
  
  // This works. It redirects to '/register'-page when pressing button on popup
  const goToSignup = () => { 
    handleClose()
    setAnchorEl(null)
    history.push(`/register`)
  }
  
  return (
    <>
      <LogInOutButton aria-describedby={id} onClick={handlePopupClick}>
        Login
      </LogInOutButton>
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
        <Typography className={classes.typography}>
          <Label> 
            Email
            <Input
              type="email"
              required
              value={email}
              placeholder="example@email.com"
              onChange={(event) => setEmail(event.target.value.toLowerCase())}
            />
          </Label>
          <Label>
            Password
            <Input
              type="password"
              required
              value={password}
              placeholder="type your password (min. 5 characters)"
              onChange={(event) => setPassword(event.target.value)}
              onKeyPress={handleKeyPressLogin}
            />
          </Label>
          {failed && <ErrorMessage>Login failed. Try again.</ErrorMessage>}
          <Button
            type="submit"
            onClick={handleSubmit}
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