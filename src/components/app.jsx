import React from "react";
import Featured from "./featured";
import Recipes from "./recipes";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../action-creators";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="ui fixed inverted menu">
          <div className="ui contianer">
            <a href="/" className="header item">
              Recipes Example App
            </a>
          </div>
        </div>
        <div className="ui padded grid">
          {/* <Recipes {...this.props} />
          <Featured {...this.props.featuredRecipe} /> */}
        </div>
        <div className="ui inverted vertical footer segment">Footer</div>
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
