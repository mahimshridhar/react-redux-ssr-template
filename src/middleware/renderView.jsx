import React from "react";
import { renderToString, renderToNodeStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import routes from "../shared/sharedRoutes2.es6";
import HTML from "../components/html";
import initRedux from "../init-redux";
// import cache from "../shared/cache.es6";

export default function renderView(parameters) {
  return function (req, res, next) {
    const matches = matchRoutes(routes, req.path);
    const context = {};

    if (matches) {
      // const cachedPage = cache.get(req.url);
      // if (cachedPage) {
      //   return res.send(cachedPage);
      // }

      const store = initRedux();
      let actions = [];
      matches.map(({ match, route }) => {
        const component = route.component;
        if (component) {
          if (
            component.displayName &&
            component.displayName.toLowerCase().indexOf("connect") > -1
          ) {
            let parentComponent = component.WrappedComponent;
            if (parentComponent.prefetchActions) {
              actions.push(parentComponent.prefetchActions());
            } else if (
              parentComponent.wrappedComponent &&
              parentComponent.wrappedComponent().prefetchActions
            ) {
              actions.push(
                parentComponent.wrappedComponent().prefetchActions()
              );
            }
          } else if (component.prefetchActions) {
            actions.push(component.prefetchActions());
          }
        }
      });
      actions = actions.reduce((flat, toFlatten) => {
        return flat.concat(toFlatten);
      }, []);

      const promises = actions.map((initialAction) => {
        return store.dispatch(initialAction());
      });
      Promise.all(promises).then(() => {
        const serverState = store.getState();
        const stringifiedServerState = JSON.stringify(serverState);
        const app = renderToString(
          <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
              {renderRoutes(routes)}
            </StaticRouter>
          </Provider>
        );

        if (!context.url) {
          const html = renderToString(
            <HTML
              assets={parameters}
              renderedToStringComponents={app}
              serverState={stringifiedServerState}
            />
          );
          // cache.set(req.url, `<!DOCTYPE html>${html}`);
          return res.send(`<!DOCTYPE html>${html}`);
        }
      });
    } else {
      next();
    }
  };
}
