/* eslint-disable no-underscore-dangle */
/* eslint-disable spaced-comment */
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import { WineCard } from '../components/WineCard'
// import { HeaderSingleProducer } from '../components/HeaderSingleProducer'
import img from '../assets/singleproducerheader.jpg'
import {
  // CardContainer,
  // CardImageWrapper,
  SubHeaderContainer,
  HeaderOverlay
} from '../components/lib/Containers'

export const WinesFromSingleProducerPage = () => {
  const [producerWines, setProducerWines] = useState()
  const [singleProducer, setSingleProducer] = useState()
  const favoriteWines = useSelector((store) => store.user.userActions.favoriteWines)
  const { id } = useParams()

  useEffect(() => {
    const SINGLE_PRODUCER_WINES_URL = `http://localhost:8080/producers/${id}/wines`

    fetch(SINGLE_PRODUCER_WINES_URL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error('Could not get wines fom this producer')
      })
      .then((json) => {
        setProducerWines(json)
        console.log(json)
      })
  }, [id])

  useEffect(() => {
    const SINGLE_PRODUCER_URL = `http://localhost:8080/producers/${id}`

    fetch(SINGLE_PRODUCER_URL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error('Could not get this producer')
      })
      .then((json) => {
        setSingleProducer(json)
        console.log('singleProducer json:', json)
      })
  }, [id])

  console.log('singleProducer', singleProducer)
  return (
    <>
      <section>
        {singleProducer &&
          <>
            <SubHeaderContainer>
              <SingleProducerHeaderImage src={img} alt="person holding red grapes" />
              <HeaderOverlay />
              <SingleProducerHeaderText>{singleProducer.producer_name}</SingleProducerHeaderText>
            </SubHeaderContainer>
            <div>
              <BackLink to="/">
                <h3>Home</h3>
              </BackLink>
              <BackLink to="/producers">
                <h3>All producers</h3>
              </BackLink>
            </div>
            <TopWrapper>
              <CardImageWrapper>
                <CardImage
                  src={singleProducer.producer_image_url}
                  alt={singleProducer.producer_name}
                />
              </CardImageWrapper>
              <TextDiv>
                {/* <h3>{singleProducer.producer_name} </h3> */}
                {/* <p>Country: {singleProducer.producer_country}</p> */}
                {singleProducer.producer_country === 'France' && <FlagIcon src="/assets/france.png" />}
                {singleProducer.producer_country === 'Italy' && <FlagIcon src="/assets/italy.png" />}
                {singleProducer.producer_country === 'Spain' && <FlagIcon src="/assets/spain.png" />}
                <CardLinkProducer to={singleProducer.url}>Producer homepage</CardLinkProducer>
                {/* <a href={singleProducer.url} target="_blank" rel="noopener noreferrer">Producer homepage</a> */}
              </TextDiv>
            </TopWrapper>
            <div>
              <SubHeading>All wines from {singleProducer.producer_name}:</SubHeading>
            </div>
          </>}
        <CardWrapper>
          {producerWines && producerWines.map((wine) => (
            <WineCard
              isFavorite={favoriteWines.find((favorite) => favorite._id === wine._id)}
              key={wine._id}
              {...wine} />
          ))}
        </CardWrapper>
      </section>

    </>
  )
}

const CardWrapper = styled.div`
  dispay: flex;
  justify-content: center;
  margin: auto;
  max-width: 1000px;
`


const CardLinkProducer = styled(Link)`
  font-weight: bold;
  font-size: 20px;
  color: #495867;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #CE796B;
  }
  @media(max-width: 1500px) {
    font-size: 18px;
  }
  @media(max-width: 1024px) {
    font-size: 16px;
  }
  `

const SubHeading = styled.h3`
  margin-left: 10vh;
  color: #495867;
  text-align: center;
  @media(max-width: 560px) {
    margin-left: 0;
  }
`

const FlagIcon = styled.img`
  width: 85px;
  height: 85px;
  margin: 20px 20px 20px 10px;
  border-radius: 10px;
`

const TopWrapper = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 5vh;
`

const BackLink = styled(Link)`
font-size: 18px;
margin: 20px 10px 0 50px;
text-decoration: none;
color: #495867;
font-weight: 700;
display: inline-flex;
align-items: center;
z-index: 4;
@media(min-width: 769px) {
  display: none;
}
`

const SingleProducerHeaderImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 55%;
`

const SingleProducerHeaderText = styled.h1`
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  font-size: 68px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 3px 3px 8px rgba(90,87,87,0.6);
  word-wrap; wrap;
  margin: auto;
  z-index: 8;
  max-width: 85vw;
  @media(max-width: 768px) {
    max-width: 90vw;
    font-size: 52px;
  }
  @media(max-width: 500px) {
    max-width: 95vw;
    font-size: 42px;
  }
`

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-right: 5vw;
  margin-left: 5vh;
  line-height: 30px;
  @media(max-width: 560px) {
    margin-left: 2vw;
    margin-right: 2vw;
    //justify-content: center;
    align-items: center;
  }
`

const CardImageWrapper = styled.div`
  width: 50%;
  max-width: 390px;
  margin: 10px;
  margin-left: 10vw;
  background: #fff;
  align-self: center;
  @media(max-width: 560px) {
    margin-left: 2vw;
  }
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 500px;
  object-fit: cover;
  object-position: top center;
  border: 10px solid #efeded; 
  box-shadow: 3px 3px 8px rgba(90,87,87,0.6);
  transition: transform .8s ease-in-out;
  &:hover {
    transform: rotate(6deg);
  }
`