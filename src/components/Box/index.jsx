import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { filterGallery } from "../../redux/actions/galleryActions";
import BoxForm from "./BoxForm";
import { Item } from "../../components";
import Checkbox from "./CheckBox";
import Choice from "./Choice";

import "../../assets/stylesheets/box.css";

const Box = (props) => {
  const { filter, products } = props;
  const [box, setBox] = useState("basic");
  const [flavours, setFlavours] = useState([]);
  const handleChange = (e) => {
    setBox(e.target.value);
  };

  const handleFlavour = (e) => {
    const value = flavours.includes(e.target.name);

    !value && setFlavours([...flavours, e.target.name]);
    if (value) {
      const updatedFlavours = flavours.filter(
        (flavour) => flavour !== e.target.name
      );
      setFlavours(updatedFlavours);
    }
  };

  const displaySelectedFlavours = () => {
    return flavours.map((flavour) => <li>{flavour}</li>);
  };
  const getProducts = () => {
    switch (box) {
      case "basic":
        let basicCookies = products.filter((p) => p.price === 2.85);
        return basicCookies.map((p) => (
          <Checkbox product={p} handleFlavour={handleFlavour} />
        ));
      case "premium":
        let premiumCookies = products.filter((p) => p.price === 3.35);
        return premiumCookies.map((p) => (
          <Checkbox product={p} handleFlavour={handleFlavour} />
        ));
      case "mixed":
        let mixedElements = products.filter(
          (p) => p.price === 2.85 || p.price === 3.35
        );
        return mixedElements.map((p) => (
          <Checkbox product={p} handleFlavour={handleFlavour} />
        ));

      case "surprise":
        return <div>Dolce will surprise you will the flavours</div>;
      default:
        return basicCookies.map((p) => (
          <Checkbox product={p} handleFlavour={handleFlavour} />
        ));
    }
  };

  return (
    <div className="box-container">
      <BoxForm filter={filter} handleChange={handleChange} box={box} />
      <h2>Selected Flavours</h2>
      <ul>{displaySelectedFlavours()}</ul>
      <hr />
      {getProducts()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
  filter: state.gallery.filter,
});

export default withRouter(connect(mapStateToProps, { filterGallery })(Box));
