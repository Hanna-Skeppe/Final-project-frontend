import { createSlice } from '@reduxjs/toolkit';
import { PRODUCERS } from '../urls';

const initialState = {
  producers: [],
  errorMessage: '',
};

export const producers = createSlice({
  name: 'producers',
  initialState,
  reducers: {
    setProducers: (state, action) => {
      return {
        ...state,
        producers: action.payload,
      };
    },
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload;
      return {
        ...state,
        errorMessage,
      };
    },
  },
});

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
