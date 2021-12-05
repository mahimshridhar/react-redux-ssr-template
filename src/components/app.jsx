import React, { useEffect, Component } from "react";
import { Route, Link } from "react-router-dom";
import Cart from "./cart";
import { renderRoutes } from "react-router-config";
import onRouteChange from "./onRouteChange";
import { connect } from "react-redux";
import Nav from "./nav";

const App = (props) => {
  useEffect(() => {
    console.log("app ran in client");
  }, []);

  return (
    <div>
      {/* <div className="ui fixed inverted menu">
        <h1 className="header item">All Things Westies</h1>
        <Link to="/products" className="item">
          Products
        </Link>
        <Link to="/cart" className="item">
          Cart
        </Link>
        <Link to="/profile" className="item">
          Profile
        </Link>
      </div> */}
      <Nav />

      {renderRoutes(props.route.routes, { history: props.history })}
    </div>
  );
};

export default connect()(onRouteChange(App));
