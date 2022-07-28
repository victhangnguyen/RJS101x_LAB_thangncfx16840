import * as actionTypes from '../actionTypes';

const initialState = {
  isLoading: true,
  errMess: null,
  promotions: [],
};

export const promotionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PROMOS_LOADING: //! pending
      return {
        ...state,
        isLoading: true,
        errMess: null,
        promotions: [],
      };
    case actionTypes.PROMOS_FAILED: // rejected
      const errMess = action.payload;
      return {
        ...state,
        isLoading: false,
        errMess: errMess,
        promotions: [],
      };

    case actionTypes.ADD_PROMOS: //! fulfilled
      const promotions = action.payload;
      return {
        ...state,
        isLoading: false,
        errMess: null,
        promotions: promotions,
      };

    default:
      return state;
  }
};
