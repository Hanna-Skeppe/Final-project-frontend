import styled from 'styled-components/macro'

// export const NavbarLinkText = styled.p`
//   color: #fff;
//   margin: 2vh 1vw;
//   font-size: 18px;
//   font-weight: bold;
//   font-family: 'Montserrat', sans-serif;
//   text-decoration: none;
//   &:hover {
//     cursor: pointer;
//     text-decoration: underline;
//     color: #C9C4C4;
//   }
// `
export const NavSpan = styled.span` 
  color: #fff;
  font-weight: bold;
  @media(max-width: 768px) {
    display: none;
  }
`

export const CardTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 32px;
  text-decoration: underline;
  text-align: left;
  margin: 10px 10px 10px 30px;
  // color: #827e7c; hm group
  color: #44515f;
  @media(max-width: 768px) {
    font-size: 26px;
    margin: 10px;
  }
`

