import React, { useState } from "react";
import "../../../assets/stylesheets/checkbox.css";
import { Icon } from "react-materialize";
import TextInput from "react-materialize/lib/TextInput";

const Checkbox = (props) => {
  const {
    product: { name },
  } = props;
  const [checked, setChecked] = useState("");

  const handleClick = (e) => {
    setChecked(!checked && "checked");
    props.handleFlavour(e);
  };

  return (
    <div className="box-option">
      {/* TODO if selected flavours contains flavour check box */}
      <label>
        <input
          type="checkbox"
          checked={checked}
          name={name}
          onClick={(e) => handleClick(e)}
        />
        <span>{name}</span>
      </label>
    </div>
  );
};

export default Checkbox;
