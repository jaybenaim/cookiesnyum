import { SET_PRODUCTS, GET_ERRORS, SET_CURRENT_PRODUCT } from "../types";
import backend from "../../api/backend";

export const getProducts = () => (dispatch) => {
  backend
    .get("/products")
    .then((res) => {
      dispatch(setProducts(res.data));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const setCurrentProduct = (product) => {
  return {
    type: SET_CURRENT_PRODUCT,
    payload: product,
  };
};
