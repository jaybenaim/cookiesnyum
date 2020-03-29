import React from "react";
import { Dropdown } from "react-materialize";
import { TextInput, Button, Icon } from "react-materialize/lib";

const CheckoutFormDropdown = () => {
  return (
    <Dropdown
      id="Dropdown_5"
      options={{
        alignment: "center",
        autoTrigger: true,
        closeOnClick: true,
        constrainWidth: true,
        container: null,
        coverTrigger: true,
        inDuration: 150,
        outDuration: 250
      }}
      trigger={
        <div className="row">
          <div class="input-field col s4">
            <input
              disabled
              id="paymentMethod"
              type="text"
              className="validate"
              name="paymentMethod"
              value="Choose a method"
            />
            <label htmlFor="paymentMethod">Payment Method</label>
            <div class=" ">
              <Icon down-arrow className={"down-arrow"}>
                arrow_downward
              </Icon>
            </div>
          </div>
        </div>
      }
    >
      <a>E-transfer</a>
      <a>Cash</a>
    </Dropdown>
  );
};

export default CheckoutFormDropdown;
