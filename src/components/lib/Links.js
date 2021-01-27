import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

const activeClassName = 'nav-item-active'

export const NavbarLink = styled(NavLink).attrs({ activeClassName })`
color: #fff;
font-size: 18px;
font-weight: bold;
font-family: 'Montserrat', sans-serif;
text-decoration: none;
&:hover {
  cursor: pointer;
  text-decoration: underline;
  color: #C9C4C4;
}
&.${activeClassName} {
  color: #C9C4C4;
}
`