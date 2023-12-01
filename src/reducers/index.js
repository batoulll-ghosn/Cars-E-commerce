import { combineReducers } from "redux";
import userReducer from "./user";
import carReducer from "./car";
const allReducers = combineReducers({
  users : userReducer,
  cars: carReducer
});

export default allReducers;