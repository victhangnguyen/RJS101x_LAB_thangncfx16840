import * as actionTypes from '../actionTypes';
import { baseUrl } from '../../shared/baseUrl';

//! pending
export const dishesLoading = () => ({
  type: actionTypes.DISHES_LOADING,
});

//! rejected
export const dishesFailded = (errMess) => ({
  type: actionTypes.DISHES_FAILED,
  payload: errMess,
});

//! fulfilled
export const addDishes = (dishes) => ({
  type: actionTypes.ADD_DISHES,
  payload: dishes,
});

//! thunk
export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading());
  return fetch(baseUrl + 'dishes')
    .then(
      //! this response is a fulfilled Promise, we need to throw this error
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            'Error ' + response.status + ': ' + response.statusText //! error.message
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        //! in this situation, when we dont hear back anything from the Server.
        let errMess = new Error(error.message); //! error.message
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((error) => dispatch(dishesFailded(error.message)));
};
