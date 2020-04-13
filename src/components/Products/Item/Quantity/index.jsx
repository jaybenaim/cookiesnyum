import React from "react";
import { Button, Icon, TextInput } from "react-materialize";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Quantity = (props) => {
  const { qtyLabel, id } = props;
  return (
    <>
      <button
        className="decrease"
        name="qty"
        onClick={(e) => props.handleQty("decrease")}
      >
        <Icon>remove</Icon>
      </button>

      <TextInput
        id={`TextInput-${id}`}
        label={qtyLabel === 0 ? "1" : `${qtyLabel}`}
        type="number"
        name="qty"
        onChange={(e) => props.handleQtyChange(e)}
      />

      <button
        className="increase"
        name="qty"
        onClick={() => props.handleQty("increase")}
      >
        <Icon> add</Icon>
      </button>
    </>
  );
};
const mapStateToProps = (state) => ({});
export default withRouter(connect(mapStateToProps, {})(Quantity));
