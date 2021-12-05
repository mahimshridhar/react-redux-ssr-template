import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import initRedux from "./init-redux.es6";
import { BrowserRouter } from "react-router-dom";
import routes from "./shared/sharedRoutes2.es6";
import { renderRoutes } from "react-router-config";

// require("./style.css");

const initialState = JSON.parse(window.__SERIALIZED_STATE__);
const store = initRedux(initialState);

// console.log("Data to hydrate with", initialState);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </Provider>,
  document.getElementById("react-content")
);
