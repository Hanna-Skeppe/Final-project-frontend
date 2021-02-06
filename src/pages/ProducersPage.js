/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ProducerCard } from '../components/ProducerCard'
import { fetchProducersList } from '../reducers/producers'
// const WINES_FROM_PRODUCER_URL = `http://localhost:8080/producers/${id}/wines`
// Where do I do the fetch to get wines from single producer? 
// In another component! (Single producer)
// Producers-Header

export const ProducersPage = () => {
  // const [producers, setProducers] = useState([])// useState stores the json so that I can map the results
  const dispatch = useDispatch()
  const producerList = useSelector((store) => store.producers.producers)
  
  useEffect(() => {
    dispatch(fetchProducersList())
    // fetch(PRODUCERS_URL)
    //   .then((res) => res.json())
    //   .then((json) => setProducers(json))
  }, [dispatch])
  console.log(producerList)
  // console.log(producersList)
  return (
    <section> {producerList.map((producer) => (
      <ProducerCard
        key={producer._id}
        {...producer} />
    ))}
    </section>
  )
}