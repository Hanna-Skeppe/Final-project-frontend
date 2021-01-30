/* eslint-disable */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro'

import { signUp } from '../reducers/user'

export const RegistrationPage = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [registered, setRegistered] = useState(false)

  const errorMessage = useSelector(store => store.user.login.errorMessage)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(signUp(name, surname, email, password))
    setName('')
    setSurname('')
    setEmail('')
    setPassword('')
    setRegistered(true)
  }

  const redirectHome = () => {
    history.push(`/`)
  }

  return (
    <FormContainer>
      {registered
        ? <h3>Registration was successful. You are now logged in!</h3>
        : <h3>This is a registration form to sign up!</h3>}
      {!registered && (
        <Form onSubmit={handleSubmit}>
          <Label>
            Name
            <Input
              type="text"
              required
              value={name}
              placeholder="Type your name"
              onChange={(event) => setName(event.target.value)}
              ></Input>
          </Label>
          <Label>
            Surname
            <Input
              type="text"
              required
              value={surname}
              placeholder="Type your surname"
              onChange={(event) => setSurname(event.target.value)}
              ></Input>
          </Label>
          <Label>
            Email
            <Input
              lowercase
              type="text"
              required
              value={email}
              onChange={event => setEmail(event.target.value.toLowerCase())}
            ></Input>
          </Label>
          <Label>
          <Input
            required
            type="password"
            value={password}
            minLength={5}
            placeholder="password"
            onChange={event => setPassword(event.target.value)}
          ></Input>
          </Label>
          <Button
            type="submit"
            disabled={!name || !email || password.length < 5}
            onSubmit={handleSubmit}
          >Sign Up</Button>
        </Form>)}
        {errorMessage && <h3>{errorMessage}</h3>}
        {registered && <Button type="button" onClick={redirectHome}>Back To Home</Button>}
    </FormContainer>
  )
}

const FormContainer = styled.div`
  &.-focused label {
    bottom: auto;
    color: #888;
    font-size: 11px;
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
  display: block;
  margin: 60px auto;
  max-width: 480px;
  padding: 20px 30px 30px 30px;
  @media(max-width: 500px) {
    max-width: 35vh;
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
const Label = styled.label`
  color: #666;
  display: block;
  font-size: 13px;
  line-height: 1px;
  padding: 10px;  
`
const Button = styled.button`
  background: #0a2e4e;
  border-color: transparent;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
  margin: 2px;
  padding: 10px;
  text-shadow: -1px -1px rgba(0,0,0,0.1);
  text-transform: uppercase;
  &:hover {
    transform: scale(1.01);
    transition: 
      box-shadow 0.4s, 
      transform 0.4s;
  }
`
