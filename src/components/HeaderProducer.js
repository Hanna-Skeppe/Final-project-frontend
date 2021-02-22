import React from 'react'

import img from '../assets/vineyard _1.jpg'
import { SubHeaderText } from './lib/Text'
import { SubHeaderContainer, HeaderOverlay } from './lib/Containers'
import { SubHeaderImage } from './lib/Images'

export const HeaderProducer = () => {
  return (
    <SubHeaderContainer>
      <SubHeaderImage src={img} alt="vineyard landscape" />
      <HeaderOverlay />
      <SubHeaderText>Wine Producers</SubHeaderText>
    </SubHeaderContainer>
  )
}