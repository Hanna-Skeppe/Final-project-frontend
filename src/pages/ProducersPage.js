/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


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
      {/* Insert Producers-Header here */}
      {(producerList.length >= 1) && producerList.map((producer) => ( // solved error in console about key with .length so that map wil not happen until after producerList is fetched
        <section key={producer._id}>
          <ProducerCard
            {...producer} />
        </section>
      ))}
    </>
  )
}