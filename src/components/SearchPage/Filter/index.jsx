import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Checkbox } from "react-materialize";
import "../../../assets/stylesheets/searchFilter.css";

const Filter = (props) => {
  return (
    <div className="search--filter-container">
      <form>
        <Checkbox
          id="filter-name"
          label="Name"
          name="name"
          value="name"
          onChange={props.handleFilterChange}
        />
        <Checkbox
          id="filter-sku"
          label="Category"
          name="sku"
          value="sku"
          onChange={props.handleFilterChange}
        />
        <h2>Description</h2>
        <Checkbox
          id="filter-description"
          label="Dough"
          name="description.dough"
          value="description.dough"
          onChange={props.handleFilterChange}
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default withRouter(connect(mapStateToProps, {})(Filter));
