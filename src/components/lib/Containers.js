import styled from 'styled-components/macro'

// General styles:

export const HeroContainer = styled.section`
  height: 50vh;
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width: 560px) {
    height: 35vh;
  }
`
export const HeaderOverlay = styled.div`
  background-color: #888888;
  opacity: 0.40;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 4;
`
// Hamburger:
export const HamburgerWrap = styled.div`
  display: inline-block;
  z-index: 15;
@media(min-width: 769px) {
  display: none;
}
`

// Home (NavbarMain):
export const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
  justify-content: center;
  background: rgba(68, 81, 95, 0.8);
  z-index: 13;
  width: 100vw;
  position: fixed;
`
// Home (WineList):
export const ListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
  max-width: 1700px;
  @media(max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 85vw;
  }
  @media(max-width: 768px) {
    max-width: 100vw;
  }
  @media(max-width: 560px) {
    max-width: 100vw;
  }
`

export const ButtonsWrapper = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  @media(max-width: 768px) {
    margin-bottom: 20px;
  }
`
// Home (WineCard)
// export const CardContainer = styled.div`
//   display: flex;
//   margin: 20px;
//   height: 475px;
//   max-height: 100%;
//   background: rgba(236, 199, 172, .67);
//   box-shadow: 3px 3px 8px rgba(90,87,87,0.6);
//   @media(min-width: 1025px) {
//     height: 520px;
//   }
//   @media(max-width: 560px) {
//     margin: 10px;
//     justify-content: center;
//     align-items: flex-end;
//     height: auto;
//   }
// `
// export const CardImageWrapper = styled.div`
//   width: 20%;
//   margin: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   @media(max-width: 1024px) {
//     width: 25%;
//   }
//   @media(max-width: 560px) {
//     width: 12%;
//     margin: 0 0 15px 0;
//   }
//   @media(max-width: 500px) {
//     display: none;
//   }
// `

// Home (Searchbar):
export const InputTextDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

export const SearchWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 15vh;
  align-items: center;
  justify-content: center;
`
// Sub-pages styles:
export const SubHeaderContainer = styled.section`
  height: 40vh;
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width: 560px) {
    height: 35vh;
  }
`