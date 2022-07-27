import * as actionTypes from '../actionTypes';
import { baseUrl } from '../../shared/baseUrl';

export const leadersLoading = () => ({
  //! pending
  type: actionTypes.LEADERS_LOADING,
});

export const leadersFailed = (errMess) => ({
  //! rejected
  type: actionTypes.LEADERS_FAILED,
  payload: errMess,
});

export const addLeaders = (leaders) => ({
  //! fulfilled
  type: actionTypes.ADD_LEADERS,
  payload: leaders,
});

export const fetchLeaders = () => (dispatch) => {
  dispatch(leadersLoading());
  return fetch(baseUrl + 'leaders')
    .then((res) => res.json())
    .then((leaders) => dispatch(addLeaders(leaders)))
    .catch((err) => dispatch(leadersFailed(err)));
};
