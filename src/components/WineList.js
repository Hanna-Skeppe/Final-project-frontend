//import <WineCard />
// loadingspinner (lottie animation or gif)
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { WINES_URL } from '../urls'
import { WineCard } from './WineCard'

export const WineList = () => {
  // const WINES_URL = 'http://localhost:8080/wines'
  // Maybe I will need useParams for sorting/querying?
  const [wines, setWines] = useState([]) // useState stores the json so that I can map the results

  useEffect(() => {
    fetch(WINES_URL)
      .then((res) => res.json())
      .then((json) => setWines(json))
  }, [])
  console.log(wines)

  return (
    <section> {wines.map((wine) => (
      <WineCard
        key={wine._id}
        name={wine.name}
        image_url={wine.image_url}
      />
    ))}
    </section>
  )
}