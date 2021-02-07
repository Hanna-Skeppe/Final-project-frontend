/* eslint-disable */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro'

import { loginUser } from '../reducers/user'

export const LoginPageMobile = () => {
  
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const failed = useSelector((store) => store.ui.isLoginFailed) 

  const errorMessage = useSelector(store => store.user.login.errorMessage)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = (event) => { 
    event.preventDefault()
    dispatch(loginUser(email, password)) 
    setEmail('')
    setPassword('')
    history.push(`/`)
  }

  const handleKeyPressLogin = (event) => { 
    if (event.key === 'Enter') {
      event.preventDefault()
      dispatch(loginUser(email, password)) 
      setEmail('')
      setPassword('')
      history.push(`/`)
    }
  }

  return (
    <FormContainer>
      <HeaderTextContainer> 
      <PageHeader>Login</PageHeader>}
      </HeaderTextContainer>
      {/* {!registered && ( */}
        <Form onSubmit={handleSubmit}>
          <Label>
            * Email
            <Input
              lowercase
              type="text"
              required="true"
              placeholder="example@email.com"
              value={email}
              onChange={event => setEmail(event.target.value.toLowerCase())} />
          </Label>
          <Label>
            * Password
          <Input
            required="true"
            type="password"
            value={password}
            minLength={5}
            placeholder="Type your password (min. 6 characters)."
            onChange={event => setPassword(event.target.value)} 
            onKeyPress={handleKeyPressLogin}/>
          </Label>
          <Button
            type="submit"
            disabled={!email || password.length < 5}
            onSubmit={handleSubmit}
          >
            Log in
          </Button>
        </Form>
        {errorMessage && <h3>{errorMessage}</h3>}
        {failed && <ErrorMessage>Login failed. Try again.</ErrorMessage>}
    </FormContainer>
  )
}

const HeaderTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 70px auto 20px auto;
  @media(max-width: 1024px) {
    margin: 60px auto;
  }
  @media(max-width: 500px) {
    margin: 30px auto;
  }
`
const PageHeader = styled.h2`
  font-size: 2rem;
  margin: 0;
  color: #7a7a7a;
`

const FormContainer = styled.div`
  &.-focused label {
    bottom: auto;
    color: #888;
    font-size: 14px;
    font-weight: bold;
    line-height: 12px;
    top: 8px;
  }
  &.-focused input {
    line-height: 62px;
  }
`
const Form = styled.form`
  background: #ededed;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center:
  align-items: center;
  margin: 60px auto 20px auto;
  max-width: 480px;
  padding: 20px 30px 30px 30px;
  box-shadow: 3px 3px 8px rgba(90,87,87,0.6);
  @media(max-width: 500px) {
    max-width: 90vw;
    margin: 20px auto 10px auto;
  }
`
const Input = styled.input`
  background: transparent;
  border: none;
  border: 1px solid transparent;
  border-bottom: 1px solid black;
  border-radius: 3px;
  color: #333;
  display: block;
  font-size: 18px;
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
const Label = styled.label`
  color: #666;
  display: block;
  font-size: 13px;
  line-height: 1px;
  padding: 10px;  
`
const Button = styled.button`
  background: #7d5143;
  border-color: transparent;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
  margin: 10px 0 5px 0;
  padding: 10px;
  text-shadow: -1px -1px rgba(0,0,0,0.1);
  text-transform: uppercase;
  width: 110px;
  letter-spacing: 1px;
  align-self: center;
  &:hover {
    transform: scale(1.01);
    transition: 
      box-shadow 0.4s, 
      transform 0.4s;
  }
`