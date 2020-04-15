import { GET_ERRORS, SET_CHECKOUT_STATUS } from "../types";
import local from "../../api/local";

// Send message for checkout
export const sendEmail = (data) => (dispatch) => {
  local
    .post("/email", data)
    .then((res) => {
      let message = "success";
      dispatch(setCheckoutStatus(message));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};

// Set message status from checkout promise
export const setCheckoutStatus = (message) => {
  return {
    type: SET_CHECKOUT_STATUS,
    payload: message,
  };
};
