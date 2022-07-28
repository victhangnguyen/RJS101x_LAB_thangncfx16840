import * as actionTypes from '../actionTypes';
import { baseUrl } from '../../shared/baseUrl';

export const commentsFailed = (errMess) => ({
  //! rejected
  type: actionTypes.COMMENTS_FAILED,
  payload: errMess,
});

export const addComment = (comment) => ({
  //! fulfilled
  type: actionTypes.ADD_COMMENT,
  payload: comment,
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
  const newComment = { dishId, rating, author, comment };
  newComment.date = new Date().toISOString();
  console.log('%cnewComment: ', 'color: blue; font-weight: bold', newComment); //! __DEBUG
  return fetch(baseUrl + 'comments', {
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  })
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
    .then((newComment) => dispatch(addComment(newComment)))
    .catch((error) => {
      console.log(
        '%cPost Conmment: ',
        'color: ; font-weight: bold',
        error.message
      ); //! __DEBUG
      alert('Your comment could not be posted\nError: ' + error.message);
    });
};

export const addComments = (comments) => ({
  type: actionTypes.ADD_COMMENTS,
  payload: comments,
});

export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + 'comments')
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
    .then((comments) => dispatch(addComments(comments)))
    .catch((error) => dispatch(commentsFailed(error.message)));
};
