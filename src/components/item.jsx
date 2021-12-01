import React from "react";

const Item = (props) => {
  console.log("otem", props);
  return (
    <div className="item">
      <div className="ui tiny image">
        <img src={props.thumbnail} alt="cart" />
      </div>
      <div className="middle aligned content">{props.name}</div>
      <div className="right aligned content">${props.price}</div>
    </div>
  );
};

// Item.propTypes = {
//   name: React.PropTypes.string.isRequired,
//   price: React.PropTypes.number.isRequired,
//   thumbnail: React.PropTypes.string.isRequired,
// };

export default Item;
