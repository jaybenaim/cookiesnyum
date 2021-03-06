import React, { Component } from "react";

import { Select } from "react-materialize";

class PaymentMethod extends Component {
  render() {
    const { paymentMethod, handleSetPaymentMethod } = this.props;

    return (
      <Select
        id="paymentMethod"
        label="Payment Method"
        name="paymentMethod"
        value={paymentMethod}
        multiple={false}
        options={{
          dropdownOptions: {
            alignment: "left",
            autoTrigger: false,
            closeOnClick: true,
            constrainWidth: true,
            coverTrigger: true,
            hover: false,
          },
        }}
        onChange={(e) => handleSetPaymentMethod(e.target.value)}
      >
        <option
          value="Cash"
          className="checkout-form--payment-method--dropdown-payment"
        >
          Cash
        </option>
        <option
          value="E-Transfer"
          className="checkout-form--payment-method--dropdown-pickup"
        >
          E-Transfer
        </option>
      </Select>
    );
  }
}

export default PaymentMethod;
