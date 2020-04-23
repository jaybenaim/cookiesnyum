import React from "react";
import { Autocomplete, Icon } from "react-materialize";
import { connect } from "react-redux";
import { v1 as uuidv1 } from "uuid";
import "../../assets/stylesheets/search.css";
import { useState } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { useEffect } from "react";

const Search = (props) => {
  const {
    products: { products },
    history,
  } = props;

  const data = () => {
    let obj = {};

    if (products.length >= 1) {
      for (let i = 0; i < products.length; i++) {
        const name = products[i].name;
        const image = products[i].image;
        const id = products[i]._id;

        obj[name] = { image, id };
      }
    }

    return obj;
  };
  const [redirect, setRedirect] = useState(false);
  const [currentProduct, setCurrentProduct] = useState("");

  const handleChange = (e) => {
    let product = products.filter((p) => p.name === e);
    console.log(product);
    product[0].id = product._id;
    setCurrentProduct(product);
    setRedirect(true);
  };

  const location = window.location.href;
  useEffect(() => {
    const hrefContainsName =
      currentProduct && location.includes(currentProduct[0].name);
    if (hrefContainsName) {
      setRedirect(false);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {redirect && (
        <Redirect
          to={{
            pathname: `/products/${currentProduct[0].name}`,
            state: { item: currentProduct[0] },
          }}
        />
      )}
      <Autocomplete
        icon={<Icon>search</Icon>}
        id={`Autocomplete-${uuidv1()}`}
        className="navbar--search"
        options={{
          data: data(),
          onAutocomplete: (e) => handleChange(e),
        }}
        placeholder="Search Products"
      />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default withRouter(connect(mapStateToProps, {})(Search));
