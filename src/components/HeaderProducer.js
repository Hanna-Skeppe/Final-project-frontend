import React from 'react'
import styled from 'styled-components/macro'

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
    </SubHeaderContainer>
  )
}

const ProducerHeaderImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 55%;
`
