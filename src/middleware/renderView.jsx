import React from "react";
import ReactDOM from "react-dom/server";
import { Provider } from "react-redux";
import initRedux from "../init-redux";
import * as actions from "../action-creators";
import HTML from "../components/html";
import App from "../components/app";
import { Switch, Route, Link, IndexRoute } from "react-router-dom";
import { StaticRouter } from "react-router-dom";
import { routes } from "../shared/sharedRoutes";
import Cart from "../components/cart";
import { renderRoutes } from "react-router-config";
import { matchPath, RouterContext } from "react-router";

export default function renderView(req, res, next) {
  try {
    const store = initRedux();

    const activeRoute =
      routes.find((route) => matchPath(route.path, req.url)) || {};

    if (activeRoute.component && activeRoute.component.prefetchActions) {
      let actions = activeRoute.component.prefetchActions() || [];

      actions = actions.reduce((flat, toFlatten) => {
        return flat.concat(toFlatten);
      }, []);

      const promises = actions.map((initialAction) => {
        return store.dispatch(initialAction());
      });

      Promise.all(promises)
        .then(() => {
          const serverState = store.getState();

          console.log("serverState", serverState);

          const context = {};
          const markup = ReactDOM.renderToString(
            <Provider store={store}>
              <StaticRouter location={req.url} context={context}>
                <Switch>{renderRoutes(routes)}</Switch>
              </StaticRouter>
            </Provider>
          );
          const renderedHTML = ReactDOM.renderToString(
            <HTML
              data={`window.__INITIAL_STATE =${JSON.stringify({})}`}
              renderedToStringComponents={markup}
            />
          );
          res.send(`<!DOCTYPE html>${renderedHTML}`);
        })
        .catch((err) => {
          console.log("err", err);
          // res.send(`<!DOCTYPE html>${err}`);
        });
    } else {
      next();
    }
  } catch (err) {
    console.log("error", err);
    next();
  }
}
