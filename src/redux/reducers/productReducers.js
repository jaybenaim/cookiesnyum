import { SET_PRODUCTS } from "../types";
const initialState = {
  products: []
};

const handleProducts = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      const { payload } = action;
      return Object.assign({}, state, { products: payload });
    default:
      return state;
  }
};
export default handleProducts;
