import { COMMENTS } from '../../shared/comments';
import * as actionTypes from '../actionTypes';

export const commentsReducer = (state = COMMENTS, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      const comment = action.payload;
      comment.id = state.length;
      comment.date = new Date().toISOString();

      //! return nextState (immutation)
      return state.concat(comment);

    default:
      return state;
  }
};
