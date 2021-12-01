import Cart from "../components/cart";
import App from "../components/app";

const routes = [
  {
    path: "/",
    component: App,
    exact: true,
  },
  {
    path: "/cart",
    component: Cart,

    exact: true,
  },
];
export { routes };
