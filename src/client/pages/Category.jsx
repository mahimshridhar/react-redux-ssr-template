import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const Category = (props) => {
  console.log("props", props);
  //   console.log("children", children, route);
  const { match } = props;
  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/shoes`}>Shoes</Link>
        </li>
        <li>
          <Link to={`${match.url}/boots`}>Boots</Link>
        </li>
        <li>
          <Link to={`${match.url}/footwear`}>Footwear</Link>
        </li>
      </ul>

      {renderRoutes(props.route.routes, {
        someProp: "these extra props are optional",
      })}
    </div>
  );
};

export default Category;
