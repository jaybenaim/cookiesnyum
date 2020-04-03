import { GET_PRODUCTS, SET_PRODUCTS, GET_ERRORS } from "../types";
import backend from "../../api/backend";

export const getProducts = () => dispatch => {
  backend
    .get("/products")
    .then(res => {
      dispatch(setProducts(res.data));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

export const setProducts = products => {
  return {
    type: SET_PRODUCTS,
    payload: products
  };
};
