// @deprecated
// We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.
// Redux Toolkit is our recommended approach for writing Redux logic today, including store setup, reducers, data fetching, and more.

import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

export const ConfigureStore = () => {
  const store = createStore(Reducer);
  return store;
};
