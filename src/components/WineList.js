/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import FadeIn from './lib/FadeIn';
import LoadingSpinner from './LoadingSpinner';
import SearchBar from './SearchBar';
import WineCard from './WineCard';
import { fetchFavoriteWines } from '../reducers/user';
import { wines, fetchWineResults } from '../reducers/wines';
import { ClearButton } from './lib/Buttons';
import { SearchText } from './lib/Text';
import { ListWrapper, ButtonsWrapper } from './lib/Containers';

const WineList = () => {
  const winesList = useSelector((store) => store.wines.wines);
  const searchResult = useSelector((store) => store.wines.wines);
  const searchTerm = useSelector((store) => store.wines.searchTerm);
  const sortOrder = useSelector((store) => store.wines.sortOrder);
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const userId = useSelector((store) => store.user.login.userId);
  const favoriteWines = useSelector(
    (store) => store.user.userActions.favoriteWines,
  );
  const errorMessage = useSelector((store) => store.wines.errorMessage);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchWineResults(searchTerm, sortOrder));
      if (accessToken && userId) {
        dispatch(fetchFavoriteWines(userId, accessToken));
      }
      setLoading(false);
    }, 1500);
  }, [sortOrder, userId, dispatch, accessToken, searchTerm]);

  const handleSortChange = (event) => {
    dispatch(wines.actions.setSortOrder(event.target.value));
  };

  const handleBackClick = () => {
    dispatch(wines.actions.setSearchTerm(''));
    dispatch(wines.actions.setErrorMessage(''));
    dispatch(fetchWineResults('', ''));
  };

  return (
    <>
      <SearchBar />
      <ButtonsWrapper>
        {searchResult && (
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': {
                m: 1,
                width: 'auto',
                minWidth: '150px',
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              select
              label="Sort"
              id="outlined-select"
              value={sortOrder}
              onChange={handleSortChange}
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
            </TextField>
          </Box>
        )}
        {searchTerm.length > 0 && (
          <ClearButton type="button" onClick={() => handleBackClick()}>
            Back to all wines
          </ClearButton>
        )}
      </ButtonsWrapper>
      {searchTerm && !errorMessage && winesList?.length > 0 ? (
        <SearchText>Results for: {searchTerm}</SearchText>
      ) : (
        <SearchText>{errorMessage ? <p>{errorMessage}</p> : null}</SearchText>
      )}
      {loading && winesList.length < 1 ? <LoadingSpinner /> : ''}
      <ListWrapper>
        {winesList
          ? winesList.map((wine) => {
              const isFavorite = !!favoriteWines.find(
                (favorite) => favorite._id === wine._id,
              );
              return (
                <FadeIn key={wine._id}>
                  <WineCard isFavorite={isFavorite} key={wine._id} {...wine} />
                </FadeIn>
              );
            })
          : null}
      </ListWrapper>
    </>
  );
};

export default WineList;
