import React, { Component } from "react";
import { getCartItems } from "../action-creators.es6";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Cart extends Component {
  static prefetchActions() {
    return [getCartItems];
  }

  renderItems() {
    const components = [];
    const items = this.props.items;
    if (this.props.items) {
      this.props.items.forEach((item, index) => {
        components.push(<Item key={index} {...item} />);
      });
    }
    return items;
  }

  render() {
    console.log("this.props", this.props);
    return (
      <div className="cart main ui segment">
        <div className="ui segment divided items">Items will go here.</div>
        <div className="ui right rail">
          <div className="ui segment">
            <span>Total: </span>
            <span>$10</span>
            <div></div>
            <button className="ui positive basic button">Checkout</button>
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
