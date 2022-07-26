import { LEADERS } from '../../shared/leaders';

export const leadersReducer = (state = LEADERS, action) => {
  switch (action.type) {
    case 'value':
      break;

    default:
      return state;
  }
};
