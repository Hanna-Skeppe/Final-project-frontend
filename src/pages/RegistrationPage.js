import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { signUp } from '../reducers/user'
import { PageHeader, ErrorMessage } from '../components/lib/Text'
import { HeaderTextContainer, FormContainer } from '../components/lib/Containers'
import { Form, Input, Label } from '../components/lib/FormElements'
import { LoginButton, HomeButton } from '../components/lib/Buttons'

export const RegistrationPage = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const errorMessage = useSelector((store) => store.user.login.errorMessage)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(signUp(name, surname, email, password))
    setName('')
    setSurname('')
    setEmail('')
    setPassword('')
  }

  const redirectHome = () => {
    history.push('/')
  }

  return (
    <FormContainer>
      <HeaderTextContainer>
        {accessToken
          ? <><PageHeader>Registration was successful.</PageHeader>
            <PageHeader>You are now logged in!</PageHeader>
            </>
          : <PageHeader>Create Account</PageHeader>}
      </HeaderTextContainer>
      {!accessToken && (
        <Form onSubmit={handleSubmit}>
          <Label>
            * Name
            <Input
              type="text"
              required={true}
              value={name}
              placeholder="Type your name"
              onChange={(event) => setName(event.target.value)} />
          </Label>
          <Label>
            Surname
            <Input
              type="text"
              value={surname}
              placeholder="Type your surname"
              onChange={(event) => setSurname(event.target.value)} />
          </Label>
          <Label>
            * Email
            <Input
              lowercase
              type="text"
              required={true}
              placeholder="example@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value.toLowerCase())} />
          </Label>
          <Label>
            * Password
            <Input
              required={true}
              type="password"
              value={password}
              minLength={5}
              placeholder="Type your password (min. 6 characters)."
              onChange={(event) => setPassword(event.target.value)} />
          </Label>
          <LoginButton
            type="submit"
            disabled={!name || !email || password.length < 5}
            onSubmit={handleSubmit}>
            Sign Up
          </LoginButton>
        </Form>)}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {accessToken && <HomeButton type="button" onClick={redirectHome}>Back To Home</HomeButton>}
    </FormContainer>
  )
}