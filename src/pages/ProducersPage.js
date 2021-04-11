/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import FadeIn from 'react-fade-in'

import { Loadingspinner } from '../components/Loadingspinner'
import { HeaderProducer } from '../components/HeaderProducer'
import { ProducerCard } from '../components/ProducerCard'
import { fetchProducersList } from '../reducers/producers'
import { BackLink } from '../components/lib/Links'

export const ProducersPage = () => {
  const dispatch = useDispatch()
  const producerList = useSelector((store) => store.producers.producers)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchProducersList())
      setLoading(false)
    }, 1500)
  }, [dispatch])
  console.log(producerList)

  return (
    <>
      <HeaderProducer />
      <BackLink to="/">
        Home
      </BackLink>
      {loading && (producerList.length < 1) ? <Loadingspinner /> : ''}
      <ListWrapper>
        {(producerList.length >= 1) && producerList.map((producer) => ( // map wil not happen until after producerList is fetched
          <FadeIn key={producer._id}>
            <ProducerCard
              key={producer._id}
              {...producer} />
          </FadeIn>
        ))}
      </ListWrapper>
    </>
  )
}

const ListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: auto;
  margin-top: 30px;
  max-width: 1700px;
  @media(max-width: 1500px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 85vw;
  }
  @media(max-width: 1024px) {
    max-width: 100vw;
    margin: 30px 10px 10px 10px;
  }
  @media(max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 80vw;
    margin: auto;
  }
  @media(max-width: 560px) {
    max-width: 100vw;
  }
`