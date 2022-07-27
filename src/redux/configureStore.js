  import { createStore, combineReducers, applyMiddleware } from 'redux';
  import rootReducer from './reducers';
  import { composeWithDevTools } from 'redux-devtools-extension';

  export const ConfigureStore = () => {
    const store = createStore(
      rootReducer,
      composeWithDevTools(
        applyMiddleware()
        // other store enhancers if any
      )
      );
    return store;
  };
