import { TOGGLE_NAVBAR } from "../types";

export const toggleNavbar = payload => {
  return {
    type: TOGGLE_NAVBAR,
    payload
  };
};
