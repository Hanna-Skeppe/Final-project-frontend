/* eslint-disable no-underscore-dangle */
import styled from 'styled-components/macro'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { SearchBar } from './SearchBar'
import { WineCard } from './WineCard'
import { WINES_URL } from '../urls'
import { wines } from '../reducers/wines'

export const WineList = () => {
  const [winesList, setWinesList] = useState([]) // useState stores the json so that I can map the results
  const searchResult = useSelector((store) => store.wines.wines)
  const [sort, setSort] = useState('name_asc')
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`${WINES_URL}/?sort=${sort}`) // Do I have to include query & sort here?
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error('Could not get wines')
      })
      .then((json) => {
        setWinesList(json)
        dispatch(wines.actions.setWinesList(json)) // How can I update the Wines-store here?
      })
  }, [sort, dispatch])

  let wineSearchResults = winesList
  if (searchResult.length > 0) {
    wineSearchResults = searchResult
  }
  console.log('searchResult:', searchResult)
  console.log('wineSearchResults', wineSearchResults)

  return (
    <>
      <SearchBar />
      <ButtonsWrapper>
        {/* Add filter buttons here */}
        <select
          type="text"
          onChange={(event) => setSort(event.target.value)}>
          <option value="name_asc">Sort by...</option>
          <option value="name_desc">Name (desc.)</option>
          <option value="name_asc">Name (asc)</option>
          <option value="average_rating_desc">Highest rated</option>
          <option value="average_rating_asc">Lowest rated</option>
          <option value="average_price_desc">Highest avg. price</option>
          <option value="average_price_asc">Lowest avg. price</option>
        </select>
      </ButtonsWrapper>
      <section>
        {wineSearchResults && wineSearchResults.map((wine) => (
          <WineCard
            key={wine._id}
            {...wine} />
        ))}
      </section>
    </>
  )
}

const ButtonsWrapper = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`

