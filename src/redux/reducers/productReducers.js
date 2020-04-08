import { SET_PRODUCTS, SET_CURRENT_PRODUCT } from "../types";
const initialState = {
  products: [],
  currentProduct: []
};

const handleProducts = (state = initialState, action) => {
  let { payload } = action;

  switch (action.type) {
    case SET_PRODUCTS:
      return Object.assign({}, state, { products: payload });
    case SET_CURRENT_PRODUCT:
      return Object.assign({}, state, { currentProduct: payload });
    default:
      return state;
  }
};
export default handleProducts;
