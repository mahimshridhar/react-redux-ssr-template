import React from "react";

const Item = (props) => {
  return (
    // <div className="item">
    //   <div className="ui tiny image">
    //     <img src={props.thumbnail} alt="cart" />
    //   </div>
    //   <div className="middle aligned content">{props.name}</div>
    //   <div className="right aligned content">${props.price}</div>
    // </div>
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src="images/sample-1.jpg" />
            <span className="card-title">{props.name}</span>
          </div>
          <div className="card-content">
            <p>{props.price}</p>
          </div>
          <div className="card-action">
            {/* <a href="#">This is a link</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

// Item.propTypes = {
//   name: React.PropTypes.string.isRequired,
//   price: React.PropTypes.number.isRequired,
//   thumbnail: React.PropTypes.string.isRequired,
// };

export default Item;
