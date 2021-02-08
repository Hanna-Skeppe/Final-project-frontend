/* eslint-disable no-underscore-dangle */
/* eslint-disable spaced-comment */
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import { WineCard } from '../components/WineCard'
// import { HeaderSingleProducer } from '../components/HeaderSingleProducer'
import img from '../assets/singleproducerheader.jpg'
import {
  CardContainer,
  CardImageWrapper
} from '../components/lib/Containers'

export const WinesFromSingleProducerPage = () => {
  const [producerWines, setProducerWines] = useState()
  const [singleProducer, setSingleProducer] = useState()
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
            <SingleProducerHeaderContainer>
              <SingleProducerHeaderImage src={img} alt="person holding red grapes" />
              <SingleProducerHeaderOverlay />
              <SingleProducerHeaderText>{singleProducer.producer_name}</SingleProducerHeaderText>
              <BackLink to="/">
                <h3>Home</h3>
              </BackLink>
              <BackLinkProducers to="/producers">
                <h3>All producers</h3>
              </BackLinkProducers>
            </SingleProducerHeaderContainer>

            <CardContainer>
              <CardImageWrapper>
                <CardImage
                  src={singleProducer.producer_image_url}
                  alt={singleProducer.producer_name}
                />
              </CardImageWrapper>
              <TextDiv>
                <h3>{singleProducer.producer_name} </h3>
                <p>Country: {singleProducer.producer_country}</p>
                <a href={singleProducer.url} target="_blank" rel="noopener noreferrer">Producer homepage</a>
              </TextDiv>
            </CardContainer>
            <div>
              <h3>All wines from {singleProducer.producer_name}:</h3>
            </div>
          </>}
        <div>
          {producerWines && producerWines.map((wine) => (
            <WineCard
              key={wine._id}
              {...wine} />
          ))}
        </div>
      </section>

    </>
  )
}

const SingleProducerHeaderContainer = styled.section`
  height: 40vh;
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width: 768px) {
    height: 30vh;
  }
  @media(max-width: 500px) {
    height: 25vh;
  }
`

const BackLink = styled(Link)`
  position: absolute;
  bottom: 5vh;
  left: 10vw;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  z-index: 4;
`

const BackLinkProducers = styled(BackLink)`
  bottom: 10vh;
`

const SingleProducerHeaderImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 55%;
`

const SingleProducerHeaderOverlay = styled.div`
  background-color: #665E5E;
  opacity: 0.40;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 4;
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
  z-index: 999;
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