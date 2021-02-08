import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

import img from '../assets/vineyard _1.jpg'

export const HeaderProducer = () => {
  return (
    <ProducerHeaderContainer>
      <ProducerHeaderImage src={img} alt="vineyard landscape" />
      <ProducerHeaderOverlay />
      <ProducerHeaderText>Wine Producers</ProducerHeaderText>
      <BackLink to="/">
        <h3>Home</h3>
      </BackLink>
    </ProducerHeaderContainer>
  )
}
const ProducerHeaderContainer = styled.section`
  height: 40vh;
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width: 768px) {
    height: 30vh;
  }
  @media(max-width: 500px) {
    height: 25vh;
  }
`

const BackLink = styled(Link)`
  position: absolute;
  bottom: 5vh;
  left: 10vw;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  z-index: 4;
`

const ProducerHeaderImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 55%;
`
const ProducerHeaderOverlay = styled.div`
  background-color: #665E5E;
  opacity: 0.40;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 4;
`
const ProducerHeaderText = styled.h1`
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  font-size: 68px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 3px 3px 8px rgba(90,87,87,0.6);
  word-wrap; wrap;
  margin: auto;
  z-index: 999;
  max-width: 85vw;
  @media(max-width: 768px) {
    max-width: 90vw;
    font-size: 52px;
  }
  @media(max-width: 500px) {
    max-width: 95vw;
    font-size: 42px;
  }
`