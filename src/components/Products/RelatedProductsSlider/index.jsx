import React from "react";
import PRODUCTS from "../products";
import { withRouter } from "react-router-dom";

const RelatedProductsSlider = ({ product: { name }, width, height }) => {
  const image = PRODUCTS.filter(product => {
    return product.name === name && product.image;
  });
  return (
    <div className="related-product">
      <img src={image[0]["image"]} alt={name} width={width} height={height} />
      <strong>{name}</strong>
    </div>
  );
};

export default withRouter(RelatedProductsSlider);
