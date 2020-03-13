import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./Modules/App/appReducer";

export const store = createStore(
  combineReducers({ appReducer: appReducer }),
  applyMiddleware(thunk)
);
