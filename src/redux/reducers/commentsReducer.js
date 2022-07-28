import * as actionTypes from '../actionTypes';

const initialState = {
  isLoading: true,
  errMess: null,
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      const comment = action.payload;
      // comment.id = state.comments.length;
      // comment.date = new Date().toISOString();
      return { ...state, comments: state.comments.concat(comment) };

    case actionTypes.ADD_COMMENTS:
      const comments = action.payload;
      return { ...state, isLoading: false, errMess: null, comments: comments };

    case actionTypes.COMMENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        comments: [],
      };
    default:
      return state;
  }
};
