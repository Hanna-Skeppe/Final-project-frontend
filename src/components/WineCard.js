/* eslint-disable */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

import { addFavoriteWine, removeFavoriteWine } from 'reducers/user'
import { CardContainer, CardImageWrapper } from './lib/Containers'
import { CardTitle } from './lib/Text'

export const WineCard = ({
  isFavorite,
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
  const dispatch = useDispatch()

  const handleAddFavorite = (event) => {
    event.preventDefault()
    dispatch(addFavoriteWine(userId, accessToken, _id))
  }

  const handleRemoveFavorite = (event) => {
    event.preventDefault()
    dispatch(removeFavoriteWine(userId, accessToken, _id))
  }

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
              {isFavorite &&
                <FavoriteButton
                  type="submit"
                  onClick={handleRemoveFavorite}
                ><FavoriteOutlinedIcon style={{ fontSize: 48, fill: '#495867' }} />
                </FavoriteButton>}
              {!isFavorite &&
                <FavoriteButton
                  type="submit"
                  onClick={handleAddFavorite}
                ><FavoriteBorderOutlinedIcon color="disabled" style={{ fontSize: 48, fill: '#C495867' }} />
                </FavoriteButton>}
            </>}
        </TopTextWrapper>
        <RatingsWrapper>
          <RatingText>Average rating: {average_rating}</RatingText>
          <RatingText>Rate this wine: <span role="img"> ⭐️  ⭐️  ⭐️  ⭐️  ⭐️ </span></RatingText>
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
            <CardTextTitle>Average Price:</CardTextTitle>
            <CardTextTitle>Goes well with:</CardTextTitle>
            <CardTextTitle>Importer:</CardTextTitle>
          </TextSubWrapper>
          <TextSubWrapper>
            <CardText>{country}</CardText>
            <CardText>{origin}</CardText>
            <CardText>
              <CardLink to={`/singleproducer/${producer._id}/wines`}>
                {producer.producer_name}
              </CardLink>
            </CardText>
            <CardText>{type}</CardText>
            <CardText>{year}</CardText>
            <CardText>{grape}</CardText>
            <CardText>{added_sulfites}</CardText>
            <CardText>{average_price} (SEK)</CardText>
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
  @media(max-width: 560px) {
    // height: 75%;
  }
`

const TopTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  @media(max-width: 1024px) {
    // width: 80%;
    width: 86%;
    margin: 5px;
  }
  @media(max-width: 560px) {
    margin-bottom: 15px;
  }
`
const InfoTextWrapper = styled.div`
  display: flex
`

const RatingText = styled.p`
  // font-weight: 700;
  font-size: 22px;
  margin: 10px;
  margin-bottom: 0;
  font-family: 'Overpass', sans-serif;
  text-align: left;
  color: #3a3a3a;
  @media(max-width: 768px) {
    font-size: 18px;
    margin-top: 0;
  }
  @media(max-width: 560px) {
    font-size: 16px;
  }
`
const TextSubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  // @media(max-width: 560px) {
  //   width: 36%;
  // }
`

const CardTextTitle = styled.p`
  font-family: 'Overpass', sans-serif;
  font-weight: 700;
  color: #637050;
  margin: 0 15px 0 0;
  font-size: 18px;
  text-align: right;
  color:#44515f;
  @media(max-width: 768px) {
    font-size: 16px;
  }
  @media(max-width: 560px) {
    font-size: 14px;
    margin: 0 10px 0 0;
  }
`
const CardText = styled.p`
  font-family: 'Overpass', sans-serif;
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  margin: 0;
  color: #3a3a3a;
  @media(max-width: 768px) {
    font-size: 16px;
  }
  @media(max-width: 560px) {
    font-size: 14px;
  }
`

const CardLink = styled(NavLink)`
  font-weight: bold;
  color: #3a3a3a;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #ce796b;
  }
  `

const FavoriteButton = styled.button`
  border: none;
  border-radius: 5px;
  background: transparent;
  margin: 8px 8px 8px 0;
  padding: 0;
  transition: .5s ease;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`

