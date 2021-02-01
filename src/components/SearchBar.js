/* eslint-disable */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
// import SearchIcon from '@material-ui/icons/Search';
// import InputBase from '@material-ui/core/InputBase';

import { searchResult } from '../reducers/wines'

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  // See movies: Searchbar.js
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
      <FormSearch onSubmit={handleSubmit}>
        <SearchInput
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          type="search"
          autoComplete="off"
          spellCheck="false"
          placeholder="Search..."
        />
        <button
          type="submit"
          onSubmit={handleSubmit}>
            Search
        </button>
      </FormSearch>
    </SearchWrapper>
  )
}

const SearchWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 15vh;
  align-items: center;
  justify-content: center;
 
`

const FormSearch = styled.form`
  background: none;
  border-radius: 8px;
  display: block;
  margin: 25px 20px 30px 20px;
  max-width: 650px;
  // @media(max-width: 768px) {
  //   margin-bottom: 10px;
  // }
`

const SearchInput = styled.input`
  background: #EFEDED;
  border: 1px solid #000;
  color: #000;
  font-size: 18px;
  width: 600px;
  height: 40px;
  &::placeholder {
    color: #000;
    font-family: 'Montserrat', sans-serif;
    text-align: bottom;
  }
  @media(max-width: 768px) {
    width: 320px;
  }
`