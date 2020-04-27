import React from "react";
const SelectedFlavour = ({ flavour: { name, image } }) => {
  return (
    <li className="selected-flavour">
      <p>{name}</p>
      <img src={image} alt={name} height={100} width={100} />
    </li>
  );
};

export default SelectedFlavour;
