/* eslint-disable no-underscore-dangle */
/* eslint-disable spaced-comment */
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import { WineCard } from '../components/WineCard'
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
    <section>
      <Link to="/producers">
        <h3>All producers</h3>
      </Link>
      <Link to="/">
        <h3>Home</h3>
      </Link>
      {singleProducer &&
      <>
        <CardContainer>
          <CardImageWrapper>
            <CardImage src={singleProducer.producer_image_url} alt={singleProducer.producer_name} />
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