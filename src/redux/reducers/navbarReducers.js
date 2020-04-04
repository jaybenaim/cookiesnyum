import { TOGGLE_NAVBAR } from "../types";
const initialState = {
  showDesktopNavbar: "",
  dropMainContent: ""
};

const navbarReducers = (state = initialState, action) => {
  //   const { nav, content } = action.payload;
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return Object.assign({}, state, {
        dropMainContent: action.payload.content,
        showDesktopNavbar: action.payload.nav
      });
    default:
      return state;
  }
};
export default navbarReducers;
