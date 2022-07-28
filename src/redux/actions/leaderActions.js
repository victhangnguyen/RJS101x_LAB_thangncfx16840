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
    .then((leaders) => dispatch(addLeaders(leaders)))
    .catch((error) => dispatch(leadersFailed(error.message)));
};
