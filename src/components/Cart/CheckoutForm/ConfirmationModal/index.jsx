import React, { useEffect } from "react";
import { Modal, Button } from "react-materialize";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  sendEmail,
  handleCheckoutData
} from "../../../../redux/actions/checkoutActions";
const ConfirmationModal = ({ checkoutData }) => {
  useEffect(() => {
    handleCheckoutData(checkoutData);
  });
  return (
    <div>
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Close
          </Button>
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header="Confirm"
        id="confirmModal"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%"
        }}
      ></Modal>
    </div>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  cart: state.cart,
  checkout: state.checkout
});

export default connect(mapStateToProps, { sendEmail, handleCheckoutData })(
  withRouter(ConfirmationModal)
);
