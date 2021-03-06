/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FadeIn from 'react-fade-in'

import { Loadingspinner } from '../components/Loadingspinner'
import { HeaderProducer } from '../components/HeaderProducer'
import { ProducerCard } from '../components/ProducerCard'
import { fetchProducersList } from '../reducers/producers'
import { BackLink } from '../components/lib/Links'
import { ProducerListWrapper } from '../components/lib/Containers'

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

  return (
    <>
      <HeaderProducer />
      <BackLink to="/">
        Home
      </BackLink>
      {loading && (producerList.length < 1) ? <Loadingspinner /> : ''}
      <ProducerListWrapper>
        {(producerList.length >= 1) && producerList.map((producer) => (
          <FadeIn key={producer._id}>
            <ProducerCard
              key={producer._id}
              {...producer} />
          </FadeIn>
        ))}
      </ProducerListWrapper>
    </>
  )
}