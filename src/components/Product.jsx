import React, { useEffect } from "react";
import nature from "../assets/nature.jpg";

const Product = (props) => {
  //  A unique situation, where you need
  // to update a part of the DOM that isn’t controlled by
  // React. The following listing shows you what to add.
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTMl =
      Product.createTitle(props);
  }, []);

  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTMl =
      Product.createTitle(props);
  }, [props]);

  return (
    <div>
      <p className="products">
        Please thanks for helping me i hope its all good
      </p>
      <img alt="product description" src={nature} className="products__image" />
    </div>
  );
};

Product.createMetatags = (params) => {
  const tags = [];

  tags.push({
    name: "description",
    content: "demo conent",
  });
  tags.push({
    property: "og:description",
    content: "demo description",
  });
  tags.push({
    property: "og:title",
    content: "demo title",
  });
  tags.push({
    property: "og:url",
    content: `http://localhost:3001/product`,
  });
  tags.push({
    property: "og:image",
    content: "demo image",
  });

  return tags;
};

Product.createTitle = (props) => {
  //here name will come from porops
  return `A product - Demo Site`;
};

function fetchProduct() {
  return console.log("sup");
}

// Product.prefetchActions = () => {
//   return [fetchProduct];
// };

export default Product;
