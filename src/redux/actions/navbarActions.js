import { TOGGLE_NAVBAR } from "../types";

export const toggleNavbar = ({ nav, content }) => {
  return {
    type: TOGGLE_NAVBAR,
    payload: { nav, content }
  };
};
