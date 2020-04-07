import { SET_AWAKE } from "../types";
const initialState = {
  backendAwake: false
};
const handleWakeupDB = (state = initialState, action) => {
  switch (action.type) {
    case SET_AWAKE:
      const { payload } = action;
      return Object.assign({}, state, { backendAwake: payload });
    default:
      return state;
  }
};
export default handleWakeupDB;
