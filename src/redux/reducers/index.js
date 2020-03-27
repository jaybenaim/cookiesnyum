import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
<<<<<<< HEAD
import { CartReducers } from "react-cart-components";
=======
import cartReducers from "./cartReducers";
>>>>>>> 27922822caa3a190b566351cc7b4c2227e80093a

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
<<<<<<< HEAD
  cart: CartReducers
=======
  cart: cartReducers
>>>>>>> 27922822caa3a190b566351cc7b4c2227e80093a
});
