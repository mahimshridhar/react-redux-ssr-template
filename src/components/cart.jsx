import React, { Component } from "react";
import { getCartItems } from "../action-creators.es6";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Item from "./item";

class Cart extends Component {
  static prefetchActions() {
    return [];
  }

  // static createMetatags(params, store) {
  //   const tags = [];
  //   const items = store.cart ? store.cart.items : null;

  //   if ()
  // }

  constructor(props) {
    super(props);
    this.proceedToCheckout = this.proceedToCheckout.bind(this);
  }

  getTotal() {
    let total = 0;
    const items = this.props.items;
    if (items) {
      total = items.reduce((prev, current) => {
        return prev + current.price;
      }, total);
    }
    return total;
  }

  proceedToCheckout() {
    console.log("clicked checkout button", this.props);
  }

  renderItems() {
    const components = [];
    const items = this.props.items;
    if (items) {
      items.forEach((item, index) => {
        components.push(<Item key={index} {...item} />);
      });
    }
    return components;
  }

  render() {
    return (
      <div className="cart main ui segment">
        <div className="ui segment divided items">{this.renderItems()}</div>
        <div className="ui right rail">
          <div className="ui segment">
            <span>Total: </span>
            <span>${this.getTotal()}</span>
            <div>Placeholder</div>
            <button
              onClick={this.proceedToCheckout}
              className="ui positive basic button"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { items } = state.cart;
  return {
    items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cartActions: bindActionCreators([getCartItems], dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
