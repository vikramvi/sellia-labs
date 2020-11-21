import React, { useReducer } from 'react';
import { setUrl } from '../helpers/urlHandler';
import { getUrlToState } from '../helpers/urlHandler';

const userLocation =
  process.browser && localStorage.getItem('currentLocation') !== null
    ? JSON.parse(localStorage.getItem('currentLocation'))
    : null;

export const initialState = {
  categories: [],
  text: '',
  price: 0,
  isNegotiable: false,
  condition: false,
  address: '',
  location: userLocation ? userLocation : { lat: 40.706877, lng: -74.011265 },
  radius: 0,
  page: 1,
  limit: 8,
  sorting: {
    field: 'distance',
    type: 'asc',
  },
};

const urlState = getUrlToState();

const urlInitialState = Object.keys(urlState).length
  ? { ...initialState, ...urlState }
  : initialState;

function reducer(state, action) {
  switch (action.type) {
    case 'RESET':
      setUrl(initialState);
      return urlInitialState;
    case 'UPDATE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
export const SearchContext = React.createContext({});

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, urlInitialState);
  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
