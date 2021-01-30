/* eslint-disable camelcase */
import React from 'react'
import styled from 'styled-components/macro'

import { CardContainer, CardImageWrapper } from './lib/Containers'
import { CardTitle } from './lib/Text'
import { CardLink } from './lib/Links'

export const WineCard = ({
  name,
  image_url,
  average_rating,
  country,
  origin,
  year,
  grape,
  type,
  average_price,
  added_sulfites,
  goes_well_with,
  importer,
  producer
}) => {
  // console.log('name', name, 'producer', producer)
  // add loadingspinner (lottie animation or gif)
  return (
    <CardContainer>
      <CardImageWrapper>
        <CardImage src={image_url} alt={name} />
      </CardImageWrapper>
      <CardTextWrapper>
        <CardTitle>{name}</CardTitle>
        <RatingText>Average rating: {average_rating}</RatingText>
        <InfoTextWrapper>
          <TextSubWrapper>
            <CardTextTitle>Country:</CardTextTitle>
            <CardTextTitle>Origin:</CardTextTitle>
            <CardTextTitle>Producer:</CardTextTitle>
            <CardTextTitle>Type:</CardTextTitle>
            <CardTextTitle>Year:</CardTextTitle>
            <CardTextTitle>Grape:</CardTextTitle>
            <CardTextTitle>Added sulfites:</CardTextTitle>
            <CardTextTitle>Average Price (SEK):</CardTextTitle>
            <CardTextTitle>Goes well with:</CardTextTitle>
            <CardTextTitle>Importer:</CardTextTitle>
          </TextSubWrapper>
          <TextSubWrapper>
            <CardText>{country}</CardText>
            <CardText>{origin}</CardText>
            <CardText>
              <CardLink to="/producers">
                {producer.producer_name}
              </CardLink>
            </CardText>
            <CardText>{type}</CardText>
            <CardText>{year}</CardText>
            <CardText>{grape}</CardText>
            <CardText>{added_sulfites}</CardText>
            <CardText>{average_price}</CardText>
            <CardText>{goes_well_with}</CardText>
            <CardText>{importer}</CardText>
          </TextSubWrapper>
        </InfoTextWrapper>
      </CardTextWrapper>
    </CardContainer>
  )
}

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
`
const CardTextWrapper = styled.div`
  margin: 10px;
  width: auto;
  display: flex;
  flex-direction: column;
`
const InfoTextWrapper = styled.div`
  display: flex
`

const RatingText = styled.p`
  font-weight: 700;
  font-size: 22px;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
`
const TextSubWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const CardTextTitle = styled.p`
  font-weight: 700;
  color: #637050;
  margin: 0 15px 0 0;
  font-size: 18px;
  text-align: right;
`
const CardText = styled.p`
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  margin: 0;
`
