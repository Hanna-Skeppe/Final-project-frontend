import styled from 'styled-components/macro'

// General styles:
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

// Navbar styles:
export const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
  justify-content: center;
  // background: #879A6E; green
  // background: rgba(135, 154, 110, 0.8); hm group
  background: rgba(68, 81, 95, 0.8);
  
  // background: rgba(130, 126, 124, 0.8); hm group
  z-index: 13;
  width: 100vw;
  position: fixed;
`
export const CardContainer = styled.div`
  display: flex;
  margin: 20px;
  height: 450px;
  max-height: 100%;
  background: #f2f2f2; 
  box-shadow: 3px 3px 8px rgba(90,87,87,0.6);
  @media(max-width: 560px) {
    margin: 10px;
    justify-content: center;
    align-items: flex-end;
    height: auto;
  }
`
export const CardImageWrapper = styled.div`
  width: 20%;
  margin: 10px;
  background: #f2f2f2; 
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width: 1024px) {
    width: 25%;
  }
  @media(max-width: 560px) {
    width: 12%;
    margin: 0 0 15px 0;
  }
`

// Searchbar styles:
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
`