import { SET_MESSAGE_STATUS } from "../types";
const initialState = {
  messageStatus: "pending"
};
const handleCheckout = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE_STATUS:
      const { payload } = action;
      return Object.assign({}, state, {
        messageStatus: payload
      });
    default:
      return state;
  }
};
export default handleCheckout;
