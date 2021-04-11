import { createSlice } from '@reduxjs/toolkit'

import { WINES_URL } from '../urls'

const initialState = {
  wines: [],
  errorMessage: '',
  searchTerm: '',
  sortOrder: ''
}

export const wines = createSlice({
  name: 'wines',
  initialState,
  reducers: {
    setWinesList: (store, action) => {
      store.wines = action.payload
      console.log('action.payload: setWinesList', action.payload)
    },
    setSearchTerm: (store, action) => {
      store.searchTerm = action.payload
      console.log('action.payload setSearchTerm', action.payload)
    },
    setErrorMessage: (store, action) => {
      const { errorMessage } = action.payload
      store.errorMessage = errorMessage
    },
    setSortOrder: (store, action) => {
      store.sortOrder = action.payload
      console.log('action.payload setSortOrder', action.payload)
    }
  }
})

// Thunk:
export const fetchWineResults = (searchTerm, sort) => {
  console.log('searchTerm:', searchTerm, 'sort:', sort)
  return (dispatch) => {
    fetch(`${WINES_URL}/?sort=${sort}&query=${searchTerm}`)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error('No results found.')
      })
      .then((json) => {
        console.log('json', json)
        dispatch(wines.actions.setWinesList(json))
        if (json.length === 0) {
          dispatch(wines.actions.setErrorMessage({ errorMessage: `No results found for: "${searchTerm}". Try another search.` }))
        } else {
          dispatch(wines.actions.setErrorMessage({ errorMessage: '' }))
        }
      })
      .catch((err) => {
        dispatch(wines.actions.setErrorMessage({ errorMessage: err.toString }))
      })
  }
}

