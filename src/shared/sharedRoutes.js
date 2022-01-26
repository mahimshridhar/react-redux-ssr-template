import App from "../client/app";
import Home from "../client/pages/Home";
import Category from "../client/pages/Category";
import Counter from "../client/pages/Counter";
import NoMatch from "../client/components/noMatch";
import Shoes from "../client/components/shoes";

const routes = [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
      },
      {
        path: "/category",
        component: Category,
        routes: [
          {
            path: "/category/shoes",
            component: Shoes,
          },
        ],
      },
      {
        path: "/counter",
        exact: true,
        component: Counter,
      },
      {
        component: NoMatch,
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
