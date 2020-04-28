import React, { useState } from "react";
import "../../../assets/stylesheets/checkbox.css";
import { useEffect } from "react";
import AddBoxToCart from "../AddBoxToCart";

const Checkbox = (props) => {
  const {
    product: { name },
    classId,
    flavours,
    form,
    product,
  } = props;
  const [checked, setChecked] = useState("");

  const handleClick = (e) => {
    setChecked(!checked && "checked");
    props.handleFlavour(e);
  };
  useEffect(() => {
    flavours.length <= 0 && setChecked("");
  }, [flavours]);
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
      <div className="box--selected-flavour--qty">
        <AddBoxToCart product={product} />
      </div>
    </div>
  );
};

export default Checkbox;
