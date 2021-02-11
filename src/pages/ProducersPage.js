/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'


import { HeaderProducer } from '../components/HeaderProducer'
import { ProducerCard } from '../components/ProducerCard'
import { fetchProducersList } from '../reducers/producers'

export const ProducersPage = () => {
  const dispatch = useDispatch()
  const producerList = useSelector((store) => store.producers.producers)

  useEffect(() => {
    dispatch(fetchProducersList())
  }, [dispatch])
  console.log(producerList)

  return (
    <>
      <HeaderProducer />
      <ListWrapper>
        {(producerList.length >= 1) && producerList.map((producer) => ( // solved error in console about key with .length so that map wil not happen until after producerList is fetched
          <ProducerCard
            key={producer._id}
            {...producer} />
        ))}
      </ListWrapper>
    </>
  )
}

const ListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  // grid-auto-rows: auto;
  //grid-gap: 30px;
  // grid-row-gap: 30px;
  //row-gap: 30px;
  margin: auto;
  // padding: 0;
  max-width: 1700px;
  //justify-items: center;
  @media(max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 85vw;
  }
  @media(max-width: 768px) {
    max-width: 95vw;
  }
  @media(max-width: 560px) {
    max-width: 100vw;
  }
`