import React, { Component } from "react";

import { Select } from "react-materialize";

class DeliveryMethod extends Component {
  render() {
    const { deliveryMethod, handleSetDeliveryMethod } = this.props;

    return (
      <Select
        id="deliveryMethod"
        label="Delivery Method"
        value={deliveryMethod}
        name="deliveryMethod"
        multiple={false}
        options={{
          classes: `validate `,
          dropdownOptions: {
            alignment: "left",
            autoTrigger: false,
            closeOnClick: true,
            constrainWidth: true,
            coverTrigger: true,
            hover: false,
          },
        }}
        onChange={(e) => handleSetDeliveryMethod(e.target.value)}
      >
        <option
          value="Delivery"
          className="checkout-form--delivery-method--dropdown-delivery"
        >
          Delivery
        </option>
        <option
          value="Pick up"
          className="checkout-form--delivery-method--dropdown-pickup"
        >
          Pick Up
        </option>
      </Select>
    );
  }
}

export default DeliveryMethod;
