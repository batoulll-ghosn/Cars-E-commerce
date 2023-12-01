import { combineReducers } from "redux";
import userReducer from "./user";
import carReducer from "./car";
import shipmentReducer from "./shipment";
const allReducers = combineReducers({
  users : userReducer,
  shipments: shipmentReducer,
  cars: carReducer
});

export default allReducers;