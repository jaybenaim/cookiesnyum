import React from "react";
import { Modal, Button } from "react-materialize";
const ConfirmationModal = () => {
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

export default ConfirmationModal;
