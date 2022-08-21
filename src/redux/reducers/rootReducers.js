import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import getBrandReducer from "./getBrandReducer";
import getCategoryReducer from "./getCategoryReducer";
import getProductReducer from "./getProductReducer";

const rootReducers = combineReducers({
  getCategoryReducer,
  getProductReducer,
  getBrandReducer,
  cartReducer
});

export default rootReducers;