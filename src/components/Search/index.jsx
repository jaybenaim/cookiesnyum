import React from "react";
import { Autocomplete, Icon } from "react-materialize";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Search = (props) => {
  const {
    products: { products },
  } = props;

  const data = () => {
    let obj = {};
    if (products.length >= 1) {
      for (let i = 0; i < products.length; i++) {
        obj[products[i].name] = products[i].image;
      }
    }
    console.log(obj);
    return obj;
  };

  return (
    <Autocomplete
      icon={<Icon>search</Icon>}
      id="Autocomplete-1"
      options={{
        data: data(),
      }}
      placeholder="Insert here"
    />
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default withRouter(connect(mapStateToProps, {})(Search));
