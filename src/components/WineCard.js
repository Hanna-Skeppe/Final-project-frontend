/* eslint-disable camelcase */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

import { addFavoriteWine, removeFavoriteWine } from 'reducers/user'
import { CardContainer, CardImageWrapper } from './lib/Containers'
import { CardTitle } from './lib/Text'

export const WineCard = ({
  _id,
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
  const userId = useSelector((store) => store.user.login.userId)
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const favoriteWines = useSelector((store) => store.user.userActions.favoriteWines)
  const wines = useSelector((store) => store.wines.wines)
  console.log('favoriteWines, winecard', favoriteWines) // outputs empty array in console
  const dispatch = useDispatch()
  console.log('wines, winecard', wines)
  console.log('userId', userId)

  const handleAddFavorite = (event) => {
    event.preventDefault()
    dispatch(addFavoriteWine(userId, accessToken, _id))
  }

  const handleRemoveFavorite = (event) => {
    event.preventDefault()
    dispatch(removeFavoriteWine(userId, accessToken, _id))
  }
  // if (accessToken && favoriteWines.includes(_id))
  // add loadingspinner (lottie animation or gif)
  return (
    <CardContainer>
      <CardImageWrapper>
        <CardImage src={image_url} alt={name} />
      </CardImageWrapper>
      <CardTextWrapper>
        <TopTextWrapper>
          <p>{_id}</p>
          <CardTitle>{name}</CardTitle>
          {/* How do I render the buttons conditionally???? */}
          {favoriteWines &&
            <button
              type="submit"
              onClick={handleRemoveFavorite}
            >Remove from favorites
            </button>}
          <button
            type="submit"
            onClick={handleAddFavorite}
          >Add to favorites
          </button>
        </TopTextWrapper>
        <RatingsWrapper>
          <RatingText>Average rating: {average_rating}</RatingText>
          <RatingText>Rate this wine: ⭐️ ⭐️ ⭐️ ⭐️ ⭐️</RatingText>
        </RatingsWrapper>
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

const TopTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const RatingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const CardTextWrapper = styled.div`
  margin: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const InfoTextWrapper = styled.div`
  display: flex
`

const RatingText = styled.p`
  font-weight: 700;
  font-size: 22px;
  margin: 10px;
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

const CardLink = styled(NavLink)`
  font-weight: bold;
  color: #000;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #C9C4C4;
  }
  `
