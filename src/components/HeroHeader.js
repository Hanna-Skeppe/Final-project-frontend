import styled from 'styled-components/macro'
import React from 'react'
import video from '../videos/green_grapes.mp4'
import { HeaderOverlay } from './lib/Containers'

export const HeroHeader = () => {
  return (
    <HeroContainer>
      <Video autoPlay="autoplay" loop="loop" muted>
        <source src={video} type="video/mp4" />
      </Video>
      <HeaderOverlay />
      <HeroHeaderText>Natural Wine Finder</HeroHeaderText>
    </HeroContainer>
  )
}

const HeroContainer = styled.section`
  height: 50vh;
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeroHeaderText = styled.h1`
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  font-size: 92px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 3px 3px 8px rgba(90,87,87,0.6);
  word-wrap; wrap;
  margin: 20vh auto auto auto;
  z-index: 8;
  max-width: 70vw;
  @media(max-width: 1024px) {
    font-size: 72px;
    margin-top: 21vh;
  }
  @media(max-width: 768px) {
    font-size: 48px;
    margin-top: 22vh;
  }
  @media(max-width: 500px) {
    font-size: 32px;
    margin-top: 24vh;
  }
`

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 0;
  object-fit: cover;
  object-position: top center;
`
