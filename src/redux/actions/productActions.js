import { SET_PRODUCTS, GET_ERRORS, SET_CURRENT_PRODUCT } from "../types";
import backend from "../../api/backend";
import PRODUCTS from "../../components/Gallery/products";

export const getProducts = () => (dispatch) => {
  backend
    .get("/products")
    .then((res) => {
      // Get product image
      const productElements = res.data.map((item, i) => {
        const getImage = PRODUCTS.filter((product) => {
          return product.name === item.name && product.image;
        });

        // Set product image
        const image = getImage.length >= 1 ? getImage[0]["image"] : item.image;
        let newItem = item;
        newItem.image = image;
        return newItem;
      });
      dispatch(setProducts(productElements));
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
