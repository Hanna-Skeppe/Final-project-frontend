/* eslint-disable */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

import { searchResult } from '../reducers/wines'

// from material ui:
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '20px',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300',
      fontSize: '20px',
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
    fontSize: '20px',
  },
}));

export const SearchBar = () => {
  const errorMessage = useSelector((store) => store.wines.errorMessage)
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles();


  const handleSubmit = (event) => {
    event.preventDefault()
    if (searchTerm.length > 0) {
      dispatch(searchResult(searchTerm))
      setSearchTerm('')
      history.push(`/`)
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
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              autoComplete="off"
              spellCheck="false"
              InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
              }} />
            <SearchButton
              type="submit"
              onSubmit={handleSubmit}>
              Search
            </SearchButton>
          </InputTextDiv>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
      </FormSearch>
    </SearchWrapper>
  )
}

const SearchHeading = styled.h3`
  font-family: 'Montserrat', sans-serif;
  color: #7d5143;
  font-size: 2rem;
  margin: 0;
  padding: 0;
`

const InputTextDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

const SearchButton = styled.button`
  border: none;
  border-radius: 5px;
  color: #fff;
  background: #7d5143;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
  margin: 8px 8px 8px 0;
  padding: 16px;
  letter-spacing: 1px;
`

const SearchWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 15vh;
  align-items: center;
  justify-content: center;
 
`

const FormSearch = styled.form`
  background: none;
  font-size: 16px;
  border-radius: 8px;
  display: block;
  margin: 25px 20px 30px 20px;
  width: 60vw;
  
  // @media(max-width: 768px) {
  //   margin-bottom: 10px;
  // }
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