import React from 'react'
import styled from 'styled-components/macro'


import img from '../assets/vineyard _1.jpg'

export const HeaderSingleProducer = () => {
  return (
    <SingleProducerHeaderContainer>
      <SingleProducerHeaderImage src={img} alt="vineyard landscape" />
      <SingleProducerHeaderOverlay />
      <SingleProducerHeaderText>producer name</SingleProducerHeaderText>
    </SingleProducerHeaderContainer>
  )
}
const SingleProducerHeaderContainer = styled.section`
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
const SingleProducerHeaderImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 55%;
`
const SingleProducerHeaderOverlay = styled.div`
  background-color: #665E5E;
  opacity: 0.40;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 4;
`
const SingleProducerHeaderText = styled.h1`
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  font-size: 68px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 3px 3px 8px rgba(90,87,87,0.6);
  word-wrap; wrap;
  margin: auto;
  z-index: 5;
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