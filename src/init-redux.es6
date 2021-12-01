import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import recipes from "./recipe-reducer";
import cart from "./cart-reducer.es6";

import loggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";

export default function (initialState = {}) {
  const reducer = combineReducers({
    recipes,
    cart: cart,
  });

  let middleware = [thunkMiddleware];

  const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );

  return store;
}
