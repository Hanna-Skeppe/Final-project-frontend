import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

import { addFavoriteWine, removeFavoriteWine } from 'reducers/user'
import {
  CardContainer,
  TopTextWrapper,
  TitleWrapper,
  RatingsWrapper,
  CardContentWrapper,
  InfoTextWrapper,
  CardImageWrapper
} from './lib/Containers'
import { CardTitle, RatingText } from './lib/Text'
import { FavoriteButton } from './lib/Buttons'
import { CardLink } from './lib/Links'
import { UserRating } from './UserRating'

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
      <TopTextWrapper>
        <TitleWrapper>
          <CardTitle>{name}</CardTitle>
          {accessToken &&
            <>
              {isFavorite &&
                <FavoriteButton
                  type="submit"
                  onClick={handleRemoveFavorite}>
                  <FavoriteOutlinedIcon style={{ fontSize: 42, fill: '#495867' }} />
                </FavoriteButton>}
              {!isFavorite &&
                <FavoriteButton
                  type="submit"
                  onClick={handleAddFavorite}
                ><FavoriteBorderOutlinedIcon style={{ fontSize: 42, fill: '#495867' }} />
                </FavoriteButton>}
            </>}
        </TitleWrapper>
        <RatingsWrapper>
          <RatingText>Average rating: {average_rating}</RatingText>
          <UserRating wineId={_id} />
        </RatingsWrapper>
      </TopTextWrapper>
      <CardContentWrapper>
        <CardImageWrapper>
          <CardImage src={image_url} alt={name} />
        </CardImageWrapper>
        <InfoTextWrapper>
          <Table>
            <tbody>
              <Tr>
                <Th>Country</Th><Td>{country}</Td>
              </Tr>
              <Tr>
                <Th>Origin</Th><Td>{origin}</Td>
              </Tr>
              <Tr>
                <Th>Producer</Th>
                <Td>
                  <CardLink to={`/singleproducer/${producer._id}/wines`}>
                    {producer.producer_name}
                  </CardLink>
                </Td>
              </Tr>
              <Tr>
                <Th>Type</Th><Td>{type}</Td>
              </Tr>
              <Tr>
                <Th>Year</Th><Td>{year}</Td>
              </Tr>
              <Tr>
                <Th>Grape</Th><Td>{grape}</Td>
              </Tr>
              <Tr>
                <Th>Sulfites</Th><Td>{added_sulfites}</Td>
              </Tr>
              <Tr>
                <Th>Avg. price</Th><Td>{average_price} (SEK)</Td>
              </Tr>
              <Tr>
                <Th>Goes well with</Th><Td>{goes_well_with}</Td>
              </Tr>
              <Tr>
                <Th>Importer</Th><Td>{importer}</Td>
              </Tr>
            </tbody>
          </Table>
        </InfoTextWrapper>
      </CardContentWrapper>
    </CardContainer>
  )
}

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
  @media(max-width: 1024px) {
    object-fit: contain;
  }
`

const Table = styled.table`
  font-family: 'Overpass', sans-serif;
  font-size: 18px;
  border: none;
  word-wrap: break-word;
  width: 100%;
  margin: auto;
  margin-top: 0;
  line-height: 1.5;
  @media(max-width: 460px) {
    font-size: 16px;
    line-height: 1.4;
  }
  @media(min-width: 1025px) {
    line-height: 1.4;
    
  }
  @media(min-width: 1400px) {
    font-size: 20px;
    line-height: 1.5;
  }
`
const Tr = styled.tr`
  width: 100%;
`

const Th = styled.th`
  font-weight: 800;
  color:#44515f;
  vertical-align: top;
  text-align: right;
  width: 35%;
  max-width: 100px;
  padding-right: 1rem; 
  @media(max-width: 460px) {
    text-align: left;
    padding-right: 0.5rem;
  }
`
const Td = styled.td`
  font-weight: 400;
  vertical-align: bottom;
  color: #3a3a3a;
`