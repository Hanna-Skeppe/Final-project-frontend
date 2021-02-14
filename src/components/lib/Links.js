import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

// const activeClassName = 'active'

export const NavbarLink = styled(NavLink)`
color: #fff;
margin: 2vh 1vw;
font-size: 18px;
font-weight: bold;
font-family: 'Overpass', sans-serif;
text-decoration: none;
&:hover {
  cursor: pointer;
  text-decoration: underline;
  color: #ce796b;
}
@media(max-width: 768px) {
  display: none;
}
`

export const CardLink = styled(NavLink)`
  font-weight: bold;
  color: #000;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #C9C4C4;
  }
  `
