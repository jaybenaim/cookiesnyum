import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { sendEmail } from "../../../redux/actions/checkoutActions";
import CheckoutFormDropdown from "./CheckoutFormDropdown";
import CheckoutFormDatePicker from "./CheckoutDatePicker";
import { TextInput, Button, Icon } from "react-materialize/lib";

import "../../../assets/stylesheets/checkoutForm.css";
const CheckoutForm = ({
  data,
  auth: {
    user: { name }
  }
}) => {
  const handleSendEmail = data => {
    const { products } = data;
    const productSkus = products.map(product => product.sku);

    const emailBody = `<div> <div className="email-template" style="display: grid;grid-template-columns: 1fr 1fr 1fr;" > <h1 style="grid-column: 1 / span 3;margin: 0 auto;margin-top: 10%;"> Order </h1><table style="width: 100%;margin-top: 10%;"><tr><th style="grid-column: 2">${name}</th><th style="grid-column: 2">$Email</th></tr> <tr> <td>$paymentMethod</td> <td>$address</td><td>$needBy</td></tr> </table> <div className="email-template--info"> <p className="email-template--info-name">${"name"}</p><p className="email-template--info-email">${"email"}</p> </div> </div></div>`;

    const email = {
      //@props TODO: create onchange
      name: name || "name",
      email: "jacob.benaim@icloud.com",
      message: `Error with the order contact - `,
      html: emailBody
    };
    // @post to /email
    sendEmail(email);
  };
  return (
    <div className="checkout-form">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <TextInput
                id="firstName"
                type="text"
                className="validate"
                defaultValue={name || ""}
                label="First Name"
              />
            </div>
            <div className="input-field col s6">
              <TextInput id="lastName" type="text" label="Last Name" />
            </div>
          </div>
          <h4 className="row">Address</h4>
          <div className="row">
            <div className="input-field col s3">
              <TextInput id="addressNumber" type="text" label="#" />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <TextInput id="street" type="text" label="Street" />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <TextInput id="city" type="text" label="City" />
            </div>

            <div className="input-field col s6">
              <TextInput id="province" type="text" label="Province" />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <TextInput id="postalCode" type="text" label="Postal Code" />
            </div>
            <div className="input-field col s6"></div>
          </div>
          <div className="row">
            <h3>Payment Method</h3>
          </div>
          <div className="row">
            <CheckoutFormDropdown />
          </div>
          <div className="row">
            <h3>When do you need it by?</h3>
          </div>
          <div className="row">
            <CheckoutFormDatePicker />
          </div>
          <div className="row">
            <div className="col s12 checkout-form--submit">
              {/* onClick show confirmation form  */}
              <Button node="button" type="submit" waves="light">
                Submit
                <Icon right>send</Icon>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { sendEmail })(
  withRouter(CheckoutForm)
);
