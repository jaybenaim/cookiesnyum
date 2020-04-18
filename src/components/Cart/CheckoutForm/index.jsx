import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import OrderSentModal from "./OrderSentModal";
import ConfirmationModal from "./ConfirmationModal";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { TextInput, Button, DatePicker } from "react-materialize";

import "../../../assets/stylesheets/checkoutForm.css";
import DeliveryMethod from "./DeliveryMethod";
import PaymentMethod from "./PaymentMethod";
import { clearCart } from "../../../redux/actions/cartActions";

const CheckoutForm = (props) => {
  const {
    cart: { products },
    auth: {
      user: { name },
    },
    checkout: { checkoutStatus },
  } = props;

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

  // Set date picker date
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
  const [validationError, setValidationError] = useState("");
  const [validatedError, setValidatedError] = useState({});

  const validateForm = () => {
    const errors = {};

    if (firstName.length === 0) errors.firstName = "First name required";
    if (email.length === 0) errors.email = "Email required";
    if (tel.length === 0) errors.phone = "Phone Number required";

    if (deliveryMethod === "Delivery**") {
      if (street.length <= 0) errors.street = "Street required";
      if (city.length <= 0) errors.city = "City required";
      if (province.length <= 0) errors.province = "Province required";
      if (postalCode.length <= 0) errors.postalCode = "Postal Code required";
      if (postalCode.length > 6) errors.postalCode = "Postal Code invalid";
    }

    if (errors.length === 0) {
      setValidatedForm(true);
    } else {
      setValidationError("invalid");

      setValidatedError(errors);
    }

    // setTimeout(() => {
    //   setValidationError("");
    // }, 15000);
  };
  const getValidClass = (input) => {
    if (validatedError[input]) {
      return "invalid";
    } else "";
  };
  useEffect(() => {
    checkoutStatus === "success" && props.clearCart({});
    // eslint-disable-next-line
  }, [checkoutStatus]);

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
                defaultValue={name || ""}
                label="First Name"
                className={`validate ${getValidClass("firstName")}`}
                error={validatedError["firstName"]}
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
                className={`validate ${getValidClass("email")}`}
                error={validatedError["email"]}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <TextInput
                type="tel"
                id="phone"
                label="Phone Number"
                className={`validate ${getValidClass("phone")}`}
                error={validatedError["phone"]}
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
                className={`validate ${getValidClass("street")}`}
                error={validatedError["street"]}
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
                className={`validate ${getValidClass("city")}`}
                error={validatedError["city"]}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="input-field col s6">
              <TextInput
                id="province"
                type="text"
                label="Province"
                className={`validate ${getValidClass("province")}`}
                error={validatedError["province"]}
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
                className={`validate ${getValidClass("postalCode")}`}
                error={validatedError["postalCode"]}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <div className="input-field col s6"></div>
          </div>
          <div className="row">
            <h3>When do you need it by?</h3>
          </div>
          <div className="row">
            <div className="input-field col s4">
              <DatePicker
                id="date"
                label={`Date for ${deliveryMethod}`}
                options={{
                  defaultDate: firstAvailableDateForPickup.toDateString(),
                  onChange: (value) => handleSetDate(value),
                  minDate: firstAvailableDateForPickup,
                }}
                defaultValue={firstAvailableDateForPickup.toDateString()}
                children={
                  <span
                    className="helper-text"
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
          <div className="row" id="paymentDetails">
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
      {validatedError && (
        <div className="validate-submit-error">Please fill out all fields</div>
      )}
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

export default connect(mapStateToProps, { clearCart })(
  withRouter(CheckoutForm)
);
