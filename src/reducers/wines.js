import { createSlice } from '@reduxjs/toolkit'

import { WINES_URL } from '../urls'
// import { fetchFavoriteWines } from './user'

const initialState = {
  wines: [],
  errorMessage: ''
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
      store.wines = action.payload
      console.log('action.payload setSearchTerm', action.payload)
    },
    setErrorMessage: (store, action) => {
      const { errorMessage } = action.payload
      store.errorMessage = errorMessage
    }
  }
})

export const fetchWineList = (sort) => {
  return (dispatch) => {
    fetch(`${WINES_URL}/?sort=${sort}`)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error('Could not get wines')
      })
      .then((json) => {
        // setWinesList(json)
        dispatch(wines.actions.setWinesList(json))
      })
      // .then(() => {
      //   if (accessToken) {
      //     dispatch(fetchFavoriteWines(userId, accessToken))
      //   }
      // })
      // console.log(favoriteWines)
  }
}

// takes searchTerm as a prop/argument and send search result to Winelist.
export const searchResult = (searchTerm) => { // changed this to include sort.
  console.log(searchTerm, 'searchTerm')
  return (dispatch) => {
    fetch(`http://localhost:8080/wines?query=${searchTerm}`) // changed this to include sort.
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error('Could not perform search. Try again.')
      })
      .then((json) => {
        console.log('json', json)
        dispatch(wines.actions.setSearchTerm(json))
        // dispatch(wines.actions.setWinesList(json)) // tried to add this to solve sorting searchresult. Did not work. Still disappears when sorting.
        if (json.length === 0) {
          dispatch(wines.actions.setErrorMessage({ errorMessage: 'No results found. Try another search.' }))
        } else {
          dispatch(wines.actions.setErrorMessage({ errorMessage: '' }))
        }
      })
      .catch((err) => {
        dispatch(wines.actions.setErrorMessage({ errorMessage: err.toString }))
      })
  }
}

// TRYING TO COMBINE THE TWO THUNKS IN TO ONE: (both search and sort) Did not get it to work
export const fetchWineResults = (searchTerm, sort) => { 
  console.log('searchTerm:', searchTerm, 'sort:', sort)
  return (dispatch) => {
    fetch(`http://localhost:8080/wines/?sort=${sort}&query=${searchTerm}`)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error('No results found.')
      })
      .then((json) => {
        console.log('json', json)
        dispatch(wines.actions.setSearchTerm(json))
        dispatch(wines.actions.setWinesList(json))
        if (json.length === 0) {
          dispatch(wines.actions.setErrorMessage({ errorMessage: 'No results found. Try another search.' }))
        } else {
          dispatch(wines.actions.setErrorMessage({ errorMessage: '' }))
        }
      })
      .catch((err) => {
        dispatch(wines.actions.setErrorMessage({ errorMessage: err.toString }))
      })
  }
}

