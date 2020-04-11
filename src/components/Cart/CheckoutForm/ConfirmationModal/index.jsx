import React from "react";
import { Modal, Button } from "react-materialize";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { sendEmail } from "../../../../redux/actions/checkoutActions";
import SendIcon from "@material-ui/icons/Send";
import ConfirmationModalContent from "./ConfirmationModalContent";

const ConfirmationModal = (props) => {
  const {
    checkoutData,
    auth: {
      user: { name },
    },
    cart: {
      data: { productQuantity, totalPrice },
    },
  } = props;
  const handleSendEmail = () => {
    const {
      name: { firstName, lastName },
      order: { products },
      address: { addressNumber, city, province, street, postalCode },
      email: emailAddress,
      paymentMethod,
      dateNeededBy,
    } = checkoutData;

    const productSkuLis = products.map((p, i) => `<li>${products[i]}</li>`);
    const allProductSkus = productSkuLis.join("");

    const emailBody = `<!DOCTYPE html><html lang="en"><head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Order</title>
  </head>
  <body>
    <div>
      <div className="email-template" style="">
        <h1 style="grid-column: 1 / span 3;margin: 0 auto;margin-top: 10%;">
          Order
        </h1>
        <div style="width: 100%;margin-top: 10%;">
          <div>
            <p>
              <strong>First Name:</strong> <span>${firstName}</span>
            </p>
            <p>
              <strong>Last Name:</strong> <span>${lastName}</span>
            </p>
            <p>
              <strong>Email:</strong> <span >${emailAddress}</span>
            </p>
            <p>
              <strong>Payment Method:</strong> <span>${paymentMethod}</span>
            </p>
          
            <div> 
              <strong>Address:</strong> 
                <div>
                  <div>${addressNumber} ${street},</div>
                  <div>${city}, ${province}</div>
                  <div>${postalCode}</div>
                </div>
            <div> 
          </div>
       <div> 
         </div> 
        </div>
      </div>
    </div>
    <div>
      <h2>Order Details:</h2>
        <div>
          <strong>Need By Date:</strong>
              <div>
                ${dateNeededBy}
              </div>
        </div> 
        <h3>Product Skus</h3> 
      <ul> 
        ${allProductSkus}
      </ul>
      <div> 
        Total Items: <strong>${productQuantity} </strong>
      </div>
      <div> 
        Total Charge to customer: <strong>$${totalPrice}</strong>
      </div> 
    </div>
   

  </body>
</html>`;
    const email = {
      //@props TODO: create onchange
      name: name || "name",
      email: "jacob.benaim@icloud.com",
      message: `Error with the order contact - `,
      html: emailBody,
    };
    // @post to /email
    props.sendEmail(email);
  };

  return (
    <div>
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Cancel
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header="Confirm Order"
        id="confirmModal"
        open={false}
        options={{
          dismissible: true,
          endingTop: "",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "0%",
        }}
      >
        <div>
          <div>
            <ConfirmationModalContent checkoutData={checkoutData} />
          </div>
          <Button
            node="button"
            waves="light"
            type="submit"
            onClick={() => handleSendEmail()}
          >
            Submit
            <SendIcon />
          </Button>
        </div>
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  cart: state.cart,
  checkout: state.checkout,
});

export default withRouter(
  connect(mapStateToProps, { sendEmail })(ConfirmationModal)
);
