import React from "react";
import Featured from "./featured";
import Recipes from "./recipes";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../action-creators";
import Banner from "../components/banner";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#"></a>
            </div>
          </div>
        </nav>
        <Banner show>
          <h3>Check out the semi-annual sale! Up to 75% off select Items</h3>
        </Banner>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  let { recipes, featuredRecipe } = state.recipes;

  return {
    recipes,
    featuredRecipe,
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);
