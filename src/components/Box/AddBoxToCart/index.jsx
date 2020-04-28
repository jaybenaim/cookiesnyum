import React, { useState } from "react";
import Quantity from "../../Gallery/Item/Quantity";
import "../../../assets/stylesheets/addBoxToCart.css";

const AddBoxToCart = ({ product: { _id: id } }) => {
  const [qty, setQty] = useState(1);

  const handleQty = (action) => {
    action === "decrease" && qty >= 1 && setQty(qty - 1);
    action === "increase" && setQty(qty + 1);
  };
  const handleQtyChange = (e) => {
    e.preventDefault();
    setQty(Number(e.target.value));
  };

  return (
    <Quantity
      id={id}
      qtyLabel={qty}
      handleQty={handleQty}
      handleQtyChange={handleQtyChange}
    />
  );
};

export default AddBoxToCart;
