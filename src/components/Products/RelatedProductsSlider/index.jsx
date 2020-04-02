import React from "react";
import { Link } from "@material-ui/core";

const RelatedProductsSlider = ({
  product: { id, name, image },
  width,
  height
}) => {
  return (
    <div className="related-product">
      <Link to={{ pathname: `/products/${id}` }}>
        <img src={image} alt={name} width={width} height={height} />
      </Link>
    </div>
  );
};

export default RelatedProductsSlider;
