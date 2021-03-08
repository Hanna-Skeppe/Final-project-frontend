/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FadeIn from 'react-fade-in'

import { SearchBar } from './SearchBar'
import { WineCard } from './WineCard'
import { fetchFavoriteWines } from '../reducers/user'
import { wines, fetchWineResults } from '../reducers/wines'
import { ClearButton } from './lib/Buttons'
import { SearchText } from './lib/Text'
import { ListWrapper, ButtonsWrapper } from './lib/Containers'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export const WineList = () => {
  const winesList = useSelector((store) => store.wines.wines)
  const searchResult = useSelector((store) => store.wines.wines)
  const searchTerm = useSelector((store) => store.wines.searchTerm)
  const sortOrder = useSelector((store) => store.wines.sortOrder)
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userId = useSelector((store) => store.user.login.userId)
  const favoriteWines = useSelector((store) => store.user.userActions.favoriteWines)
  const errorMessage = useSelector((store) => store.wines.errorMessage)
  const dispatch = useDispatch()
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchWineResults(searchTerm, sortOrder))
    if (accessToken && userId) { // --> now it seems to work & not crash even if no favorites exists when user logs in. // removed && favoriteWines.length > 0 because favorites not fetched in winelist // (Got error 404 before (could not fetch) if no favorites).
      dispatch(fetchFavoriteWines(userId, accessToken))
    }
  }, [sortOrder, userId, dispatch, accessToken, errorMessage])
  console.log('favoriteWines, winelist', favoriteWines)

  const handleSortChange = (event) => {
    dispatch(wines.actions.setSortOrder(event.target.value))
  }

  const handleBackClick = () => {
    dispatch(wines.actions.setSearchTerm(''))
    dispatch(wines.actions.setErrorMessage(''))
  }

  return (
    <>
      <SearchBar />
      <ButtonsWrapper>
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
        <ClearButton type="button" onClick={() => handleBackClick()}>
          Back to all wines
        </ClearButton>}
      </ButtonsWrapper>
      {searchTerm && !errorMessage && (winesList.length < 26) ? <SearchText>Results for: {searchTerm}</SearchText> : ''}
      <ListWrapper>
        {winesList && winesList.map((wine) => (
          <FadeIn key={wine._id}>
            <WineCard
              isFavorite={favoriteWines.find((favorite) => favorite._id === wine._id)}
              key={wine._id}
              {...wine} />
          </FadeIn>
        ))}
      </ListWrapper>
    </>
  )
}

