import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();
const initialState = {};
const middleware = [thunk, loggerMiddleware];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);
export default store;
