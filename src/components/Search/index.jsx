import React from "react";
import { Autocomplete, Icon } from "react-materialize";
import { connect } from "react-redux";
import { v1 as uuidv1 } from "uuid";
import "../../assets/stylesheets/search.css";

const Search = (props) => {
  const {
    products: { products },
  } = props;

  const data = () => {
    let obj = {};
    if (products.length >= 1) {
      for (let i = 0; i < products.length; i++) {
        const name = products[i].name;
        const image = products[i].image;

        obj[name] = image;
      }
    }
    return obj;
  };

  let widthId = window.innerWidth;
  if (widthId <= 450) {
    widthId = "-mobile";
  } else {
    widthId = "-desktop";
  }

  return (
    <Autocomplete
      icon={<Icon>search</Icon>}
      id={`Autocomplete-${uuidv1()}`}
      className="navbar--search"
      options={{
        data: data(),
      }}
      placeholder="Search Products"
    />
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, {})(Search);
