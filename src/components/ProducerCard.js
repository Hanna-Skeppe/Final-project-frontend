/* eslint-disable camelcase */
import React from 'react'
import styled from 'styled-components/macro'

import { CardLink } from './lib/Links'

import {
  CardContainer,
  CardImageWrapper
} from './lib/Containers'

export const ProducerCard = ({
  producer_name,
  producer_country,
  producer_image_url,
  url,
  _id
}) => {
  console.log(_id)
  return (
    <CardContainer>
      <CardImageWrapper>
        <CardImage src={producer_image_url} alt={producer_name} />
      </CardImageWrapper>
      <TextDiv>
        <h3>{producer_name} </h3>
        <p>Country: {producer_country}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">Producer homepage</a>
        <CardLink to={`/singleproducer/${_id}/wines`} exact>
          All wines from this producer
        </CardLink>
      </TextDiv>
    </CardContainer>
  )
}

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-top: 50px;
  line-height: 30px;
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
`