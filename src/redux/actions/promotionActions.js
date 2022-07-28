import * as actionTypes from '../actionTypes';
import { baseUrl } from '../../shared/baseUrl';

export const promosLoading = () => ({
  //! pending
  type: actionTypes.PROMOS_LOADING,
});

export const promosFailded = (errMess) => ({
  //! rejected
  type: actionTypes.PROMOS_FAILED,
  payload: errMess,
});

export const addPromos = (promos) => ({
  //! fulfilled
  type: actionTypes.ADD_PROMOS,
  payload: promos,
});

export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading());
  return fetch(baseUrl + 'promotions')
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
    .then((res) => res.json())
    .then((promos) => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailded(error.message)));
};
