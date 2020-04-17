import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import OrderSentModal from "./OrderSentModal";
import ConfirmationModal from "./ConfirmationModal";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { TextInput, Button, DatePicker } from "react-materialize";

import "../../../assets/stylesheets/checkoutForm.css";
import DeliveryMethod from "./DeliveryMethod";
import PaymentMethod from "./PaymentMethod";

const CheckoutForm = ({
  cart: { products },
  auth: {
    user: { name },
  },
  checkout: { checkoutStatus },
}) => {
  const [firstName, setFirstName] = useState(name || "");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [tel, setTel] = useState("");
  const [suite, setSuite] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [deliveryMethod, setDeliveryMethod] = useState("Pick up");

  let numWeeks = 1;
  let now = new Date();
  now.setDate(now.getDate() + numWeeks * 4);
  let firstAvailableDateForPickup = now;
  const [date, setDate] = useState(firstAvailableDateForPickup.toDateString());
  const form = {
    name: {
      firstName,
      lastName,
    },
    email,
    phone: tel,
    address: {
      addressNumber,
      suite,
      street,
      city,
      province,
      postalCode,
    },
    paymentMethod,
    deliveryMethod,
    dateNeededBy: date,
  };
  const checkoutData = {
    form,
    order: {
      products,
    },
  };

  const handleSetPaymentMethod = (value) => {
    setPaymentMethod(value);
  };
  const handleSetDeliveryMethod = (value) => {
    setDeliveryMethod(value);
  };

  const handleSetDate = (e, value) => {
    const stringValue = String(value);
    const seperatedDate = stringValue.split(" ");
    setDate(`${seperatedDate[0]}, ${seperatedDate[1]} ${seperatedDate[2]}`);
  };

  const [validatedForm, setValidatedForm] = useState(false);
  const [validatedError, setValidationError] = useState("");

  const validateForm = () => {
    const errors = [];
    if (email.length === 0) {
      errors.push("Email required");
    }
    if (firstName.length === 0) {
      errors.push("First name required");
    }
    if (tel.length <= 0) {
      errors.push("Phone Number required");
    }

    errors.length === 0
      ? setValidatedForm(true)
      : setValidationError("invalid");

    setTimeout(() => {
      setValidationError("");
    }, 15000);
  };

  return (
    <div className="checkout-form">
      {validatedForm && (
        <ConfirmationModal
          checkoutData={checkoutData}
          validatedForm={validatedForm}
        />
      )}
      {checkoutStatus === "success" && <OrderSentModal />}
      <div className="row">
        <h4>Full Name</h4>
      </div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <TextInput
                id="firstName"
                type="text"
                className={`validate ${validatedError}`}
                defaultValue={name || ""}
                label="First Name"
                validate
                error={"Name required"}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input-field col s6">
              <TextInput
                id="lastName"
                type="text"
                label="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <TextInput
                email
                id="email"
                label="Email"
                className={`validate ${validatedError}`}
                error={"Email required"}
                validate
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <TextInput
                tel
                id="phone"
                label="Phone Number"
                className={`validate ${validatedError}`}
                error={"Phone Number required"}
                validate
                onChange={(e) => setTel(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <h4>Address</h4>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <TextInput
                id="addressNumber"
                type="text"
                label="#"
                onChange={(e) => setAddressNumber(e.target.value)}
              />
            </div>
            <div className="input-field col s6">
              <TextInput
                id="suite"
                type="text"
                label="suite / apt"
                onChange={(e) => setSuite(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <TextInput
                id="street"
                type="text"
                label="Street"
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <TextInput
                id="city"
                type="text"
                label="City"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="input-field col s6">
              <TextInput
                id="province"
                type="text"
                label="Province"
                onChange={(e) => setProvince(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <TextInput
                id="postalCode"
                type="text"
                label="Postal Code"
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <div className="input-field col s6"></div>
          </div>
          <div className="row">
            <h3>When do you need it by?</h3>
          </div>
          <div className="row">
            <div class="input-field col s4">
              <DatePicker
                id="date"
                label={`Date for ${deliveryMethod}`}
                options={{
                  defaultDate: date,
                  onChange: (value) => handleSetDate(value),
                  minDate: firstAvailableDateForPickup,
                }}
                value={firstAvailableDateForPickup.toDateString()}
                children={
                  <span
                    class="helper-text"
                    data-error="wrong"
                    data-success="right"
                  >
                    Min 72 hour waiting period
                  </span>
                }
              />
            </div>

            <div className="input-field col s8"></div>
          </div>
          <div className="row"></div>
          <div className="row">
            <h3>Payment Details</h3>
          </div>
          <div className="row">
            <div className=" col s6">
              <DeliveryMethod
                deliveryMethod={deliveryMethod}
                validatedError={validatedError}
                handleSetDeliveryMethod={handleSetDeliveryMethod}
                setDeliveryMethod={setDeliveryMethod}
              />
            </div>
            <div className=" col s6">
              <PaymentMethod
                paymentMethod={paymentMethod}
                validatedError={validatedError}
                handleSetPaymentMethod={handleSetPaymentMethod}
                setPaymentMethod={setPaymentMethod}
              />
            </div>
          </div>
        </form>
      </div>

      {/* onClick show confirmation form  */}
      <Button
        node="button"
        waves="light"
        type="submit"
        className="modal-trigger"
        href="#confirmModal"
        onClick={() => validateForm(form)}
      >
        Go to Confirmation
        <ArrowRightAltIcon />
      </Button>
      {validatedError && <div>Please fill out all fields</div>}
      <div className="fine-print">** Extra charges apply</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  cart: state.cart,
  checkout: state.checkout,
});

export default connect(mapStateToProps, {})(withRouter(CheckoutForm));
