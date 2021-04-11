import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { loginUser } from '../reducers/user'
import { LoginButton } from '../components/lib/Buttons'
import { PageHeader, ErrorMessage } from '../components/lib/Text'
import { HeaderTextContainer, FormContainer } from '../components/lib/Containers'
import { Form, Input, Label } from '../components/lib/FormElements'

export const LoginPageMobile = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const failed = useSelector((store) => store.ui.isLoginFailed)
  const dispatch = useDispatch()
  const history = useHistory()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const errorMessage = useSelector((store) => store.user.login.errorMessage)

  useEffect(() => {
    if (accessToken && !failed) {
      history.push('/')
    } else if (!accessToken && failed) {
      history.push('/login')
    }
  }, [failed, accessToken, history])

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(loginUser(email, password))
    setEmail('')
    setPassword('')
  }

  const handleKeyPressLogin = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      dispatch(loginUser(email, password))
      setEmail('')
      setPassword('')
    }
  }

  return (
    <FormContainer>
      <HeaderTextContainer>
        <PageHeader>Login</PageHeader>
      </HeaderTextContainer>
      <Form onSubmit={handleSubmit}>
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
            onChange={(event) => setPassword(event.target.value)}
            onKeyPress={handleKeyPressLogin} />
        </Label>
        <LoginButton
          type="submit"
          disabled={!email || password.length < 5}
          onSubmit={handleSubmit}>
          Log in
        </LoginButton>
      </Form>
      {failed && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </FormContainer>
  )
}
