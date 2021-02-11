/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
import styled from 'styled-components/macro'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { SearchBar } from './SearchBar'
import { WineCard } from './WineCard'
// import { WINES_URL } from '../urls'
import { wines } from '../reducers/wines'
import { fetchFavoriteWines } from '../reducers/user'
import { fetchWineResults } from '../reducers/wines'

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
  const winesList = useSelector((store) => store.wines.wines)
  const searchResult = useSelector((store) => store.wines.wines)
  const searchTerm = useSelector((store) => store.wines.searchTerm)
  const sortOrder = useSelector((store) => store.wines.sortOrder)
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userId = useSelector((store) => store.user.login.userId)
  const favoriteWines = useSelector((store) => store.user.userActions.favoriteWines)
  const errorMessage = useSelector((store) => store.wines.errorMessage)

  useEffect(() => {
    dispatch(fetchWineResults(searchTerm, sortOrder))
    if (accessToken && userId) {
      dispatch(fetchFavoriteWines(userId, accessToken))
    }
  }, [sortOrder, userId, dispatch, accessToken])

  // const wineSearchResults = winesList
  // if (searchResult.length > 0) {
  //   wineSearchResults = searchResult
  // }
  console.log(winesList)
  // console.log('searchResult:', searchResult)
  // console.log('wineSearchResults', wineSearchResults)

  const handleSortChange = (event) => {
    dispatch(wines.actions.setSortOrder(event.target.value))
  }

  const handleBackClick = () => {
    window.location.reload() // is there a better way to go back to all wines without using reload?
    dispatch(wines.actions.setSearchTerm(''))
  }

  return (
    <>
      <SearchBar />
      <ButtonsWrapper>
        {/* Add filter buttons here  */}
        {/* (searchResult.length >= 27)  */}
        {searchResult &&
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Sort</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={sortOrder}
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
        {(searchTerm.length > 0) && 
        <ClearButton
          type="button"
          onClick={() => handleBackClick()}
        >Back to all wines
        </ClearButton>}
      </ButtonsWrapper>
      {searchTerm && !errorMessage && (winesList.length < 26) ? <SearchText>Results for: {searchTerm}</SearchText> : ''}
      <WineListWrapper>
        {winesList && winesList.map((wine) => (
          <WineCard
            isFavorite={favoriteWines.find((favorite) => favorite._id === wine._id)}
            key={wine._id}
            {...wine} />
        ))}
      </WineListWrapper>
    </>
  )
}

const ClearButton = styled.button`
  border: 1px solid #c1bfbf;
  background: #fff;
  color: #827e7c;
  padding: 18px;
  font-size: 16px;
  border-radius: 4px;
  margin: 8px;
`


const SearchText = styled.p`
  text-align: center;
  margin: 0 0 15px 0;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  color: #827e7c;
`


const WineListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  // grid-auto-rows: auto;
  //grid-gap: 30px;
  // grid-row-gap: 30px;
  //row-gap: 30px;
  margin: auto;
  // padding: 0;
  max-width: 1700px;
  //justify-items: center;
  @media(max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 85vw;
  }
  @media(max-width: 768px) {
    max-width: 95vw;
  }
  @media(max-width: 560px) {
    max-width: 100vw;
  }
`

const ButtonsWrapper = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  @media(max-width: 768px) {
    margin-bottom: 20px;
  }
`

