import React from 'react'
import styled from 'styled-components/macro'

import img from '../assets/vin_natur_paket.jpg'
import { SubHeaderText } from './lib/Text'
import { SubHeaderContainer, HeaderOverlay } from './lib/Containers'

export const HeaderUser = () => {
  return (
    <SubHeaderContainer>
      <UserHeaderImage src={img} alt="wine bottles" />
      <HeaderOverlay  />
      <SubHeaderText>My Wine Collection</SubHeaderText>
    </SubHeaderContainer>
  )
}

const UserHeaderImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 26%;
  @media(max-width: 1024px) {
    object-position: center 0%;
  }
`

