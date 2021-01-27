import styled from 'styled-components/macro'

// Should the active & hover be styled border-bottom: 1px solid #C9C4C4 instead?
export const NavbarLinkText = styled.p`
  color: #fff;
  margin: 2vh 1vw;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #C9C4C4;
  }
`
export const NavSpan = styled.span` 
  color: #fff;
  font-weight: bold;
`