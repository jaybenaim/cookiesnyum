import { GET_ERRORS, SET_CHECKOUT_STATUS, SET_CHECKOUT_DATA } from "../types";
import backend from "../../api/backend";

// Send message for checkout
export const sendEmail = data => dispatch => {
  backend
    .post("/email", data)
    .then(res => {
      let message = "success";
      dispatch(setCheckoutStatus(message));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

// Set message status from checkout promise
export const setCheckoutStatus = message => {
  return {
    type: SET_CHECKOUT_STATUS,
    payload: message
  };
};

// Set checkout Data
export const handleCheckoutData = checkoutData => {
  return {
    type: SET_CHECKOUT_DATA,
    payload: checkoutData
  };
};
