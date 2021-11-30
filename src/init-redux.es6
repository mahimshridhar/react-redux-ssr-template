import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import recipes from "./recipe-reducer";
import thunkMiddleware from "redux-thunk";

export default function (initialState = {}) {
  const reducer = combineReducers({
    recipes,
  });

  let middleware = [thunkMiddleware];

  const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );

  return store;
}
