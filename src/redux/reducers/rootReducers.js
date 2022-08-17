import { combineReducers } from "redux";
import getCategoryReducer from "./getCategoryReducer";
import getProductReducer from "./getProductReducer";
import getBrandReducer from "./getBrandReducer";

const rootReducers = combineReducers({
  getCategoryReducer,
  getProductReducer,
  getBrandReducer
});

export default rootReducers;