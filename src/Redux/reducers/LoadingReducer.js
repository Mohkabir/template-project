import * as actiontypes from "../actionTypes";

export const loadingReducer = ( state = false, action) => {
  switch (action.type) {
    case actiontypes.SET_LOADING:
      return  action.payload;
      break;
    default:
      return state;
  }
}

