import { FILTER_GALLERY } from "../types";

const initialState = {
  filter: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FILTER_GALLERY:
      return {
        filter: action.payload
      };
    default:
      return state;
  }
}
