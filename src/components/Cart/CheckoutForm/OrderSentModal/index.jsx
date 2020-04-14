import React from "react";
import { Modal, Button } from "react-materialize";

const OrderSentModal = () => {
  return (
    <Modal
      actions={[
        <Button flat modal="close" node="button" waves="green">
          x
        </Button>,
      ]}
      bottomSheet={true}
      fixedFooter={false}
      header="Order Sent"
      id="orderSentModal"
      open={true}
      options={{
        dismissible: true,
        endingTop: "",
        opacity: 0.5,
        outDuration: 250,
        preventScrolling: true,
        startingTop: "0%",
      }}
    >
      <div>Order Sent</div>
    </Modal>
  );
};

export default OrderSentModal;
