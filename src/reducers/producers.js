import { createSlice } from '@reduxjs/toolkit';
import { PRODUCERS } from '../urls';

const initialState = {
  producers: [],
  errorMessage: '',
};

// TODO: ändra namn till producersSlice
export const producers = createSlice({
  name: 'producers',
  initialState,
  reducers: {
    setProducers: (state, action) => {
      // Returnera en ny state-objekt istället för att modifiera state direkt
      return {
        ...state,
        producers: action.payload,
      };
    },
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload;
      // Returnera en ny state-objekt istället för att modifiera state direkt
      return {
        ...state,
        errorMessage,
      };
    },
  },
});

// Exportera actions och reducer
export const { setProducers, setErrorMessage } = producers.actions;
export const producersReducer = producers.reducer;

export const fetchProducersList = () => {
  return (dispatch) => {
    fetch(PRODUCERS, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Could not get producers');
      })
      .then((json) => {
        dispatch(setProducers(json));
      });
  };
};
