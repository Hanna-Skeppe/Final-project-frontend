import styled from 'styled-components/macro'
import { Link, NavLink } from 'react-router-dom'

// NavbarMain-styles:
export const NavbarLink = styled(NavLink)`
  font-family: 'Overpass', sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin: 2vh 1vw;
  color: #fff;
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

// WineCard-styles:
export const CardLink = styled(NavLink)`
  font-weight: bold;
  color: #3a3a3a;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #ce796b;
  }
`

// ProducersPage-styles:
export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;  
  font-family: 'Overpass', sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  margin: 20px 10px 0 50px;
  color: #495867;
  z-index: 4;
  @media(min-width: 769px) {
    display: none;
  }
`