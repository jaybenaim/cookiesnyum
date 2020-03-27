import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import { CartReducers } from "react-cart-components";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  cart: CartReducers
});
