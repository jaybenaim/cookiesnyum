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
          value={props.value}
          onChange={props.handleFilterChange}
        />
        <Checkbox
          id="filter-sku"
          label="Category"
          name="sku"
          value={props.value}
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
