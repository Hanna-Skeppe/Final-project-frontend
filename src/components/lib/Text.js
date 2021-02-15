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
  font-family: 'Italiana', serif;
  // font-weight: 700;
  font-size: 32px;
  // text-decoration: underline;
  text-align: left;
  margin: 10px 10px 10px 30px;
  // color: #827e7c; hm group
  color: #44515f;
  @media(max-width: 768px) {
    font-size: 26px;
    margin: 10px;
  }
  @media(max-width: 560px) {
    font-size: 22px;
  }
`

export const SearchHeading = styled.h3`
  font-family: 'Italiana', serif;
  color: #827e7c;
  font-size: 2rem;
  margin: 0;
  padding: 0;
  @media(max-width: 768px) {
    font-size: 1.5rem;
  }
`

// Sub-pages Heading: 
export const SubHeaderText = styled.h1`
  font-family: 'Italiana', serif;
  color: #fff;
  font-size: 72px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 3px 3px 8px rgba(90,87,87,0.6);
  word-wrap; wrap;
  margin: auto;
  margin-top: 17vh;
  z-index: 8;
  max-width: 85vw;
  @media(max-width: 1024px) {
    font-size: 52px;
    margin-top: 20vh;
  }
  @media(max-width: 768px) {
    max-width: 90vw;
    font-size: 36px;
  }
  @media(max-width: 500px) {
    max-width: 95vw;
    font-size: 32px;
  }
`

export const ProducerHeaderText = styled.h1`
  font-family: 'Italiana', serif;
  color: #fff;
  font-size: 72px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 3px 3px 8px rgba(90,87,87,0.6);
  word-wrap; wrap;
  margin: auto;
  z-index: 8;
  max-width: 85vw;
  margin-top: 17vh;
  @media(max-width: 1024px) {
    font-size: 52px;
    margin-top: 20vh;
  }
  @media(max-width: 768px) {
    max-width: 90vw;
    font-size: 36px;
  }
  @media(max-width: 500px) {
    max-width: 95vw;
    font-size: 32px;
  }
`