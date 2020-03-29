import { SET_CHECKOUT_DATA, SET_CHECKOUT_STATUS } from "../types";
const initialState = {
  checkoutStatus: "pending",
  checkoutData: []
};
const handleCheckout = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHECKOUT_DATA:
      const { checkoutData } = action.payload;

      return Object.assign({}, state, {
        checkoutData
      });
      break;

    case SET_CHECKOUT_STATUS:
      const { payload } = action;
      return Object.assign({}, state, {
        checkoutStatus: payload
      });

    default:
      return state;
  }
};
export default handleCheckout;
