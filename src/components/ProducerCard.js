/* eslint-disable camelcase */
import React from 'react'
import styled from 'styled-components/macro'
import {
  CardContainer,
  CardImageWrapper
} from './lib/Containers'

export const ProducerCard = ({
  producer_name,
  producer_country,
  producer_image_url,
  url
}) => {
  return (
    <CardContainer>
      <CardImageWrapper>
        <CardImage src={producer_image_url} alt={producer_name} />
      </CardImageWrapper>
      <div>
        <p>Producer name: {producer_name}</p>
        <p>Country: {producer_country}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">Producer homepage</a>
      </div>
    </CardContainer>
  )
}
// include lik to single producer-page on card.


const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
`