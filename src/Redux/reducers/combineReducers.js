import { combineReducers } from "redux";
import { templates } from "./templatesReducer";
import { sortReducer } from "./SortReducer";
import { loadingReducer } from './LoadingReducer';
import { errorReducer } from './ErrorReducer';

export const rootReducers = combineReducers({
  templates,
  sortReducer,
  loadingReducer,
  errorReducer,
});