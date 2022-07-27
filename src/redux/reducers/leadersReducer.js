import * as actionTypes from '../actionTypes';

const initialState = {
  isLoading: true,
  errMess: null,
  leaders: [],
};

export const leadersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LEADERS_LOADING: //! pending
      return {
        ...state,
        isLoading: true,
        errMess: null,
        leaders: [],
      };
    case actionTypes.LEADERS_FAILED: //! rejected
      const errMess = action.payload;
      return {
        ...state,
        isLoading: false,
        errMess: errMess,
        leaders: [],
      };
    case actionTypes.ADD_LEADERS: //!fulfilled
      const leaders = action.payload;
      return {
        ...state,
        isLoading: false,
        errMess: null,
        leaders: leaders,
      };
    default:
      return state;
  }
};
