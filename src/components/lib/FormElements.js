import styled from 'styled-components/macro'

// Login- (mobile) & Signup-pages:

export const Form = styled.form`
  background: #ededed;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center:
  align-items: center;
  margin: 40px auto 20px auto;
  width: 80vw;
  max-width: 480px;
  padding: 20px 30px 30px 30px;
  box-shadow: 3px 3px 8px rgba(90,87,87,0.6);
  @media(max-width: 500px) {
    width: 90vw;
    margin: 20px auto 10px auto;
  }
`
export const Input = styled.input`
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
export const Label = styled.label`
  color: #666;
  display: block;
  font-size: 13px;
  line-height: 1px;
  padding: 10px;  
`