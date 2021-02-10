import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

import img from '../assets/vineyard _1.jpg'
// import { SubHeaderText } from './lib/Text'
import { ProducerHeaderText } from './lib/Text'
import { SubHeaderContainer, HeaderOverlay  } from './lib/Containers'

export const HeaderProducer = () => {
  return (
    <SubHeaderContainer>
      <ProducerHeaderImage src={img} alt="vineyard landscape" />
      <HeaderOverlay  />
      <ProducerHeaderText>Wine Producers</ProducerHeaderText>
      <BackLink to="/">
        <h3>Home</h3>
      </BackLink>
    </SubHeaderContainer>
  )
}

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
