import { SET_CHECKOUT_STATUS } from "../types";
const initialState = {
  checkoutStatus: "pending"
};
const handleCheckout = (state = initialState, action) => {
  switch (action.type) {
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
