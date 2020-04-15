import React from "react";
import { Modal, Button } from "react-materialize";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { sendEmail } from "../../../../redux/actions/checkoutActions";
import SendIcon from "@material-ui/icons/Send";
import ConfirmationModalContent from "./ConfirmationModalContent";
import { formatPrice } from "../../../../helpers";

const ConfirmationModal = (props) => {
  const {
    checkoutData,
    cart: {
      data: { productQuantity, totalPrice },
    },
  } = props;
  const handleSendEmail = () => {
    const {
      name: { firstName, lastName },

      address: { addressNumber, city, province, street, postalCode },
      email: emailAddress,
      paymentMethod,
      dateNeededBy,
    } = checkoutData.form;

    const {
      order: { products },
    } = checkoutData;
    const productSkuLis = products.map((p, i) => {
      return `<li style="text-transform: capitalize">
                ${p.name} ${p.sku.replace("-", "")}<br/>
                Qty: ${p.quantity}<br/>
                Total Price: ${formatPrice(p.price * p.quantity, "CAD")}
              </li>`;
    });
    const allProductSkus = productSkuLis.join("");

    const emailBody = `<!DOCTYPE html><html lang="en"><head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Order</title>
  </head>
  <body>
    <div>
      <div>
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
      <ol> 
        ${allProductSkus}
      </ol>

      <div style="margin-top: 5%"> 
        Payment Method: <span>${paymentMethod}</span><br /> 
        Total Items: <strong>${productQuantity} </strong>
      </div>
      <div> 
        SUB TOTAL: <strong>CAD: ${formatPrice(totalPrice, "CAD")}</strong>
      </div> 
    </div>
  </body>
</html>`;
    const email = {
      name: firstName,
      email: emailAddress,
      message: `Error with the order contact - `,
      html: emailBody,
    };
    // POST to api/email
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
        <div>
          <div>
            <ConfirmationModalContent checkoutData={checkoutData} />
          </div>
          <Button
            node="button"
            waves="light"
            type="submit"
            modal="close"
            className="submit-email"
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
  errors: state.errors,
  cart: state.cart,
  checkout: state.checkout,
});

export default withRouter(
  connect(mapStateToProps, { sendEmail })(ConfirmationModal)
);
