import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { filterGallery } from "../../redux/actions/galleryActions";
import BoxForm from "./BoxForm";
import Checkbox from "./CheckBox";
import SconeDropdown from "./SconeDropdown";

import "../../assets/stylesheets/box.css";
import SelectedFlavour from "./SelectedFlavour";

const Box = (props) => {
  const { filter, products } = props;

  // hooks
  const [box, setBox] = useState("basic");
  const [flavours, setFlavours] = useState([]);
  const [showImage, setShowImage] = useState(false);
  const [image, setImage] = useState("");
  const [currentFlavour, setCurrentFlavour] = useState("");

  // Form
  const form = {
    box,
    flavours,
  };

  const handleForm = () => {
    return form;
  };
  // handle box selection
  const handleChange = (e) => {
    setFlavours([]);
    setBox(e.target.value);
  };
  const getImage = (name) => {
    const currentImage = products.filter(
      (product) => product.name === name && product.image
    );
    return currentImage[0].image;
  };
  const getProduct = (name) => {
    const product = products.filter((product) => product.name === name);
    return product[0];
  };
  const handleImage = (name) => {
    setImage(getImage(name));
  };

  const handleFlavour = (e) => {
    const name = e.target.name;
    const value = flavours.includes(name);
    // show image
    setShowImage(true);
    handleImage(name);
    setCurrentFlavour(name);
    !value && setFlavours([...flavours, name]);
    if (value) {
      const updatedFlavours = flavours.filter((flavour) => flavour !== name);
      setFlavours(updatedFlavours);
    }
  };

  const displaySelectedFlavours = () => {
    return flavours.map((flavour, i) => (
      <SelectedFlavour key={i} flavour={getProduct(flavour)} form={form} />
    ));
  };
  const getOptions = () => {
    let classId;
    if (filter === "scone") {
      let scones = products.filter((p) => p.sku.replace("-", "") === "scone");
      return scones.map((scone, i) => {
        if (i % 2 !== 0) {
          classId = "flavours--col-2";
        } else {
          classId = "flavours--col-1";
        }

        return (
          <Checkbox
            product={scone}
            handleFlavour={handleFlavour}
            key={i}
            classId={classId}
            flavours={flavours}
          />
        );
      });
    } else {
      switch (box) {
        case "basic":
          let basicCookies = products.filter((p) => p.price === 2.85);
          return basicCookies.map((p, i) => {
            if (i % 2 !== 0) {
              classId = "flavours--col-2";
            } else {
              classId = "flavours--col-1";
            }
            return (
              <Checkbox
                product={p}
                handleFlavour={handleFlavour}
                key={i}
                classId={classId}
                flavours={flavours}
              />
            );
          });
        case "premium":
          let premiumCookies = products.filter((p) => p.price === 3.35);
          return premiumCookies.map((p, i) => {
            if (i % 2 !== 0) {
              classId = "flavours--col-2";
            } else {
              classId = "flavours--col-1";
            }
            return (
              <Checkbox
                product={p}
                handleFlavour={handleFlavour}
                key={i}
                classId={classId}
                flavours={flavours}
              />
            );
          });
        case "mixed":
          let mixedElements = products.filter(
            (p) => p.price === 2.85 || p.price === 3.35
          );
          return mixedElements.map((p, i) => {
            if (i % 2 !== 0) {
              classId = "flavours--col-2";
            } else {
              classId = "flavours--col-1";
            }
            return (
              <Checkbox
                product={p}
                handleFlavour={handleFlavour}
                key={i}
                classId={classId}
                flavours={flavours}
              />
            );
          });

        case "surprise":
          return <div>Dolce will surprise you will the flavours</div>;
        default:
          return basicCookies.map((p, i) => (
            <Checkbox product={p} handleFlavour={handleFlavour} key={i} />
          ));
      }
    }
  };

  return (
    <div className="box-container">
      <h1 className="center primary-font">
        {!filter ? "Cookie" : filter.toUpperCase()}
      </h1>
      {filter === "scone" ? (
        <div className="scone-dropdown">
          <SconeDropdown
            filter={filter}
            handleChange={handleChange}
            box={box}
          />
        </div>
      ) : (
        <BoxForm filter={filter} handleChange={handleChange} box={box} />
      )}
      <div className="box--image">
        {showImage && (
          <>
            <strong>Preview</strong>
            <img src={image} alt={currentFlavour} height={250} width={320} />
          </>
        )}
      </div>
      {flavours.length > 0 ? (
        <h2 className="primary-font">Selected Flavours</h2>
      ) : (
        <h2 className="primary-font">Select Your Flavours</h2>
      )}
      <ul className="selected-flavours">{displaySelectedFlavours()}</ul>
      <hr />
      <div className="flavours">{getOptions()}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
  filter: state.gallery.filter,
});

export default withRouter(connect(mapStateToProps, { filterGallery })(Box));
