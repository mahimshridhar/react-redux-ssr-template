import { GET_RECIPES, GET_FEATURED_RECIPE } from "./action-creators.es6";

export default function recipes(state = {}, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.data,
      };
    case GET_FEATURED_RECIPE:
      return {
        ...state,
        featuredRecipe: action.data,
      };

    default:
      return state;
  }
}
