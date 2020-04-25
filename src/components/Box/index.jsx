import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { filterGallery } from "../../redux/actions/galleryActions";
import BoxForm from "./BoxForm";

import Checkbox from "./CheckBox";

import "../../assets/stylesheets/box.css";

const Box = (props) => {
  const { filter, products } = props;

  // hooks
  const [box, setBox] = useState("basic");
  const [flavours, setFlavours] = useState([]);
  const [showImage, setShowImage] = useState(false);
  const [image, setImage] = useState("");
  const [currentFlavour, setCurrentFlavour] = useState("");

  // handle box selection
  const handleChange = (e) => {
    setFlavours([]);
    setBox(e.target.value);
  };
  const handleImage = (name) => {
    const currentImage = products.filter(
      (product) => product.name === name && product.image
    );
    setImage(currentImage[0].image);
  };
  const handleFlavour = (e) => {
    const value = flavours.includes(e.target.name);
    // show image
    setShowImage(true);
    handleImage(e.target.name);
    setCurrentFlavour(name);
    !value && setFlavours([...flavours, e.target.name]);
    if (value) {
      const updatedFlavours = flavours.filter(
        (flavour) => flavour !== e.target.name
      );
      setFlavours(updatedFlavours);
    }
  };

  const displaySelectedFlavours = () => {
    return flavours.map((flavour, i) => <li key={i}>{flavour}</li>);
  };
  const getProducts = () => {
    let classId;

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
  };

  return (
    <div className="box-container">
      <BoxForm filter={filter} handleChange={handleChange} box={box} />
      <div className="box--image">
        {showImage && (
          <>
            <strong>Preview</strong>
            <img src={image} alt={currentFlavour} height={250} width={320} />
          </>
        )}
      </div>
      {flavours.length > 0 ? (
        <h2>Selected Flavours</h2>
      ) : (
        <h2>Select Your Flavours</h2>
      )}
      <ul className="selected-flavours">{displaySelectedFlavours()}</ul>
      <hr />
      <div className="flavours">{getProducts()}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
  filter: state.gallery.filter,
});

export default withRouter(connect(mapStateToProps, { filterGallery })(Box));
