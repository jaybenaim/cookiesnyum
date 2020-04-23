import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { filterGallery } from "../../redux/actions/galleryActions";

const Box = (props) => {
  const { filter: boxFilter } = props;
  switch (boxFilter) {
    case "cookie":
      return <div className="box-container">Cookie Box - {boxFilter}</div>;
    case "scone":
      return <div className="box-container">Scone Box - {boxFilter}</div>;
    default:
      return <div className="box-container">Select Box - {boxFilter}</div>;
  }
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  filter: state.gallery.filter,
});

export default withRouter(connect(mapStateToProps, { filterGallery })(Box));
