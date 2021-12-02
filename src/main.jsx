import React from "react";
import ReactDOM from "react-dom";
// import App from "../components/app";
import { Provider } from "react-redux";
import initRedux from "./init-redux.es6";
import { Switch, Route, Link, IndexRoute } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { routes } from "./shared/sharedRoutes";
// import Cart from "../components/cart";
import { renderRoutes } from "react-router-config";
import { matchPath, RouterContext } from "react-router";

require("./style.css");

const initialState = JSON.parse(window.__SERIALIZED_STATE__);
const store = initRedux(initialState);

console.log("Data to hydrate with", initialState);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>{renderRoutes(routes)}</Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("react-content")
);
