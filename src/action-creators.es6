import fetch from "isomorphic-fetch";

export const GET_RECIPES = "GET_RECIPES";
export const GET_FEATURED_RECIPE = "GET_FEATURED_RECIPE";

export function fetchRecipes() {
  return (dispatch) => {
    return fetch("http://localhost:3000/recipes", {
      method: "GET",
    })
      .then((response) => {
        return response.json().then((data) => {
          return dispatch({
            type: GET_RECIPES,
            data: data.recipes,
          });
        });
      })
      .catch((e) => {
        console.log("error", e);
      });
  };
}

export function fetchFeaturedRecipe() {
  return (dispatch) => {
    return fetch("http://localhost:3000/featured", {
      method: "GET",
    })
      .then((response) => {
        return response.json().then((data) => {
          return dispatch({
            type: GET_FEATURED_RECIPE,
            data: data.recipe,
          });
        });
      })
      .catch((e) => {
        console.log("error", e);
      });
  };
}

export function getHomePageData() {
  return (dispatch, getState) => {
    return Promise.all([
      dispatch(fetchFeaturedRecipe()),
      dispatch(fetchRecipes()),
    ]);
  };
}

export const GET_CART_ITEMS = "GET_CART_ITEMS";

export function getCartItems() {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/user/cart", {
      method: "GET",
    }).then((response) => {
      console.log("GET_CART_ITEMS", response);
      return response.json().then((data) => {
        return dispatch({
          type: GET_CART_ITEMS,
          data: data.items,
        });
      });
    });
  };
}
