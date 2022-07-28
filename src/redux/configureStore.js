import { createStore, combineReducers, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
//! imp Redux middlewares
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

  export const ConfigureStore = () => {
    const store = createStore(
      rootReducer,
      composeWithDevTools(
        applyMiddleware(thunkMiddleware)
        // other store enhancers if any
      )
    );
    return store;
  };