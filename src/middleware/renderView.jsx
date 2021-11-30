import React from "react";
import ReactDOM from "react-dom/server";
import { Provider } from "react-redux";
import initRedux from "../init-redux";
import * as actions from "../action-creators";
import HTML from "../components/html";
import App from "../components/app";
import { Switch, Route, Link, IndexRoute } from "react-router-dom";
import { StaticRouter } from "react-router-dom";

export default function renderView(req, res, next) {
  const store = initRedux();

  //   store.dispatch(actions.getHomePageData()).then(() => {
  //     let html;
  //     const dataToSerialize = store.getState();

  //     html = ReactDOM.renderToString(
  //       <Provider store={store}>
  //         <App />
  //       </Provider>
  //     );

  //     const renderedHTML = ReactDOM.renderToString(
  //       <HTML
  //         data={`window.__INITIAL_STATE =
  //           ${JSON.stringify(dataToSerialize)}`}
  //         html={html}
  //       />
  //     );

  //     res.send(renderedHTML);
  //   });

  const context = {};
  const markup = ReactDOM.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route
            path={"*"}
            render={({ staticContext }) => {
              if (staticContext) {
                staticContext.statusCode = 404;
              }
              return <div>WHATEVER</div>;
              // return <Redirect to="/404" />;
            }}
          />
        </Switch>
      </StaticRouter>
    </Provider>
  );

  const renderedHTML = ReactDOM.renderToString(
    <HTML
      data={`window.__INITIAL_STATE =
            ${JSON.stringify({})}`}
      html={markup}
    />
  );

  res.send(renderedHTML);
}
