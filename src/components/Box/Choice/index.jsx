import React from "react";
import { Select } from "react-materialize";

const Choice = (props) => {
  return (
    <Select
      id="flavourChoice"
      label="flavourChoice"
      name="flavourChoice"
      multiple={true}
      options={{
        classes: `validate `,
        dropdownOptions: {
          alignment: "left",
          autoTrigger: false,
          closeOnClick: false,
          constrainWidth: true,
          coverTrigger: true,
          hover: false,
        },
      }}
      onChange={(e) => props.handleFlavour(e)}
    >
      <option value={"new"} className="box-option1">
        {name}
      </option>
      <option value={"old"} className="box-option2">
        {name}
      </option>
    </Select>
  );
};

export default Choice;
