import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import routes from "../../shared/sharedRoutes.js";
import HTML from "../../client/components/html";
import initRedux from "../../shared/redux/initRedux";

function flattenStaticFunction(matches, staticFuncName, store = {}, request) {
  let results = matches.map(({ match, route }) => {
    const component = route.component;
    if (component) {
      if (
        component.displayName &&
        component.displayName.toLowerCase().indexOf("connect") > -1
      ) {
        let parentComponent = component.WrappedComponent;
        if (parentComponent[staticFuncName]) {
          return parentComponent[staticFuncName](
            request.params[0],
            store,
            request
          );
        } else if (
          parentComponent.wrappedComponent &&
          parentComponent.wrappedComponent[staticFuncName]
        ) {
          return parentComponent.wrappedComponent[staticFuncName](
            request.params[0],
            store,
            request
          );
        }
      } else if (component[staticFuncName]) {
        return component[staticFuncName](request.params[0], store, request);
      }
    }

    return [];
  });

  results = results.reduce((flat, toFlatten) => {
    return flat.concat(toFlatten);
  }, []);
  return results;
}

export default function renderView(parameters) {
  return function (req, res, next) {
    const matches = matchRoutes(routes, req.path);
    const context = {};

    if (matches) {
      const store = initRedux();

      let actions = flattenStaticFunction(
        matches,
        "prefetchActions",
        null,
        req
      );

      actions = actions.reduce((flat, toFlatten) => {
        return flat.concat(toFlatten);
      }, []);

      const promises = actions.map((initialAction) => {
        return store.dispatch(initialAction());
      });

      Promise.all(promises).then(() => {
        const serverState = store.getState();
        const stringifiedServerState = JSON.stringify(serverState);

        const seoTags = flattenStaticFunction(
          matches,
          "createMetatags",
          serverState,
          req
        );

        const title = flattenStaticFunction(
          matches,
          "createTitle",
          serverState,
          req
        );

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
              title={title}
              metatags={seoTags}
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
