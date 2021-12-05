import App from "../components/app";
import Cart from "../components/cart";
import Products from "../components/Product";
import Profile from "../components/profile";
import Login from "../components/login";

const routes = [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: Products,
      },
      {
        path: "/cart",
        component: Cart,
      },
      {
        path: "/products",
        component: Products,
      },
      {
        path: "/profile",
        component: Profile,
      },
      {
        path: "/login",
        component: Login,
      },
    ],
  },
];

// if (process.env.NODE_ENV !== "production") {
//   routes[0].routes.push({
//     path: "/dev-test",
//     component: Products,
//   });
// }

export default routes;
