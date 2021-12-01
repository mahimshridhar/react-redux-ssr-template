import React, { Component } from "react";
import { getCartItems } from "../action-creators.es6";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Item from "./item";

class Cart extends Component {
  static prefetchActions() {
    return [getCartItems];
  }

  constructor(props) {
    super(props);
    this.proceedToCheckout = this.proceedToCheckout.bind(this);
  }

  proceedToCheckout() {
    this.props.router.push("/cart/payment");
  }

  getTotal() {
    let total = 0;
    if (this.props.items) {
      total = this.props.items.reduce((prev, current) => {
        return prev + current.price;
      }, total);
    }
    return total;
  }

  renderItems() {
    const components = [];
    const items = this.props.items;
    if (this.props.items) {
      this.props.items.forEach((item, index) => {
        components.push(<Item key={index} {...item} />);
      });
    }

    // console.log("this.props.items", this.props.items);

    // return items;
  }

  render() {
    // console.log("this.props", this.props);
    return (
      <div className="cart main ui segment">
        <div className="ui segment divided items">
          {this.props.items.map((item, index) => {
            return <Item key={index} {...item} />;
          })}
        </div>
        <div className="ui right rail">
          <div className="ui segment">
            <span>Total: </span>
            <span>${this.getTotal()}</span>
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
  return { items };
}

function mapDispatchToProps(dispatch) {
  return {
    cartActions: bindActionCreators([getCartItems], dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

// export default Cart;
