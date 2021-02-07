/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { ProducerCard } from '../components/ProducerCard'
import { fetchProducersList } from '../reducers/producers'
// const WINES_FROM_PRODUCER_URL = `http://localhost:8080/producers/${id}/wines`
// Where do I do the fetch to get wines from single producer? 
// In another component! (Single producer)
// Producers-Header

export const ProducersPage = () => {
  const dispatch = useDispatch()
  const producerList = useSelector((store) => store.producers.producers)
  // const producerId = useSelector((store) => store.producers.producers._id)
  useEffect(() => {
    dispatch(fetchProducersList())
  }, [dispatch])
  console.log(producerList)

  return (
    <>
      <Link to="/">
        <h3>Home</h3>
      </Link>
      {(producerList.length >= 1) && producerList.map((producer) => ( // solved error in console about key with .length so that map wil not happen until after producerList is fetched
        <section key={producer._id}>
          <ProducerCard
            {...producer} />
        </section>
      ))}
    </>
  )
}