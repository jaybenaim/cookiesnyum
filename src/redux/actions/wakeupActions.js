import { SET_AWAKE } from "../types";
import backend from "../../api/backend";

export const wakeupDB = () => dispatch => {
  backend
    .get("/")
    .then(res => {
      dispatch(setAwake("awake"));
    })
    .catch(err => {
      dispatch(setAwake("error"));
    });
};

export const setAwake = value => {
  return {
    type: SET_AWAKE,
    payload: value
  };
};
