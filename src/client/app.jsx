import React, { useEffect, Component } from "react";
import { Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import onRouteChange from "./components/onRouteChange";
import { connect } from "react-redux";

const App = (props) => {
  useEffect(() => {
    console.log("app ran in client");
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/counter">counter</Link>
          </li>
        </ul>
      </nav>

      {renderRoutes(props.route.routes, { history: props.history })}
    </div>
  );
};

export default connect()(onRouteChange(App));
