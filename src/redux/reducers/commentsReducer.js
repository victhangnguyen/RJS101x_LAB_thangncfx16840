import { COMMENTS } from '../../shared/comments';

export const commentsReducer = (state = COMMENTS, action) => {
  switch (action.type) {
    case 'value':
      break;

    default:
      return state;
  }
};
