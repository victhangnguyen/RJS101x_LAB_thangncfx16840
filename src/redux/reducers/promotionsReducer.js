import { PROMOTIONS } from '../../shared/promotions';

export const promotionsReducer = (state = PROMOTIONS, action) => {
  switch (action.type) {
    case 'value':
      break;

    default:
      return state;
  }
};
