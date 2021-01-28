/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
// import { useSelector } from 'react-redux'
import { WINES_URL } from '../urls'
import { WineCard } from './WineCard'

export const WineList = () => {
  // Maybe I will need useParams for sorting/querying?
  const [wines, setWines] = useState([]) // useState stores the json so that I can map the results

  useEffect(() => {
    fetch(WINES_URL)
      .then((res) => res.json())
      .then((json) => setWines(json))
  }, [])
  console.log('wines[0]', wines[0])
  // how to reach/display producer???
  // I changed producer to an array of objects in the model. It did not work either.
  // Use Object.entries? And if so how?
  return (
    <section> {wines.map((wine) => (
      <WineCard
        key={wine._id}
        {...wine} />
    ))}
    </section>
  )
}
// name={wine.name}
// producer_name={wine.producer.producer_name}
// image_url={wine.image_url}
// average_rating={wine.average_rating}
// country={wine.country}
// origin={wine.origin}
// year={wine.year}
// grape={wine.grape}
// type={wine.type}
// average_price={wine.average_price}
// added_sulfites={wine.added_sulfites}
// goes_well_with={wine.goes_well_with}
// importer={wine.importer}
