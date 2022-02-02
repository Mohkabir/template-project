import * as actiontypes from "../actionTypes";

export const errorReducer = ( state = '', action) => {
  switch (action.type) {
    case actiontypes.SET_ERROR:
      return  action.payload;
      break;
    default:
      return state;
  }
}

