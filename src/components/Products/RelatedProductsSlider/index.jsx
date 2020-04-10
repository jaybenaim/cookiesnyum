import React from "react";
import PRODUCTS from "../products";
import { withRouter } from "react-router-dom";

const RelatedProductsSlider = ({ product: { name }, width, height }) => {
  const getImage = PRODUCTS.filter((product) => {
    return product.name === name && product.image;
  });
  const image = getImage.length >= 1 ? getImage[0]["image"] : "";

  return (
    <div className="related-product">
      <img src={image} alt={name} width={width} height={height} />
      <strong className="primary-font">{name}</strong>
    </div>
  );
};

export default withRouter(RelatedProductsSlider);
