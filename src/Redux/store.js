
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducers } from "./reducers/combineReducers";

export const store = createStore(rootReducers, compose(applyMiddleware(thunk)));