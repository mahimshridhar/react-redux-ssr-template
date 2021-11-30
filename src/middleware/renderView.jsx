import React from "react";
import ReactDOM from "react-dom/server";
import { Provider } from "react-redux";
import initRedux from "../init-redux";
import * as actions from "../action-creators";
import HTML from "../components/html";
import App from "../components/app";
import {
  StaticRouter,
  Switch,
  Route,
  Link,
  IndexRoute,
} from "react-router-dom";

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
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
}
