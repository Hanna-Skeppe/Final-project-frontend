import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

import { addFavoriteWine, removeFavoriteWine } from 'reducers/user'
// import { CardContainer, CardImageWrapper } from './lib/Containers'
// import { CardTitle } from './lib/Text'
import { FavoriteButton } from './lib/Buttons'
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

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  height: auto;
  background: rgba(236, 199, 172, .67);
  box-shadow: 3px 3px 8px rgba(90,87,87,0.6);
  @media(min-width: 1025px) {
    height: 575px;
  }
  @media(max-width: 560px) {
    margin: 10px;
    justify-content: center;
  }
  @media(min-width: 1400px) {
    height: 610px;
  }
`

const TopTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: flex-start;
  align-self: center;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 30px 0px 10px 0px;
`

const CardTitle = styled.h3`
  font-family: 'Italiana', serif;
  font-size: 32px;
  margin: 0;
  color: #44515f;
  @media(max-width: 768px) {
    font-size: 26px;
    margin: 0;
  }
  @media(max-width: 560px) {
    font-size: 24px;
  }
`

const RatingsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #44515f;
  align-self: center;
  margin-bottom: 10px;
`

const CardContentWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  width: 90%;
  align-self: center;
  @media(max-width: 1024px) {
    margin-top: 5px;
    margin-bottom: 30px;
  }
  @media(max-width: 460px) {
    flex-direction: column-reverse;
  }
`

const InfoTextWrapper = styled.div`
  display: flex;
  flex: 1;
  @media(max-width: 1024px) {
    align-items: center;
  }
`

const RatingText = styled.p`
  font-size: 22px;
  margin: 0;
  font-family: 'Overpass', sans-serif;
  color: #44515f;
  @media(max-width: 768px) {
    font-size: 18px;
  }
  @media(max-width: 560px) {
    font-size: 16px;
  }
`

const CardImageWrapper = styled.div`
  width: 21%;
  max-height: 375px;
  margin: 0 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width: 560px) {
    width: 20%;
    margin: 0;
  }
  @media(max-width: 460px) {
    align-self: center;
    width: 15%;
    margin-top: 15px;
  }
  @media(min-width: 1400px) {
    max-height: 390px;
    width: 30%;
  }
`

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

// const CardImageSmall = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: contain;
//   object-position: center center;
//   @media(min-width: 500px) {
//     display: none;
//   }
// `

// const TextSubWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 10px;
//   @media(min-width: 1024px) {
//     line-height: 1.5;
//   }
// `

// const CardTextTitle = styled.p`
//   font-family: 'Overpass', sans-serif;
//   font-weight: 700;
//   margin: 0;
//   margin-right: 8px;
//   font-size: 18px;
//   text-align: right;
//   color:#44515f;
//   @media(max-width: 768px) {
//     font-size: 16px;
//   }
//   @media(max-width: 560px) {
//     font-size: 14px;
//     margin: 0 6px 0 0;
//   }
// `
// const CardText = styled.p`
//   font-family: 'Overpass', sans-serif;
//   font-size: 18px;
//   font-weight: 400;
//   text-align: left;
//   margin: 0;
//   color: #3a3a3a;
//   @media(max-width: 768px) {
//     font-size: 16px;
//   }
//   @media(max-width: 560px) {
//     font-size: 14px;
//   }
// `

const CardLink = styled(NavLink)`
  font-weight: bold;
  color: #3a3a3a;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #ce796b;
  }
`