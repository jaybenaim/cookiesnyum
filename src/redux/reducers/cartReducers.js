import {
  LOAD_CART,
  ADD_PRODUCT,
  UPDATE_CART,
  REMOVE_PRODUCT,
  CLEAR_CART,
} from "../types";

const initialState = {
  products: [],
  productToAdd: null,
  data: {
    productQuantity: 0,
    totalPrice: 0,
  },
};
export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_CART:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        productToAdd: Object.assign({}, action.payload),
      };
    case UPDATE_CART:
      return {
        ...state,
        data: action.payload,
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        productToRemove: Object.assign({}, action.payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        products: initialState.products,
        data: initialState.data,
      };
    default:
      return state;
  }
}
