import React from "react";
import { Link } from "@material-ui/core";

const RelatedProductsSlider = ({
  product: { _id, name, image },
  width,
  height
}) => {
  return (
    <div className="related-product">
      <Link to={`/products/${_id}`}>
        <img src={image} alt={name} width={width} height={height} />
        <strong>{name}</strong>
      </Link>
    </div>
  );
};

export default RelatedProductsSlider;
