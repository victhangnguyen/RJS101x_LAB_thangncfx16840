import * as actionTypes from '../actionTypes';
import { DISHES } from '../../shared/dishes.js';

//! redux-thunk
export const fetchDishes = () => (dispatch, getState) => {
  console.log('getState(): ', getState());
  dispatch(dishesLoading(true));
  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 2000);
};

export const dishesLoading = () => ({
  type: actionTypes.DISHES_LOADING,
});

export const dishesFailded = (errMess) => ({
  type: actionTypes.DISHES_FAILED,
  payload: errMess,
});

export const addDishes = (dishes) => ({
  type: actionTypes.ADD_DISHES,
  payload: dishes,
});
