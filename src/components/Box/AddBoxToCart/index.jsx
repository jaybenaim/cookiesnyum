import React, { useState } from "react";
import Quantity from "../../Gallery/Item/Quantity";

const AddBoxToCart = ({ form, product: { _id: id }, product }) => {
  const [qty, setQty] = useState(1);

  const handleQty = (action) => {
    action === "decrease" && qty >= 1 && setQty(qty - 1);
    action === "increase" && setQty(qty + 1);
  };
  const handleQtyChange = (e) => {
    e.preventDefault();
    setQty(Number(e.target.value));
  };
  const handleForm = () => {
    return { form, product };
  };

  return (
    //   TODO : add AddToCart btn
    // add handle increase / decrease
    <Quantity
      id={id}
      qtyLabel={qty}
      handleQty={handleQty}
      handleQtyChange={handleQtyChange}
    />
    // <Quantity product={handleForm()} label={"none"} />
  );
};

export default AddBoxToCart;
