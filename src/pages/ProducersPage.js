/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'

import { PRODUCERS_URL } from '../urls'
import { ProducerCard } from '../components/ProducerCard'
// const WINES_FROM_PRODUCER_URL = `http://localhost:8080/producers/${id}/wines`
// Where do I do the fetch to get wines from single producer? 
// In another component! (Single producer)
// Producers-Header

export const ProducersPage = () => {
  const [producers, setProducers] = useState([])

  useEffect(() => {
    fetch(PRODUCERS_URL)
      .then((res) => res.json())
      .then((json) => setProducers(json))
  }, [])

  return (
    <section> {producers.map((producer) => (
      <ProducerCard
        key={producer._id}
        {...producer} />
    ))}
    </section>
  )
}