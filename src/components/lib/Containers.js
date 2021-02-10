import styled from 'styled-components/macro'

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
`
export const CardImageWrapper = styled.div`
  width: 20%;
  margin: 10px;
  background: #f2f2f2; 
  display: flex;
  align-items: center;
  justify-content: center;
`