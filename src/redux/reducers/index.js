  import { combineReducers } from 'redux';
  import { commentsReducer } from '../reducers/commentsReducer';
  import { dishesReducer } from '../reducers/dishesReducer';
  import { leadersReducer } from '../reducers/leadersReducer';
  import { promotionsReducer } from '../reducers/promotionsReducer';

  const rootReducer = combineReducers({
    comments: commentsReducer,
    dishes: dishesReducer,
    leaders: leadersReducer,
    promotions: promotionsReducer,
  });

  export default rootReducer;
