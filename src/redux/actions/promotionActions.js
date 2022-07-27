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
    .then((res) => res.json())
    .then((promos) => dispatch(addPromos(promos)));
};
