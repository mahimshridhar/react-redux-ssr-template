import React from "react";
// import classNames from "classnames";

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleDismissBanner = this.handleDismissBanner.bind(this);
  }

  handleDismissBanner() {
    document.cookie = "showBanner=false";
    this.setState({
      show: false,
    });
  }

  componentDidMount() {
    const cookies = document.cookie;
    const hideBanner = cookies.match("showBanner=false");

    if (!hideBanner) {
      this.setState({
        show: true,
      });
    }
  }
  render() {
    // const bannerClasses = classNames({ show: this.state.show }, "banner");
    return (
      <div
        style={{
          display: this.state.show ? "block" : "none",
        }}
      >
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
