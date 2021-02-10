import styled from 'styled-components/macro'

export const RedirectHomeButton = styled.button`
  border: none;
  padding: 20px;
  margin: 20px;
  background: #879A6E;
  color: white;
`
const activeClassName = 'nav-item-active'

export const LogInOutButton = styled.button.attrs({ activeClassName })`
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
    // color: #C9C4C4;
    color: #ce796b;
  }
  @media(max-width: 768px) {
    display: none;
  }
  &.${activeClassName} {
    color: #C9C4C4;
  }
  // @media(max-width: 600px) {
  //   display: none;
  // }
`

export const SearchButton = styled.button`
border: none;
border-radius: 5px;
background: #44515f;
margin: 8px 8px 8px 0;
padding: 9px 16px;
`