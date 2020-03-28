import { GET_ERRORS, SEND_EMAIL, SET_MESSAGE_STATUS } from "../types";
import local from "../../api/local";

// Send message for checkout
export const sendEmail = data => dispatch => {
  local
    .post("/email", data)
    .then(res => {
      let message = "success";
      dispatch(setMessageStatus(message));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

// Set message status from checkout promise
export const setMessageStatus = message => {
  return {
    type: SET_MESSAGE_STATUS,
    payload: message
  };
};
