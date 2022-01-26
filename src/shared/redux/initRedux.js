import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import counterReducer from "./counterReducer.js";
import loggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";

export default function (initialState = {}) {
  const reducer = combineReducers({
    counter: counterReducer,
  });

  let middleware = [loggerMiddleware, thunkMiddleware];

  const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );

  return store;
}
