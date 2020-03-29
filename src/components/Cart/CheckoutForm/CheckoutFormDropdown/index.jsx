import React from "react";
import { Dropdown } from "react-materialize";
import { TextInput, Button, Icon } from "react-materialize/lib";

const CheckoutFormDropdown = ({ id, onChange: setDate }) => {
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
            <TextInput
              disabled="true"
              id={id}
              type="text"
              className="validate"
              label="Payment Method"
              onChange={e => setDate(e.target.value)}
            />

            <div class=" ">
              <Icon down-arrow className="down-arrow">
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
