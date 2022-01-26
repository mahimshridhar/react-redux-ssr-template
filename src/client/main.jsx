import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import initRedux from "../shared/redux/initRedux.js";
import { BrowserRouter } from "react-router-dom";
import routes from "../shared/sharedRoutes.js";
import { renderRoutes } from "react-router-config";

require("../styles/style.css");

const initialState = JSON.parse(window.__SERIALIZED_STATE__);
const store = initRedux(initialState);

// console.log("Data to hydrate with", initialState);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </Provider>,
  document.getElementById("react-content")
);

if (module.hot) {
  // module.hot.accept("", () => {
  //   // const nextApp = require("./containers/App").default;

  //   ReactDOM.hydrate(
  //     <Provider store={store}>
  //       <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  //     </Provider>,
  //     document.getElementById("react-content")
  //   );
  // });
  module.hot.accept();
}

// const render = (App) => {
//   ReactDOM.hydrate(<App />, document.getElementById("react-content"));
// };

// render(
//   // ReactDOM.hydrate(
//   <Provider store={store}>
//     <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
//   </Provider>
//   // document.getElementById("react-content")
//   // )
// );
