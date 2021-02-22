import styled from 'styled-components/macro'

// // General styles // //

// Winecard:
export const CardTitle = styled.h3`
  font-family: 'Italiana', serif;
  font-size: 32px;
  text-align: left;
  margin: 0 10px 0 30px;
  color: #44515f;
  @media(max-width: 768px) {
    font-size: 26px;
    margin: 0 10px;
  }
  @media(max-width: 560px) {
    font-size: 22px;
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

// // HOME - styles // //

// Home (NavbarMain):
export const NavSpan = styled.span` 
  color: #fff;
  font-weight: bold;
  @media(max-width: 768px) {
    display: none;
  }
`

// Home (HeroHeader):
export const HeroHeaderText = styled.h1`
  font-family: 'Italiana', serif;
  color: #fff;
  font-size: 92px;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 3px 3px 8px rgba(90,87,87,0.6);
  word-wrap; wrap;
  margin: 22vh auto auto auto;
  z-index: 8;
  max-width: 85vw;
  @media(max-width: 1024px) {
    font-size: 72px;
    margin-top: 23vh;
  }
  @media(max-width: 768px) {
    font-size: 48px;
    margin-top: 24vh;
  }
  @media(max-width: 560px) {
    font-size: 30px;
    margin-top: 19vh;
  }
`

// Home (WineList):
export const SearchText = styled.p`
  text-align: center;
  margin: 0 0 15px 0;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  color: #827e7c;
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

