import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import cartReducers from "./cartReducers";
import checkoutReducers from "./checkoutReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  cart: cartReducers,
  checkout: checkoutReducers
});
