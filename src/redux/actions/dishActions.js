import * as actionTypes from '../actionTypes';
import { baseUrl } from '../../shared/baseUrl';

//! redux-thunk

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

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading());
  return fetch(baseUrl + 'dishes')
    .then((res) => res.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((err) => dispatch(dishesFailded(err)));
};
