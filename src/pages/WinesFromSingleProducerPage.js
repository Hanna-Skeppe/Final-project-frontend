import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import FadeIn from 'react-fade-in'

import { HeaderSingleProducer } from 'components/HeaderSingleProducer'
import { WineCard } from '../components/WineCard'

export const WinesFromSingleProducerPage = () => {
  const [producerWines, setProducerWines] = useState()
  const [singleProducer, setSingleProducer] = useState()
  const favoriteWines = useSelector((store) => store.user.userActions.favoriteWines)
  const { id } = useParams()

  useEffect(() => {
    const SINGLE_PRODUCER_WINES_URL = `https://natural-wines-api.herokuapp.com/producers/${id}/wines`

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
    const SINGLE_PRODUCER_URL = `https://natural-wines-api.herokuapp.com/producers/${id}`

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
            <HeaderSingleProducer producerName={singleProducer.producer_name} />
            <FadeIn>
              <div>
                <BackLink to="/">
                  <h3>Home</h3>
                </BackLink>
                <BackLink to="/producers">
                  <h3>All producers</h3>
                </BackLink>
              </div>
            </FadeIn>
            <FadeIn>
              <TopWrapper>
                <CardImageWrapper>
                  <CardImage
                    src={singleProducer.producer_image_url}
                    alt={singleProducer.producer_name}
                  />
                </CardImageWrapper>
                <TextDiv>
                  {singleProducer.producer_country === 'France' && <FlagIcon src="/assets/france.png" />}
                  {singleProducer.producer_country === 'Italy' && <FlagIcon src="/assets/italy.png" />}
                  {singleProducer.producer_country === 'Spain' && <FlagIcon src="/assets/spain.png" />}
                  <CardLinkExternal href={singleProducer.url} target="_blank" rel="noopener noreferrer">Producer homepage</CardLinkExternal>
                </TextDiv>
              </TopWrapper>
            </FadeIn>
            <div>
              <SubHeading>All wines from {singleProducer.producer_name}:</SubHeading>
            </div>
          </>}
        <CardWrapper>
          {producerWines && producerWines.map((wine) => (
            <FadeIn>
              <WineCard
                isFavorite={favoriteWines.find((favorite) => favorite._id === wine._id)}
                key={wine._id}
                {...wine} />
            </FadeIn>
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
const CardLinkExternal = styled.a`
  font-family: 'Overpass', sans-serif;  
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
  font-family: 'Overpass', sans-serif;  
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
  font-family: 'Overpass', sans-serif;
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
  transition: transform .8s ease-in-out;
  &:hover {
    transform: rotate(5deg);
  }
`