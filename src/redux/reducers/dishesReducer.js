import { DISHES } from '../../shared/dishesReducer';

export const dishesReducer = (state = DISHES, action) => {
  //reducers: {}
  switch (
    action.type //! action.type = name/action (createSlice)
  ) {
    case 'value':
      break;

    default:
      return state;
  }
};
