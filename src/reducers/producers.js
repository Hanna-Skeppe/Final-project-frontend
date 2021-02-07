import { createSlice } from '@reduxjs/toolkit'
import { PRODUCERS_URL } from '../urls'
// http://localhost:8080/producers
// EXAMPLE: http://localhost:8080/producers/600d890d1a4d7a09c404308/wines

const initialState = {
  producers: [],
  errorMessage: ''
}

export const producers = createSlice({
  name: 'producers',
  initialState,
  reducers: {
    setProducers: (store, action) => {
      store.producers = action.payload
      console.log('action.payload: setProducersList', action.payload)
    },
    setErrorMessage: (store, action) => {
      const { errorMessage } = action.payload
      store.errorMessage = errorMessage
    }
  }
})

export const fetchProducersList = () => {
  return (dispatch) => {
    fetch(PRODUCERS_URL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error('Could not get producers')
      })
      .then((json) => {
        dispatch(producers.actions.setProducers(json))
        console.log(json)
      })
  }
}
