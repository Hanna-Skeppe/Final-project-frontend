/* eslint-disable */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
// import SearchIcon from '@material-ui/icons/Search';
// import InputAdornment from '@material-ui/core/InputAdornment';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import { wines } from '../reducers/wines'
import { fetchWineResults } from '../reducers/wines'
import { SearchButton } from './lib/Buttons'
import { SearchHeading } from './lib/Text'
import { InputTextDiv, SearchWrapper } from './lib/Containers'

// from material ui:
const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '20px',
    '& .MuiTextField-root': {
      // margin: theme.spacing(1),
      margin: 0,
      borderRadius: 0,
      width: '300',
      fontSize: '20px',
    },
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: '25ch',
    fontSize: '20px',
  },
}));

export const SearchBar = () => {
  const errorMessage = useSelector((store) => store.wines.errorMessage)
  const dispatch = useDispatch()
  // const history = useHistory()
  const classes = useStyles();
  const searchTerm = useSelector((store) => store.wines.searchTerm)
  const sortOrder = useSelector((store) => store.wines.sortOrder)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (searchTerm.length > 0) {
      dispatch(fetchWineResults(searchTerm, sortOrder))
      // dispatch(wines.actions.setSearchTerm(''))
      // history.push(`/`)
    }
  }

  return (
    <SearchWrapper>
      <SearchHeading>Search All the Wines</SearchHeading>
      <FormSearch onSubmit={handleSubmit}>
        <div className={classes.root} style={{ width: 100 + '%' }}>
          <InputTextDiv>
            <TextField
              id="outlined-full-width"
              style={{ margin: 8, fontSize: 16 + 'px' }}
              placeholder="Search..."
              type="search"
              fullWidth
              // margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              value={searchTerm}
              onChange={(event) => dispatch(wines.actions.setSearchTerm(event.target.value))}
              autoComplete="off"
              spellCheck="false"
              // InputProps={{
              //   startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
              // }} 
              />
            <SearchButton
              type="submit"
              onSubmit={handleSubmit}>
              <SearchOutlinedIcon style={{ fontSize: 36, fill: '#ffffff' }}/>
            </SearchButton>
          </InputTextDiv>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
      </FormSearch>
    </SearchWrapper>
  )
}

const FormSearch = styled.form`
  background: none;
  font-size: 16px;
  border-radius: 8px;
  display: block;
  margin: 25px 20px 30px 20px;
  width: 60vw;
  @media(max-width: 768px) {
    margin-bottom: 20px;
    width: 90vw;
  }
  @media(max-width: 560px) {
    margin: 15px 15px 20px 15px;
    width: 100vw;
  }
`

// const SearchInput = styled.input`
//   background: #EFEDED;
//   border: 1px solid #000;
//   color: #000;
//   font-size: 18px;
//   width: 600px;
//   height: 40px;
//   &::placeholder {
//     color: #000;
//     font-family: 'Montserrat', sans-serif;
//     text-align: bottom;
//   }
//   @media(max-width: 768px) {
//     width: 320px;
//   }
// `