import React from 'react'

import { HeroHeader } from '../components/HeroHeader'
import { WineList } from '../components/WineList'

export const Home = () => {
  return (
    <>
      <HeroHeader />
      <WineList />
    </>
  )
}

//  ADD: <SearchField />
// ADD: buttons to sort and filter winelist