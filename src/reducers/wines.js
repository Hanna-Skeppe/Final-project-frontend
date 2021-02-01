import { createSlice } from '@reduxjs/toolkit'

// import { WINES_URL } from '../urls'

// The wines-store/state is populated with all wines when I do a search.
const initialState = {
  wines: []
}
// How do I implement the filter-button? Should that be connected to the reducer or not?
// Should filter be implemented directly in the winelist?
export const wines = createSlice({
  name: 'wines',
  initialState,
  reducers: {
    setSearchTerm: (store, action) => {
      store.wines = action.payload
      console.log('action.payload', action.payload)
    },
    setErrorMessage: (store, action) => {
      const { errorMessage } = action.payload
      store.wines.errorMessage = errorMessage
    }
  }
})

// takes searchTerm as a prop/argument and send search result to Winelist.
export const searchResult = (searchTerm) => {
  console.log(searchTerm, 'searchTerm')
  return (dispatch) => {
    fetch(`http://localhost:8080/wines?query=${searchTerm}`)
      .then((res) => res.json())
      .then((json) => {
        console.log('json', json)
        dispatch(wines.actions.setSearchTerm(json))
      })
  }
}

// fetch(`${WINES_URL}?sort={sort}`)
// export const WINES_URL = 'http://localhost:8080/wines'
// THUNKS //
// http://localhost:8080/wines?query=france&sort=name_desc
// http://localhost:8080/wines?type=red&country=france&sort=average_price_asc
// GET (sorted?) WINES
// Will I have to do several different fetches to get
// sorted wines/ filtered wines/ searchresult(query) and all wines?

// export const fetchSortedWines = (wines) => {
//   return (dispatch) => {
//     fetch(`${WINES_URL}/?sort={sort}`, {
//       method: 'GET',
//       body: JSON.stringify({ wines }),
//       headers: { 'Content-type': 'application/json' }
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json()
//         }
//         throw new Error('Cannot get wines')
//       })
//       .then((json) => {
//         dispatch(wines.actions.setWines({ wines: json.wines }))
//         dispatch(wines.actions.setErrorMessage({ errorMessage: '' }))
//       })
//       .catch((err) => {
//         dispatch(wines.actions.setErrorMessage({ errorMessage: err.toString }))
//       })
//   }
// }