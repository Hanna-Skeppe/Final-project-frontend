import React from 'react'

import img from '../assets/vin_natur_paket.jpg'
import { SubHeaderText } from './lib/Text'
import { SubHeaderContainer, HeaderOverlay } from './lib/Containers'
import { UserHeaderImage } from './lib/Images'

export const HeaderUser = () => {
  return (
    <SubHeaderContainer>
      <UserHeaderImage src={img} alt="wine bottles" />
      <HeaderOverlay />
      <SubHeaderText>My Wine Collection</SubHeaderText>
    </SubHeaderContainer>
  )
}

