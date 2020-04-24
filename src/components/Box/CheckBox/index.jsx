import React, { useState } from "react";
import "../../../assets/stylesheets/checkbox.css";

const Checkbox = (props) => {
  const {
    product: { name },
    classId,
  } = props;
  const [checked, setChecked] = useState("");

  const handleClick = (e) => {
    setChecked(!checked && "checked");
    props.handleFlavour(e);
  };

  return (
    <div className={`box-option ${classId}`}>
      {/* TODO if selected flavours contains flavour check box */}
      <label>
        <input
          type="checkbox"
          checked={checked}
          name={name}
          onChange={(e) => handleClick(e)}
        />
        <span>{name}</span>
      </label>
    </div>
  );
};

export default Checkbox;
