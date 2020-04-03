import { TOGGLE_NAVBAR } from "../types";
const initialState = {
  showDesktopNavbar: false
};

const navbarReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return Object.assign({}, state, {
        showDesktopNavbar: !action.payload
      });
    default:
      return state;
  }
};
export default navbarReducers;
