import * as actionTypes from '../actionTypes';
import { baseUrl } from '../../shared/baseUrl';

export const commentsFailed = (errMess) => ({
  //! rejected
  type: actionTypes.COMMENTS_FAILED,
  payload: errMess,
});

export const addComment = (dishId, rating, author, comment) => ({
  //! fulfilled
  type: actionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

export const addComments = (comments) => ({
  type: actionTypes.ADD_COMMENTS,
  payload: comments,
});


export const fetchComments = (dispatch) => {
  return fetch(baseUrl + 'comments')
    .then((res) => res.json())
    .then((comments) => dispatch(addComments(comments)));
};