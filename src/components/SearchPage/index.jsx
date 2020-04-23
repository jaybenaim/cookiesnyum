import React, { Component } from "react";
import { TextInput, Icon } from "react-materialize";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Filter from "./Filter";
import local from "../../api/local";

class SearchPage extends Component {
  // TODO: create next page button for pagination if results over 5

  state = {
    query: "",
    filter: "name",
    name: "",
    sku: "",
    showResults: false,
    page: 1,
    products: [],
  };

  handleChange = (e) => {
    this.setState({
      query: e.target.value,
      showResults: e.target.value === "" ? false : true,
    });
    this.getResults();
  };

  handleFilterChange = (e) => {
    const { name } = e.target;
    this.setState({ filter: name });
  };

  getResults = () => {
    const { query, filter } = this.state;
    local
      .get(`products/search/0?search=${query}&filter=${filter}`)
      .then((res) => {
        this.setState({ products: res.data });
      })
      .catch((err) => console.log(err));
  };
  render() {
    //   Display elements
    const { showResults, products } = this.state;
    const results = products.map((p) => (
      <>
        <Link to={{ pathname: `/products/${p.name}`, state: { item: p } }}>
          {p.name}
        </Link>
        <br />
      </>
    ));
    return (
      <>
        <TextInput
          icon={<Icon>search</Icon>}
          id="search-bar"
          label="Search Products"
          onChange={(e) => this.handleChange(e)}
        />
        {showResults && results}
        <Filter handleFilterChange={this.handleFilterChange} />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};
export default withRouter(connect(mapStateToProps, {})(SearchPage));
