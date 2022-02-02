import * as actiontypes from "../actionTypes";

  const sort = {
    category:"All",
    order:"Default",
    date:"Default"
  }
export const sortReducer = ( state = sort, action) => {
  switch (action.type) {
    case actiontypes.SET_CATEGORY:
      return {category: action.payload}
      break;
    default:
      return state;
  }
}

