import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import cartReducers from "./cartReducers";
import checkoutReducers from "./checkoutReducers";
import galleryReducers from "./galleryReducers";
import productReducers from "./productReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  cart: cartReducers,
  checkout: checkoutReducers,
  gallery: galleryReducers,
  products: productReducers
});
