import { GET_ERRORS, SEND_EMAIL, SET_MESSAGE_STATUS } from "../types";
import backend from "../../api/backend";

// Send message for checkout
export const sendEmail = data => dispatch => {
  backend
    .post("/email", data)
    .then(res => {
      const { message } = res.data;
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
