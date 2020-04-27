import React from "react";
import { Select } from "react-materialize";

const SconeDropdown = (props) => {
  const { box } = props;

  return (
    <Select
      id="box"
      label="Select Box"
      value={box}
      name="box"
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
      onChange={(e) => props.handleChange(e)}
    >
      <option value="basic" className="basic">
        Basic (8 Scones)
      </option>
      <option value="premium" className="premium">
        Premium (12 Scones)
      </option>
      <option value="luxury" className="luxury">
        Luxury (24 Scones)
      </option>
    </Select>
  );
};

export default SconeDropdown;
