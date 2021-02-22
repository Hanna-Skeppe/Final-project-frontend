import React from 'react'

import img from '../assets/singleproducerheader.jpg'
import { SubHeaderImage } from './lib/Images'
import { SubHeaderText } from './lib/Text'
import { SubHeaderContainer, HeaderOverlay } from './lib/Containers'

export const HeaderSingleProducer = ({ producerName }) => {
  return (
    <SubHeaderContainer>
      <SubHeaderImage src={img} alt="person holding red grapes" />
      <HeaderOverlay />
      <SubHeaderText>{producerName}</SubHeaderText>
    </SubHeaderContainer>
  )
}