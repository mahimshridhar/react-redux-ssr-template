import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  IndexRoute,
} from "react-router-dom";

export const routes = (onChange = () => {}) => {
  return (
    <Route path="/" component={App} onChange={onChange}>
      <IndexRoute component={() => <p>hello there</p>} />
      {/* <Route path="cart" component={Cart} />
      <Route path="cart/payment" component={Payment} />
      <Route path="products" component={Products} />
      <Route path="profile" component={Profile} />
      <Route path="login" component={Login} /> */}
    </Route>
  );
};
