import React from "react";
import { TextInput, Icon } from "react-materialize";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { useState } from "react";

const SearchPage = (props) => {
  const { products } = props;
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState("");
  const queryProducts = products.filter((p) => {
    p.name.includes(query);
  });
  const results = queryProducts.map((p) => <div className="">{p.name}</div>);

  const handleChange = (e) => {
    setShowResults(true);
    setQuery(e.target.value);
  };

  return (
    <>
      <TextInput
        icon={<Icon>search</Icon>}
        id="search-bar"
        label="Search Products"
        onChange={(e) => handleChange(e)}
      />
      {showResults && results}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};
export default withRouter(connect(mapStateToProps, {})(SearchPage));
