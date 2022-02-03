import * as actiontypes from "../actionTypes";

const initial = { 
  allTemplates: [],
  searchedTemplates: '',
  defaultTemplates: []
}
export const templates = ( state = initial, action) => {
  switch (action.type) {
    case actiontypes.FETCH_TEMPLATES:
      return {...state, allTemplates: action.payload, defaultTemplates: action.payload};
      break;
      case actiontypes.SORT_BY_SEARCH:
        return {...state, searchedTemplates: action.payload};
        break;
      case actiontypes.SORT_BY_CATEGORY:
        return {...state, allTemplates: state.allTemplates.filter(template => template.category.includes(action.payload))};
        break;
      case actiontypes.SORT_BY_ORDER_ASCENDING:
        return {...state, allTemplates: state.allTemplates.slice().sort((a, b) => a.name.localeCompare(b.name))};
  
        break;
      case actiontypes.SORT_BY_ORDER_DESENDING:
        return {...state, allTemplates: state.allTemplates.slice().sort((a, b) => b.name.localeCompare(a.name))};
      break;
      case actiontypes.SORT_BY_DATE_ASCENDING:
        return {...state, allTemplates: state.allTemplates.slice().sort((a, b) => a.created.localeCompare(b.created))};
        
      break;
      case actiontypes.SORT_BY_DATE_DESENDING:
        return {...state, allTemplates: state.allTemplates.slice().sort((a, b) => b.created.localeCompare(a.created))};
      break;
      case actiontypes.SORT_BY_DEFAULT:
        return {...state, allTemplates: state.defaultTemplates};
      break;
    default:
      return state;
  }
}

