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

// Hamburger-styles:
export const HamburgerWrap = styled.div`
  display: inline-block;
  z-index: 15;
@media(min-width: 769px) {
  display: none;
}
`

// Home, NavbarMain-styles:
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

// Home, Searchbar-styles:
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

// Home, WineList-styles:
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
// ProducerPage-styles:
export const ProducerListWrapper = styled(ListWrapper)`
  grid-template-columns: repeat(3, 1fr);
  margin-top: 30px;
  @media(max-width: 1500px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 85vw;
  }
  @media(max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 100vw;
    margin: 30px 10px 10px 10px;
  }
  @media(max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 80vw;
    margin: auto;
  }
  @media(max-width: 560px) {
    max-width: 100vw;
  }
`

// UserPage-styles:
export const UserListWrapper = styled.section`
  max-width: 800px;
  margin: auto;
  margin-top: 50px;
  @media (max-width: 1024px) {
    max-width: 90vw;
  }
  @media (max-width: 768px) {
    max-width: 100vw;
    margin-top: 20px;
  }
`

// WineCard-styles:
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  height: auto;
  background: rgba(236, 199, 172, .67);
  box-shadow: 3px 3px 8px rgba(90,87,87,0.6);
  @media(min-width: 1025px) {
    height: 575px;
  }
  @media(max-width: 560px) {
    margin: 10px;
    justify-content: center;
  }
  @media(min-width: 1400px) {
    height: 610px;
  }
`

export const TopTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: flex-start;
  align-self: center;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 30px 0px 10px 0px;
`

export const RatingsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #44515f;
  align-self: center;
  margin-bottom: 10px;
`

export const CardContentWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  width: 90%;
  align-self: center;
  @media(max-width: 1024px) {
    margin-top: 5px;
    margin-bottom: 30px;
  }
  @media(max-width: 460px) {
    flex-direction: column-reverse;
  }
`

export const InfoTextWrapper = styled.div`
  display: flex;
  flex: 1;
  @media(max-width: 1024px) {
    align-items: center;
  }
`

export const CardImageWrapper = styled.div`
  width: 21%;
  max-height: 375px;
  margin: 0 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width: 560px) {
    width: 20%;
    margin: 0;
  }
  @media(max-width: 460px) {
    align-self: center;
    width: 15%;
    margin-top: 15px;
  }
  @media(min-width: 1400px) {
    max-height: 390px;
    width: 30%;
  }
`

// Login- (mobile) & Signup-pages:
export const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 70px auto 20px auto;
  @media(max-width: 1024px) {
    margin: 0 auto;
  }
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &.-focused label {
    bottom: auto;
    color: #888;
    font-size: 14px;
    font-weight: bold;
    line-height: 12px;
    top: 8px;
  }
  &.-focused input {
    line-height: 62px;
  }
`