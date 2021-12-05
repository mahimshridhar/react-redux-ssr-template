import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <Link to="/products" className="item">
            Products
          </Link>
          <Link to="/cart" className="item">
            Cart
          </Link>
          <Link to="/profile" className="item">
            Profile
          </Link>
        </ul>
      </div>
    </nav>
  );
};
