/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
import styled from 'styled-components/macro'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { SearchBar } from './SearchBar'
import { WineCard } from './WineCard'
// import { WINES_URL } from '../urls'
// import { wines } from '../reducers/wines'
import { fetchFavoriteWines } from '../reducers/user'
import { fetchWineList } from '../reducers/wines'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const WineList = () => {
  const classes = useStyles();
  const [winesList, setWinesList] = useState([]) // useState stores the json so that I can map the results
  const searchResult = useSelector((store) => store.wines.wines)
  const [sort, setSort] = useState('')
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userId = useSelector((store) => store.user.login.userId)
  const favoriteWines = useSelector((store) => store.user.userActions.favoriteWines)

  useEffect(() => {
    dispatch(fetchWineList(sort))
    if (accessToken && userId) {
      dispatch(fetchFavoriteWines(userId, accessToken))
    }
  }, [sort, userId, dispatch, accessToken])

  let wineSearchResults = winesList
  if (searchResult.length > 0) {
    wineSearchResults = searchResult
  }
  console.log(winesList)
  console.log('searchResult:', searchResult)
  console.log('wineSearchResults', wineSearchResults)

  const handleSortChange = (event) => {
    setSort(event.target.value)
  }

  return (
    <>
      <SearchBar />
      <ButtonsWrapper>
        {/* Add filter buttons here */}
        {(searchResult.length >= 27) && 
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Sort</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={sort}
            onChange={handleSortChange}
            label="Sort"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="name_desc">Name (desc.)</MenuItem>
            <MenuItem value="name_asc">Name (asc)</MenuItem>
            <MenuItem value="average_rating_desc">Highest rated</MenuItem>
            <MenuItem value="average_rating_asc">Lowest rated</MenuItem>
            <MenuItem value="average_price_desc">Highest avg. price</MenuItem>
            <MenuItem value="average_price_asc">Lowest avg. price</MenuItem>
          </Select>
        </FormControl>}
      </ButtonsWrapper>
      <WineListWrapper>
        {wineSearchResults && wineSearchResults.map((wine) => (
          <WineCard
            isFavorite={favoriteWines.find((favorite) => favorite._id === wine._id)}
            key={wine._id}
            {...wine} />
        ))}
      </WineListWrapper>
    </>
  )
}

const WineListWrapper = styled.section`
  margin: 0;
  padding: 0;
  width: 100vw;
`


const ButtonsWrapper = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`

