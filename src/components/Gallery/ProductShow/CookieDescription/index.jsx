import React from "react";

const CookieDescription = (props) => {
  const {
    item,
    description,
    description: { dough, mixin, stuffing, topping },
  } = props;
  const itemIsCookie = item.sku.includes("cookie");
  const getOtherDescription = () => {
    return <li>{description.default}</li>;
  };
  return (
    <div className="product-description">
      <ul>
        {!itemIsCookie ? (
          getOtherDescription()
        ) : (
          <>
            <li>
              <strong>Dough: </strong>
              {dough || "N/A"}
            </li>
            <li>
              <strong>Mix - Ins: </strong> {mixin || "N/A"}
            </li>
            <li>
              <strong>Stuffing: </strong>
              {stuffing || "N/A"}
            </li>
            <li>
              <strong>Toppings: </strong> {topping || "N/A"}
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default CookieDescription;
