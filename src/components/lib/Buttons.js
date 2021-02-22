import styled from 'styled-components/macro'

export const RedirectHomeButton = styled.button`
  border: none;
  padding: 20px;
  margin: 20px;
  background: #879A6E;
  color: white;
`

// // General styles // //

// WineCard:
export const FavoriteButton = styled.button`
  border: none;
  border-radius: 5px;
  background: transparent;
  margin: 8px 8px 8px 0;
  padding: 0;
  transition: .5s ease;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`

// Hamburger-styles:
export const StyledBurger = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 2rem;
  justify-content: space-around;
  left: 2rem;
  padding: 0;
  position: absolute;
  top: 18px;
  width: 2rem;
  z-index: 16;
  &:focus {
    outline: none;
  }
  div {
    background: ${({ open }) => (open ? '#ffffff' : '#ffffff')};
    border-radius: 10px;
    height: 0.25rem;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 2rem;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
export const LogoutButton = styled.button`
  background: #44515f;
  border: none;
  color: #ffffff;
  font-family: 'Overpass', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
  padding: 1.3rem 0;
  float: left;
  text-decoration: none;
  transition: color 0.3s linear;
  &:hover {
    color: #ce796b;
  }
}
`

// NavbarMain:
const activeClassName = 'nav-item-active'
export const LogInOutButton = styled.button.attrs({ activeClassName })`
  background: inherit;
  border: none;
  color: #fff;
  cursor: pointer;
  font-family: 'Overpass', sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin: 2vh 1vw;
  padding: 0;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #C9C4C4;
  }
  @media(max-width: 768px) {
    display: none;
  }
  &.${activeClassName} {
    color: #C9C4C4;
  }
`
// // Home - styles // //

// Home (SearchBar):
export const SearchButton = styled.button`
border: none;
border-radius: 5px;
background: #44515f;
margin: 8px 8px 8px 0;
padding: 9px 16px;
`
// Home (WineList):
export const ClearButton = styled.button`
  border: 1px solid #c1bfbf;
  background: #fff;
  color: #827e7c;
  padding: 18px;
  font-size: 16px;
  border-radius: 4px;
  margin: 8px;
`

// LoginPageMobile:
export const LoginButton = styled.button`
  background: #CE796B;
  border-color: transparent;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
  margin: 10px 0 5px 0;
  padding: 10px;
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
