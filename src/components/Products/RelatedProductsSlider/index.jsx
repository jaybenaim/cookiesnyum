import React from "react";

const RelatedProductsSlider = ({
  product: { _id, name, image },
  width,
  height
}) => {
  return (
    <div className="related-product">
      <img src={image} alt={name} width={width} height={height} />
      <strong>{name}</strong>
    </div>
  );
};

export default RelatedProductsSlider;
