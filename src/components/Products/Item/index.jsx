import React from "react";
import AddCartButton from "../../Cart/AddCartButton";
import { formatPrice } from "../../../helpers/";
import "../../../assets/stylesheets/item.css";

const Item = ({ item, id, name, price, image, quantity, sku }) => {
  return (
    <div className=" item--card">
      <img
        className="item--card--img"
        src={image}
        alt={name}
        height={120}
        width={120}
      />
      <div className="item--card-body secondary-font">
        <h3 className="item--card-body--name">{name}</h3>
        <p className="item--card-body--description">Short Description</p>
        <p className="item--card-body--price">
          <strong> CAD</strong> {formatPrice(price, "CAD")}
        </p>
        <span className="item--card-body--add-to-cart-btn">
          <AddCartButton
            product={item}
            addLabel={"CAD " + formatPrice(price, "CAD")}
          />
        </span>
      </div>
    </div>
  );
};
export default Item;
