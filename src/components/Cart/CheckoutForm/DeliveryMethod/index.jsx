import React, { Component } from "react";

import { Select, Dropdown, Icon, TextInput } from "react-materialize";

class DeliveryMethod extends Component {
  render() {
    const {
      setDeliveryMethod,
      deliveryMethod,
      validatedError,
      handleSetDeliveryMethod,
    } = this.props;

    return (
      <Select
        id="deliveryMethod"
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
        value={deliveryMethod}
        name="deliveryMethod"
        //   onClick={(e) => setDeliveryMethod("delivery method")}
        onChange={(e) => handleSetDeliveryMethod(e.target.value)}
      >
        <option
          value="Delivery"
          className="checkout-form--delivery-method--dropdown-delivery"
          //   onClick={(e) => handleSetDeliveryMethod(e)}
        >
          Delivery
        </option>
        <option
          value="Pick up"
          className="checkout-form--delivery-method--dropdown-pickup"
          //   onClick={(e) => handleSetDeliveryMethod(e)}
        >
          Pick Up
        </option>
      </Select>
    );
  }
}

export default DeliveryMethod;
