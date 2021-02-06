/* eslint-disable operator-linebreak */
/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

import { fetchFavoriteWines, addFavoriteWine, removeFavoriteWine } from 'reducers/user'
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
  // const wines = useSelector((store) => store.wines.wines)
  const dispatch = useDispatch()
  const [isFavorite, setIsFavorite] = useState(false)

  const handleAddFavorite = (event) => {
    event.preventDefault()
    dispatch(addFavoriteWine(userId, accessToken, _id))
    setIsFavorite(true)
  }

  const handleRemoveFavorite = (event) => {
    event.preventDefault()
    dispatch(removeFavoriteWine(userId, accessToken, _id))
    setIsFavorite(false) // added this here but did not affect text on button on remove.Why?
    // dispatch(fetchFavoriteWines(userId, accessToken)) // this did not work to change text on button on remove
  }

  useEffect(() => {
    // dispatch(fetchFavoriteWines(userId, accessToken)) // --> I get an infinite loop if i comment in this! <--
    favoriteWines.map((wine) => {
      if (wine._id === _id) {
        return (
          setIsFavorite(true)
        )
      }
    })
  }, [isFavorite, accessToken, userId, favoriteWines, dispatch, _id]) // Why doesn't this trigger when favoriteWines is changed?
  // [favoriteWines, _id, isFavorite, accessToken, dispatch, userId]

  return (
    <CardContainer>
      <CardImageWrapper>
        <CardImage src={image_url} alt={name} />
      </CardImageWrapper>
      <CardTextWrapper>
        <TopTextWrapper>
          <CardTitle>{name}</CardTitle>
          {accessToken &&
            <>
              {/* {favoriteWines.map((favorite) => {
                if (favorite._id === _id) {
                  return (
                    <button
                      key={favorite._id}
                      type="submit"
                      onClick={handleRemoveFavorite}
                    >Remove from favorites
                    </button>
                  )
                }
              }
              )} */}
              {isFavorite &&
                <button
                  type="submit"
                  onClick={handleRemoveFavorite} // Why doesn't this button work on the first click on home? On second click the remove-thunk is called. Why? 
                >Remove from favorites
                </button>}
              {!isFavorite &&
                <button
                  type="submit"
                  onClick={handleAddFavorite}
                >Add to favorites
                </button>}
            </>}
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
                {/* replace this with a link to individual produer page */}
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
    </CardContainer >
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
