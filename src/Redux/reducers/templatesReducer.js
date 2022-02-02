import * as actiontypes from "../actionTypes";

export const templates = ( state = [], action) => {
  switch (action.type) {
    case actiontypes.FETCH_TEMPLATES:
      return action.payload;
      break;
      case actiontypes.SORT_BY_SEARCH:
        if(action.payload === ''){
          return state.filter(template => template);
        }
        return state.filter(template => template.name.toLowerCase().includes(action.payload.toLowerCase()));
        break;
      case actiontypes.SORT_BY_CATEGORY:
        return state.filter(template => template.category.includes(action.payload));
        break;
      case actiontypes.SORT_BY_ORDER_ASCENDING:
        return state.slice().sort((a, b) => a.name.localeCompare(b.name)
        );
        break;
      case actiontypes.SORT_BY_ORDER_DESENDING:
        return state.slice().sort((a, b) => b.name.localeCompare(a.name));
      break;
      case actiontypes.SORT_BY_DATE_ASCENDING:
        return state.slice().sort((a, b) => a.created.localeCompare(b.created));
      break;
      case actiontypes.SORT_BY_DATE_DESENDING:
        return state.slice().sort((a, b) => b.created.localeCompare(a.created));
      break;
      case actiontypes.SORT_BY_DEFAULT:
        return state
      break;
    default:
      return state;
  }
}

