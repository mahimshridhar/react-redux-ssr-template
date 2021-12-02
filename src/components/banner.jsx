import React from "react";

class Banner extends React.Component {
  handleDismissBanner() {
    // will do something
  }
  render() {
    return (
      <div className="banner">
        <div className="dismiss">
          <button className="btn-reset" onClick={this.handleDismissBanner}>
            X
          </button>
        </div>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}
