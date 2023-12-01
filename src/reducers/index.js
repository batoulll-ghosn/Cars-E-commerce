import { combineReducers } from "redux";
import userReducer from "./user";
import shipmentReducer from "./shipment";
const allReducers = combineReducers({
  users : userReducer,
  shipments: shipmentReducer
});

export default allReducers;