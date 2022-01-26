import React, { Component } from "react";
import { increment, decrement } from "../../shared/redux/actionCreators.js";
import { connect } from "react-redux";

class Counter extends Component {
  static prefetchActions() {
    return [];
  }

  constructor(props) {
    super(props);
  }
  render() {
    const { dispatch, counter, decrement, increment } = this.props;
    return (
      <div>
        counter: {counter}
        <div>
          <button onClick={() => increment()}>increment</button>
          <button onClick={() => decrement()}>decrement</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
